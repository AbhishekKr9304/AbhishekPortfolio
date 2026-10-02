export interface BuildArea {
  id: string;
  title: string;
  description: string;
}

export const buildAreas: BuildArea[] = [
  {
    id: "ar",
    title: "AR",
    description: "Augmented reality experiences that overlay guidance and information onto real equipment and environments.",
  },
  {
    id: "vr",
    title: "VR",
    description: "Fully immersive virtual reality training simulations for industrial processes.",
  },
  {
    id: "mr",
    title: "MR",
    description: "Mixed reality experiences blending physical and digital objects for visualization and logistics.",
  },
  {
    id: "spatial-computing",
    title: "Spatial Computing",
    description: "Interfaces and interactions designed around real-world space rather than flat screens.",
  },
  {
    id: "industrial-training",
    title: "Industrial Training",
    description: "Interactive training tools for Industry 4.0 manufacturing and operations.",
  },
  {
    id: "real-time-3d",
    title: "Real-time 3D",
    description: "Performant real-time 3D applications built in Unity and WebGL.",
  },
];
