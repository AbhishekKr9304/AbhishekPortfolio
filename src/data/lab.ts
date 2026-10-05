export interface ExperimentEntry {
  id: string;
  title: string;
  category: string;
  description: string;
}

export const xrLabEntries: ExperimentEntry[] = [
  {
    id: "spatial-computing",
    title: "Spatial Computing",
    category: "Interaction",
    description:
      "Exploring interfaces that live in the room instead of on a screen: anchoring panels and 3D content to real surfaces with Meta Quest passthrough, so digital instructions stay in place beside the physical workstation.",
  },
    {
    id: "projection-interaction",
    title: "Projection Interaction",
    category: "Installation",
    description:
      "Turning ordinary walls, floors and tables into touch surfaces: projecting Unity content onto physical spaces and using depth sensing to react to hands and footsteps, with no headset needed.",
  },

  {
    id: "webxr",
    title: "WebXR",
    category: "Web",
    description:
      "Bringing XR training to the browser: testing how far Three.js and WebXR can go on Meta Quest, so a trainee can open a link and step into a scene with no app install.",
  },
  {
    id: "ai-xr",
    title: "AI + XR",
    category: "Research",
    description:
      "Combining XR with AI models: a RAG-based assistant that answers trainee questions from the actual SOPs and manuals in context, and an image tracking model that inspects the assembled product to validate its quality.",
  },
  {
    id: "gesture-interaction",
    title: "Gesture Interaction",
    category: "Interaction",
    description:
      "Designing gestures that feel natural on the shop floor: pinch, grab and point interactions for operating virtual machines, tuned to stay reliable under real hand-tracking conditions.",
  },
  {
    id: "shaders",
    title: "Shaders",
    category: "Rendering",
    description:
      "Writing custom shaders in Unity Shader Graph for clearer training visuals: X-ray views through machine housings, highlight outlines on the next part to pick, and holographic guide effects.",
  },
  {
    id: "procedural-generation",
    title: "Procedural 3D",
    category: "Generation",
    description:
      "Building training environments from rules instead of by hand: generating factory layouts, workstations and props with code so new scenarios can be created and varied in minutes.",
  },
  {
    id: "gaussian-splats",
    title: "Gaussian Splats",
    category: "Rendering",
    description:
      "Capturing real spaces as photorealistic Gaussian Splats from a simple video scan, then bringing them into XR so trainees can walk through an actual factory floor instead of a hand-modelled copy.",
  },
];

export const playgroundEntries: ExperimentEntry[] = [
  {
    id: "physics-interaction",
    title: "Physics Interaction",
    category: "Experiment",
    description:
      "Real-time physics sandbox: stacking, throwing and snapping parts together to test how weight and collisions feel in VR.",
  },
  {
    id: "shader-experiments",
    title: "Shader Experiments",
    category: "Experiment",
    description:
      "A collection of small shader studies: dissolve transitions, scanning lines, force fields and stylised materials.",
  },
  {
    id: "spatial-audio-demo",
    title: "Spatial Audio",
    category: "Experiment",
    description:
      "Sound that comes from where it should: positional audio cues that guide attention toward a machine or a warning in 3D space.",
  },
  {
    id: "projection-mapping",
    title: "Projection Mapping",
    category: "Experiment",
    description:
      "Mapping animated visuals onto physical objects so a plain surface or model comes alive with light and motion.",
  },
  {
    id: "webxr-demo",
    title: "WebXR",
    category: "Experiment",
    description:
      "A lightweight WebXR scene that runs straight from the browser on desktop, phone and Meta Quest.",
  },
  {
    id: "ai-xr-demo",
    title: "AI + XR",
    category: "Experiment",
    description:
      "A virtual assistant inside a MR scene that answers spoken questions about the equipment in front of you.",
  },
  
];
