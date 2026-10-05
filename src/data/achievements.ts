export interface AchievementEntry {
  id: string;
  title: string;
  project: string;
  description: string;
  date: string | null;
}

export const achievementEntries: AchievementEntry[] = [
  {
    id: "xrcc-hackathon",
    title: "XRCC Hackathon",
    project: "SmartLab XR — Industry 4.0 Experience",
    description:
      " SmartLab XR, a project demonstrating lab facilities immersively through an MR-based application.",
    date: "May 2026",
  },

    {
    id: "djx hackathon",
    title: "DJX Hackathon 2",
    project: "Sushruta - MR based Surgical Experience",
    description:
      "Created Sushruta, a project demonstrating surgical procedures immersively through an MR-based application.",
    date: "February 2026",
  },

  {
    id: "xrdc-design-challenge",
    title: "XRDC Design Challenge",
    project: "AI + XR Integration",
    description: "Gained hands-on experience integrating the latest AI capabilities with XR.",
    date: "January 2025",
  },
  {
    id: "iimt-infinity-fest",
    title: "IIMT Infinity Fest",
    project: "AutoCAD Drafting Competition",
    description: "Cash prize and certificate winner in AutoCAD drafting.",
    date: "December 2022",
  },
];
