export interface WorkflowStep {
  id: string;
  label: string;
}

export const workflowSteps: WorkflowStep[] = [
  { id: "research", label: "Research" },
  { id: "concept", label: "Concept" },
  { id: "ux-flow", label: "UX / Flow" },
  { id: "prototype", label: "Prototype" },
  { id: "3d-development", label: "3D Development" },
  { id: "interaction", label: "Interaction" },
  { id: "testing", label: "Testing" },
  { id: "deployment", label: "Deployment" },
];
