import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { xrLabEntries } from "@/data/lab";

export function XRLab() {
  return (
    <Section id="xr-lab" eyebrow="XR Lab" title="Current experiments">
      <p className="mb-8 max-w-2xl text-muted">
        Experiments in progress — not finished projects.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {xrLabEntries.map((entry, index) => (
          <Reveal key={entry.id} delayMs={index * 40}>
            <div className="h-full rounded-xl border border-dashed border-border bg-surface p-5">
              <span className="font-mono text-xs uppercase tracking-wider text-accent">
                {entry.category}
              </span>
              <h3 className="mt-2 text-base font-semibold text-foreground">
                {entry.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{entry.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
