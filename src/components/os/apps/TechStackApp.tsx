import { skillCategories } from "@/data/skills";

export function TechStackApp() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {skillCategories.map((category) => (
        <div key={category.id} className="rounded-lg border border-border bg-surface-elevated p-4">
          <h4 className="font-mono text-xs uppercase tracking-wider text-accent">{category.label}</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <li key={skill} className="rounded-full border border-border px-3 py-1 text-xs text-foreground">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
