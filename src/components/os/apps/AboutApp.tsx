import { bio } from "@/data/bio";
import { buildAreas } from "@/data/whatIBuild";

export function AboutApp() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground">Abhishek Kumar</h3>
      <p className="font-mono text-xs uppercase tracking-wider text-accent">XR Developer</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">{bio.intro}</p>

      <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-muted">What I build</h4>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {buildAreas.map((area) => (
          <div key={area.id} className="rounded-lg border border-border bg-surface-elevated p-3">
            <p className="text-sm font-semibold text-foreground">{area.title}</p>
            <p className="mt-1 text-xs text-muted">{area.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
