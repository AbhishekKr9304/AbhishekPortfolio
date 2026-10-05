import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { playgroundEntries } from "@/data/lab";

export function Playground() {
  return (
    <Section id="playground" eyebrow="Playground" title="Interactive experiments">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {playgroundEntries.map((entry, index) => (
          <Reveal key={entry.id} delayMs={index * 40}>
            <div className="holo-card h-full rounded-xl border border-dashed border-border bg-surface p-5">
              <span className="font-mono text-xs uppercase tracking-wider text-accent">
                {entry.category}
              </span>
              <h3 className="holo-title mt-2 text-base font-semibold text-foreground">
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
