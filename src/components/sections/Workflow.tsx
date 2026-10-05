import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WorkflowPipeline } from "@/components/xr/WorkflowPipeline";
import { workflowSteps } from "@/data/workflow";

export function Workflow() {
  return (
    <Section id="workflow" eyebrow="Development Workflow" title="From idea to experience">
      <Reveal>
        <WorkflowPipeline steps={workflowSteps} />
      </Reveal>
    </Section>
  );
}
