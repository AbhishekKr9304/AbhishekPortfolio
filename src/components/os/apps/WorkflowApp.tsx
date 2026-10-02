import { workflowSteps } from "@/data/workflow";

export function WorkflowApp() {
  return (
    <ol className="flex flex-wrap items-center gap-2">
      {workflowSteps.map((step, index) => (
        <li key={step.id} className="flex items-center">
          <span className="rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-sm text-foreground">
            {step.label}
          </span>
          {index < workflowSteps.length - 1 && (
            <span aria-hidden="true" className="mx-2 text-muted">→</span>
          )}
        </li>
      ))}
    </ol>
  );
}
