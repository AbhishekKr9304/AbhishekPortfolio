import { soundRegistry, type SoundKey } from "./sounds";

const MUTE_STORAGE_KEY = "portfolio:sound-muted";

export class AudioManager {
  private elements = new Map<SoundKey, HTMLAudioElement>();
  private muted = true;

  constructor() {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(MUTE_STORAGE_KEY);
    this.muted = stored === null ? true : stored === "true";
  }

  isMuted(): boolean {
    return this.muted;
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
    if (typeof window === "undefined") return;
    window.localStorage.setItem(MUTE_STORAGE_KEY, String(muted));
  }

  private getElement(key: SoundKey): HTMLAudioElement | null {
    if (typeof window === "undefined") return null;
    let el = this.elements.get(key);
    if (!el) {
      el = new Audio(soundRegistry[key]);
      el.preload = "none";
      this.elements.set(key, el);
    }
    return el;
  }

  play(key: SoundKey): void {
    if (this.muted) return;
    const el = this.getElement(key);
    if (!el) return;
    try {
      el.currentTime = 0;
      void el.play().catch(() => {
        // Missing or blocked audio asset — fail silently by design.
      });
    } catch {
      // Ignore playback errors so missing assets never break the UI.
    }
  }
}
