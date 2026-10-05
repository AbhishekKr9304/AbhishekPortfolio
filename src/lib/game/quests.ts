import { navItems } from "@/data/nav";

export const ZONE_XP = 50;

/** Every homepage section is a zone to discover. */
export const zones = navItems.map((item, index) => ({
  id: item.id,
  label: item.label,
  number: String(index).padStart(2, "0"),
}));

export type QuestId =
  | "first-steps"
  | "halfway"
  | "explorer"
  | "navigator"
  | "inspector"
  | "curator"
  | "speedrunner"
  | "signal"
  | "secret";

export interface Quest {
  id: QuestId;
  title: string;
  description: string;
  xp: number;
  hidden?: boolean;
}

export const quests: Quest[] = [
  { id: "first-steps", title: "Press Start", description: "Leave the entry zone and step into the world.", xp: 50 },
  { id: "halfway", title: "Halfway There", description: "Discover half of all zones.", xp: 100 },
  { id: "explorer", title: "Cartographer", description: "Discover every zone on the map.", xp: 300 },
  { id: "navigator", title: "Navigator", description: "Open the Index to see the whole map.", xp: 50 },
  { id: "inspector", title: "Inspector", description: "Open a project case study.", xp: 150 },
  { id: "curator", title: "Curator", description: "Open three different case studies.", xp: 200 },
  { id: "speedrunner", title: "Speedrunner", description: "Reach the Contact zone within 45 seconds.", xp: 150 },
  { id: "signal", title: "Open a Channel", description: "Reach out through a contact link.", xp: 150 },
  { id: "secret", title: "Cheat Code", description: "↑ ↑ ↓ ↓ ← → ← → B A", xp: 250, hidden: true },
];

export const SPEEDRUN_MS = 45_000;
export const CURATOR_COUNT = 3;

export const levels = [
  { min: 0, title: "Visitor" },
  { min: 150, title: "Explorer" },
  { min: 400, title: "Builder" },
  { min: 700, title: "Spatial Thinker" },
  { min: 1100, title: "XR Pioneer" },
  { min: 1600, title: "Reality Architect" },
];

export function levelFor(xp: number) {
  let index = 0;
  levels.forEach((level, i) => {
    if (xp >= level.min) index = i;
  });
  const current = levels[index];
  const next = levels[index + 1];
  const progress = next ? (xp - current.min) / (next.min - current.min) : 1;
  return { level: index + 1, title: current.title, progress, nextAt: next?.min ?? null };
}
