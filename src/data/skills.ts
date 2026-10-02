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
      "Meta XR SDK",
      "XR Interaction Toolkit",
      "AR Foundation",
      "Vuforia",
    ],
  },
  {
    id: "development",
    label: "Development",
    skills: ["C#", "TypeScript", "React", "Next.js"],
  },
  {
    id: "3d",
    label: "3D",
    skills: ["Blender", "Fusion 360", "SolidWorks"],
  },
  {
    id: "web",
    label: "Web",
    skills: ["WebGL", "Three.js", "Tailwind CSS"],
  },
  {
    id: "tools",
    label: "Tools",
    skills: ["Git", "GitHub", "Firebase", "Figma"],
  },
];
