import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { buildAreas } from "@/data/whatIBuild";

export function WhatIBuild() {
  return (
    <Section id="what-i-build" eyebrow="What I Build" title="Areas of focus">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {buildAreas.map((area, index) => (
          <Reveal key={area.id} delayMs={index * 60}>
            <div className="h-full rounded-xl border border-border bg-surface p-6">
              <h3 className="text-lg font-semibold text-foreground">{area.title}</h3>
              <p className="mt-2 text-sm text-muted">{area.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
