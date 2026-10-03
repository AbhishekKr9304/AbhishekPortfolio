import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { workshopGroups } from "@/data/workshops";

export function Workshops() {
  return (
    <Section id="workshops" eyebrow="XR Trainer" title="Workshops & Seminars">
      <div className="grid gap-8 md:grid-cols-2">
        {workshopGroups.map((group) => (
          <div key={group.id} className="flex flex-col gap-4">
            <h3 className="font-mono text-sm uppercase tracking-[0.15em] text-muted">
              {group.organization}
            </h3>
            {group.workshops.map((workshop) => (
              <Reveal key={workshop.id}>
                <div className="rounded-xl border border-border bg-surface p-6">
                  <h4 className="text-lg font-semibold text-foreground">{workshop.title}</h4>
                  <p className="mt-3 text-sm text-muted">{workshop.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
