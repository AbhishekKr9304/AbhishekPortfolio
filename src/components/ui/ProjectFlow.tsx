import type { ProjectFlowStep } from "@/types/project";

function FlowCard({ step, index }: { step: ProjectFlowStep; index: number }) {
  return (
    <div
      tabIndex={0}
      className="w-full max-w-sm rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent focus:outline-none focus-visible:border-accent"
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-semibold text-foreground">{step.label}</span>
      </div>
      {step.description && (
        <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="mt-2 text-sm text-muted">{step.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export function ProjectFlow({ steps }: { steps: ProjectFlowStep[] }) {
  if (steps.length === 0) {
    return <p className="text-muted">[PROJECT FLOW WILL BE PROVIDED]</p>;
  }

  return (
    <div>
      {/* Mobile: simple vertical sequence — the split-screen timeline needs room on both sides */}
      <ol className="flex flex-col gap-0 md:hidden">
        {steps.map((step, index) => (
          <li key={step.label} className="group flex flex-col">
            <FlowCard step={step} index={index} />
            {index < steps.length - 1 && (
              <div aria-hidden="true" className="my-2 ml-5 h-6 w-px bg-border" />
            )}
          </li>
        ))}
      </ol>

      {/* Desktop: alternating left/right timeline down a center spine */}
      <ol className="relative hidden md:block">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border"
        />
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          return (
            <li
              key={step.label}
              className="group relative grid grid-cols-2 gap-x-12 py-6"
            >
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-4 ring-background"
              />
              <div className="flex justify-end pr-2">{isLeft && <FlowCard step={step} index={index} />}</div>
              <div className="flex justify-start pl-2">{!isLeft && <FlowCard step={step} index={index} />}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
