import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { experienceEntries } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="flex flex-col gap-6">
        {experienceEntries.map((entry, index) => (
          <Reveal key={entry.id} variant={index % 2 === 0 ? "left" : "right"}>
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">{entry.role}</h3>
                <span className="font-mono text-xs text-muted">{entry.period}</span>
              </div>
              <p className="mt-1 text-accent">{entry.organization}</p>
              <p className="mt-3 text-sm text-muted">{entry.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
