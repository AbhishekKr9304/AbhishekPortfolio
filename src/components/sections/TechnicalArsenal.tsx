import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { skillCategories } from "@/data/skills";

export function TechnicalArsenal() {
  return (
    <Section id="arsenal" eyebrow="Technical Arsenal" title="Tools of the trade">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Reveal key={category.id} delayMs={index * 80} variant="flip">
            <div className="h-full rounded-xl border border-border bg-surface p-6">
              <h3 className="font-mono text-sm uppercase tracking-wider text-accent">
                {category.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-sm text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
