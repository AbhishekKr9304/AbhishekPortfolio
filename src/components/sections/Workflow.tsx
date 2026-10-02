import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { workflowSteps } from "@/data/workflow";

export function Workflow() {
  return (
    <Section id="workflow" eyebrow="Development Workflow" title="From idea to experience">
      <Reveal>
        <ol className="flex flex-col gap-0 md:flex-row md:flex-wrap md:items-center">
          {workflowSteps.map((step, index) => (
            <li key={step.id} className="flex items-center">
              <span className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground">
                {step.label}
              </span>
              {index < workflowSteps.length - 1 && (
                <span aria-hidden="true" className="mx-3 text-muted">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
