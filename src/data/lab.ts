export interface ExperimentEntry {
  id: string;
  title: string;
  category: string;
  description: string;
}

export const xrLabEntries: ExperimentEntry[] = [
  { id: "hand-tracking", title: "Hand Tracking", category: "Interaction", description: "[CONTENT NEEDED]" },
  { id: "spatial-computing", title: "Spatial Computing", category: "Interaction", description: "[CONTENT NEEDED]" },
  { id: "projection-interaction", title: "Projection Interaction", category: "Installation", description: "[CONTENT NEEDED]" },
  { id: "webxr", title: "WebXR", category: "Web", description: "[CONTENT NEEDED]" },
  { id: "ai-xr", title: "AI + XR", category: "Research", description: "[CONTENT NEEDED]" },
  { id: "gesture-interaction", title: "Gesture Interaction", category: "Interaction", description: "[CONTENT NEEDED]" },
  { id: "spatial-audio", title: "Spatial Audio", category: "Audio", description: "[CONTENT NEEDED]" },
  { id: "shaders", title: "Shaders", category: "Rendering", description: "[CONTENT NEEDED]" },
];

export const playgroundEntries: ExperimentEntry[] = [
  { id: "hand-tracking-demo", title: "Hand Tracking", category: "Experiment", description: "[CONTENT NEEDED]" },
  { id: "physics-interaction", title: "Physics Interaction", category: "Experiment", description: "[CONTENT NEEDED]" },
  { id: "shader-experiments", title: "Shader Experiments", category: "Experiment", description: "[CONTENT NEEDED]" },
  { id: "spatial-audio-demo", title: "Spatial Audio", category: "Experiment", description: "[CONTENT NEEDED]" },
  { id: "projection-mapping", title: "Projection Mapping", category: "Experiment", description: "[CONTENT NEEDED]" },
  { id: "webxr-demo", title: "WebXR", category: "Experiment", description: "[CONTENT NEEDED]" },
  { id: "ai-xr-demo", title: "AI + XR", category: "Experiment", description: "[CONTENT NEEDED]" },
  { id: "procedural-3d", title: "Procedural 3D", category: "Experiment", description: "[CONTENT NEEDED]" },
];
