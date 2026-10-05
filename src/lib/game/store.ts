import {
  CURATOR_COUNT,
  SPEEDRUN_MS,
  ZONE_XP,
  levelFor,
  quests,
  zones,
  type QuestId,
} from "./quests";

const STORAGE_KEY = "ak-xr-game";

interface SavedProgress {
  discovered: string[];
  unlocked: QuestId[];
  viewedProjects: string[];
}

export type ToastKind = "zone" | "quest" | "cheat";

export interface Toast {
  id: number;
  kind: ToastKind;
  label: string;
  title: string;
  xp?: number;
}

export interface GameSnapshot extends SavedProgress {
  xp: number;
  toasts: Toast[];
  /** Set when the player just reached a new level; cleared by the overlay. */
  levelUp: { level: number; title: string } | null;
  cheatActive: boolean;
}

export type GameSound = "zone" | "quest" | "levelup" | "cheat";

const emptyProgress: SavedProgress = { discovered: [], unlocked: [], viewedProjects: [] };

function xpFor(progress: SavedProgress) {
  const questXp = progress.unlocked.reduce(
    (sum, id) => sum + (quests.find((quest) => quest.id === id)?.xp ?? 0),
    0,
  );
  return progress.discovered.length * ZONE_XP + questXp;
}

const serverSnapshot: GameSnapshot = {
  ...emptyProgress,
  xp: 0,
  toasts: [],
  levelUp: null,
  cheatActive: false,
};

/** Small external store so game state survives navigation and hydrates safely. */
class GameStore {
  private snapshot: GameSnapshot | null = null;
  private listeners = new Set<() => void>();
  private toastId = 0;
  private sessionStart = typeof window === "undefined" ? 0 : Date.now();
  soundHandler: ((sound: GameSound) => void) | null = null;

  subscribe = (listener: () => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  getSnapshot = (): GameSnapshot => {
    if (!this.snapshot) this.snapshot = { ...serverSnapshot, ...this.load() };
    return this.snapshot;
  };

  getServerSnapshot = (): GameSnapshot => serverSnapshot;

  private load(): SavedProgress & { xp: number } {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...emptyProgress, ...(JSON.parse(raw) as Partial<SavedProgress>) };
        return { ...parsed, xp: xpFor(parsed) };
      }
    } catch {
      // Corrupt or blocked storage: start fresh
    }
    return { ...emptyProgress, xp: 0 };
  }

  private commit(next: GameSnapshot) {
    this.snapshot = next;
    try {
      const { discovered, unlocked, viewedProjects } = next;
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ discovered, unlocked, viewedProjects }));
    } catch {
      // Progress just won't persist
    }
    this.listeners.forEach((listener) => listener());
  }

  private pushToast(state: GameSnapshot, toast: Omit<Toast, "id">): GameSnapshot {
    const id = ++this.toastId;
    window.setTimeout(() => this.dismissToast(id), 3400);
    return { ...state, toasts: [...state.toasts, { ...toast, id }].slice(-4) };
  }

  /** Applies progress changes, recomputes XP and raises a level-up if one happened. */
  private apply(state: GameSnapshot, change: Partial<SavedProgress>): GameSnapshot {
    const before = levelFor(state.xp).level;
    const merged = { ...state, ...change };
    const xp = xpFor(merged);
    const after = levelFor(xp);
    const next = { ...merged, xp };
    if (after.level > before) {
      this.soundHandler?.("levelup");
      return { ...next, levelUp: { level: after.level, title: after.title } };
    }
    return next;
  }

  private unlockInto(state: GameSnapshot, id: QuestId): GameSnapshot {
    if (state.unlocked.includes(id)) return state;
    const quest = quests.find((q) => q.id === id);
    if (!quest) return state;
    this.soundHandler?.("quest");
    const next = this.apply(state, { unlocked: [...state.unlocked, id] });
    return this.pushToast(next, { kind: "quest", label: "Quest complete", title: quest.title, xp: quest.xp });
  }

  discover(zoneId: string) {
    let state = this.getSnapshot();
    if (state.discovered.includes(zoneId)) return;
    const zone = zones.find((z) => z.id === zoneId);
    if (!zone) return;

    state = this.apply(state, { discovered: [...state.discovered, zoneId] });
    // The entry zone is counted quietly; the boot screen is still covering it
    if (zoneId !== zones[0]?.id) {
      this.soundHandler?.("zone");
      state = this.pushToast(state, {
        kind: "zone",
        label: "Zone discovered",
        title: `${zone.number} // ${zone.label}`,
        xp: ZONE_XP,
      });
      state = this.unlockInto(state, "first-steps");
    }
    if (state.discovered.length >= Math.ceil(zones.length / 2)) state = this.unlockInto(state, "halfway");
    if (state.discovered.length === zones.length) state = this.unlockInto(state, "explorer");
    if (zoneId === "contact" && Date.now() - this.sessionStart <= SPEEDRUN_MS) {
      state = this.unlockInto(state, "speedrunner");
    }
    this.commit(state);
  }

  unlock(id: QuestId) {
    const state = this.getSnapshot();
    const next = this.unlockInto(state, id);
    if (next !== state) this.commit(next);
  }

  viewProject(slug: string) {
    let state = this.getSnapshot();
    if (!state.viewedProjects.includes(slug)) {
      state = this.apply(state, { viewedProjects: [...state.viewedProjects, slug] });
    }
    state = this.unlockInto(state, "inspector");
    if (state.viewedProjects.length >= CURATOR_COUNT) state = this.unlockInto(state, "curator");
    this.commit(state);
  }

  activateCheat() {
    this.soundHandler?.("cheat");
    let state: GameSnapshot = { ...this.getSnapshot(), cheatActive: true };
    state = this.pushToast(state, { kind: "cheat", label: "Cheat activated", title: "Reality Override" });
    state = this.unlockInto(state, "secret");
    this.commit(state);
    window.setTimeout(() => this.commit({ ...this.getSnapshot(), cheatActive: false }), 4000);
  }

  dismissToast(id: number) {
    const state = this.getSnapshot();
    if (!state.toasts.some((toast) => toast.id === id)) return;
    this.commit({ ...state, toasts: state.toasts.filter((toast) => toast.id !== id) });
  }

  clearLevelUp() {
    this.commit({ ...this.getSnapshot(), levelUp: null });
  }

  reset() {
    this.sessionStart = Date.now();
    this.commit({ ...serverSnapshot });
  }
}

export const gameStore = new GameStore();
