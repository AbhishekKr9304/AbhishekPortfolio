export interface WorkshopEntry {
  id: string;
  title: string;
  description: string;
}

export interface WorkshopGroup {
  id: string;
  organization: string;
  workshops: WorkshopEntry[];
}

export const workshopGroups: WorkshopGroup[] = [
  {
    id: "maruti-suzuki",
    organization: "Maruti Suzuki",
    workshops: [
      {
        id: "maruti-intro-xr",
        title: "Introduction to XR — Workshop",
        description:
          "Trained Maruti Suzuki personnel on XR concepts, the ecosystem, and its potential use in manufacturing and training.",
      },
      {
        id: "maruti-maintenance-ar",
        title: "Maintenance through AR — Hands-on Workshop",
        description:
          "Led a practical AR session where participants developed a machine-maintenance AR application, demonstrating step-by-step maintenance procedures using AR.",
      },
    ],
  },
  {
    id: "tata-motors",
    organization: "Tata Motors",
    workshops: [
      {
        id: "tata-intro-xr",
        title: "Introduction to XR — Workshop",
        description:
          "Trained Tata Motors personnel on XR concepts, the ecosystem, and its potential use in manufacturing and training.",
      },
      {
        id: "tata-maintenance-ar",
        title: "Maintenance through AR — Hands-on Workshop",
        description:
          "Led a practical AR session where participants developed a machine-maintenance AR application, demonstrating step-by-step maintenance procedures using AR.",
      },
    ],
  },
];
