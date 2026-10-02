import { experienceEntries } from "@/data/experience";
import { achievementEntries } from "@/data/achievements";

export function ExperienceApp() {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-wider text-muted">Experience</h4>
      <div className="mt-3 flex flex-col gap-3">
        {experienceEntries.map((entry) => (
          <div key={entry.id} className="rounded-lg border border-border bg-surface-elevated p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-semibold text-foreground">{entry.role}</p>
              <span className="font-mono text-xs text-muted">{entry.period}</span>
            </div>
            <p className="text-sm text-accent">{entry.organization}</p>
            <p className="mt-2 text-sm text-muted">{entry.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {entry.focus.map((item) => (
                <span key={item} className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-muted">Achievements</h4>
      <div className="mt-3 flex flex-col gap-3">
        {achievementEntries.map((entry) => (
          <div key={entry.id} className="rounded-lg border border-border bg-surface-elevated p-4">
            <p className="font-semibold text-foreground">{entry.title}</p>
            <p className="text-sm text-accent">{entry.project}</p>
            <p className="mt-2 text-sm text-muted">{entry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
