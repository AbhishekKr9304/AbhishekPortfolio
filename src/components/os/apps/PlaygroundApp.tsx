import { playgroundEntries } from "@/data/lab";

export function PlaygroundApp() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {playgroundEntries.map((entry) => (
        <div key={entry.id} className="rounded-lg border border-dashed border-border bg-surface-elevated p-4">
          <span className="font-mono text-xs uppercase tracking-wider text-accent">{entry.category}</span>
          <p className="mt-1 font-semibold text-foreground">{entry.title}</p>
          <p className="mt-1 text-sm text-muted">{entry.description}</p>
        </div>
      ))}
    </div>
  );
}
