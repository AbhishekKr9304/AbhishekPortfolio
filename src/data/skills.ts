export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "xr",
    label: "XR",
    skills: [
      "Unity",
      "Meta Quest",
      "HoloLens",
      "MRTK",
      "Meta All in One SDK",
      "XR Interaction Toolkit",
      "AR Foundation",
      "Vuforia",
      "Multiset.AI"
  
    ],
  },
  {
    id: "development",
    label: "Development",
    skills: ["C#", "Python"],
  },
  {
    id: "3d",
    label: "3D",
    skills: ["Blender", "Fusion 360", "SolidWorks","AutoCAD"],
  },
  // {
  //   id: "web",
  //   label: "Web",
  //   skills: ["WebGL", "Three.js", "Tailwind CSS"],
  // },
  {
    id: "tools",
    label: "Tools",
    skills: ["Git", "GitHub", "Firebase", "Figma"],
  },
];
