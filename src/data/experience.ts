export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  focus: string[];
  summary: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "iitd-aia-fsm",
    role: "XR Team Lead",
    organization: "IITD-AIA Foundation For Smart Manufacturing",
    period: "Feb 2025 – Present",
    focus: ["Team Leadership", "AR", "VR", "MR", "WebXR", "Industrial Training", "Unity", "Interactive Experiences", "Industry 4.0"],
    summary:
      "Hired full-time after the contract role. Develops AR, VR and MR experiences for industrial training and leads the XR team.",
  },
  {
    id: "iitd-aia-fsm-contract",
    role: "XR Developer & Designer (Contract)",
    organization: "IITD-AIA Foundation For Smart Manufacturing",
    period: "Aug 2024 – Feb 2025 · 6 months",
    focus: ["XR", "Web GL", "3D", "Unity", "Blender", "Meta Quest"],
    summary:
      "Continued as a contractual employee after the VR internship, working on XR development with Unity, Blender and Meta Quest.",
  },
  {
    id: "iitd-aia-fsm-vr-internship",
    role: "VR Developer & Designer Intern",
    organization: "IITD-AIA Foundation For Smart Manufacturing",
    period: "Feb 2024 – Aug 2024 · 6 months",
    focus: ["VR", "Unity", "Meta Quest", "XR Interaction Toolkit", "Blender", "Figma"],
    summary:
      "Completed a six-month internship in virtual reality development and design, building VR experiences for Meta Quest with Unity and the XR Interaction Toolkit, and designing with Blender and Figma.",
  },
  {
    id: "iitd-aia-fsm-internship",
    role: "AR Developer Intern",
    organization: "IITD-AIA Foundation For Smart Manufacturing",
    period: "2023 · 2 months",
    focus: ["AR", "Unity", "Vuforia", "Image Target", "Blender", "Figma", "Google Firebase"],
    summary:
      "Completed a two-month internship in augmented reality development, building AR applications with Unity and Vuforia.",
  },
];
