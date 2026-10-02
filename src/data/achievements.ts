export interface AchievementEntry {
  id: string;
  title: string;
  project: string;
  description: string;
  date: string | null;
}

export const achievementEntries: AchievementEntry[] = [
  {
    id: "xrcc-finalist",
    title: "XRCC Finalist",
    project: "SmartLab XR — Industry 4.0 Experience",
    description: "[CONTENT NEEDED]",
    date: null,
  },
];
