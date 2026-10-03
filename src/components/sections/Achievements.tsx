import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { achievementEntries } from "@/data/achievements";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition">
      <div className="flex flex-col gap-4">
        {achievementEntries.map((entry) => (
          <Reveal key={entry.id}>
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">{entry.title}</h3>
                {entry.date && (
                  <span className="font-mono text-xs text-muted">{entry.date}</span>
                )}
              </div>
              <p className="mt-1 text-accent">{entry.project}</p>
              <p className="mt-3 text-sm text-muted">{entry.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
