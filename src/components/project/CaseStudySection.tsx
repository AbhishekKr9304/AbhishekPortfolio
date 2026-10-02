export function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-accent">
          {title}
        </h2>
        <div className="mt-4 text-muted">{children}</div>
      </div>
    </section>
  );
}

export function CaseStudyList({ items }: { items: string[] }) {
  if (items.length === 0) return <p>[CONTENT NEEDED]</p>;
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
