import type { ProjectFlowStep } from "@/types/project";

// Example fixture proving variable-length flows render correctly, e.g.:
// SCAN -> IDENTIFY -> INSPECT -> GUIDE -> MAINTAIN
// This is illustrative only — real flow content is seeded per-project in data/projects.ts.

export function ProjectFlow({ steps }: { steps: ProjectFlowStep[] }) {
  if (steps.length === 0) {
    return <p className="text-muted">[PROJECT FLOW WILL BE PROVIDED]</p>;
  }

  return (
    <ol className="flex flex-col gap-0 md:flex-row md:items-stretch md:gap-0">
      {steps.map((step, index) => (
        <li key={step.label} className="flex flex-1 flex-col md:flex-row md:items-center">
          <div className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-5">
            <span className="font-mono text-xs text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-semibold text-foreground">{step.label}</span>
            {step.description && (
              <span className="text-sm text-muted">{step.description}</span>
            )}
          </div>
          {index < steps.length - 1 && (
            <div
              aria-hidden="true"
              className="my-2 h-6 w-px self-center bg-border md:mx-3 md:my-0 md:h-px md:w-6"
            />
          )}
        </li>
      ))}
    </ol>
  );
}
