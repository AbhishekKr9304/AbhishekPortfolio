import { xrLabEntries } from "@/data/lab";

export function XRLabApp() {
  return (
    <div>
      <p className="mb-4 text-sm text-muted">Experiments in progress — not finished projects.</p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {xrLabEntries.map((entry) => (
          <div key={entry.id} className="rounded-lg border border-dashed border-border bg-surface-elevated p-4">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">{entry.category}</span>
            <p className="mt-1 font-semibold text-foreground">{entry.title}</p>
            <p className="mt-1 text-sm text-muted">{entry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
