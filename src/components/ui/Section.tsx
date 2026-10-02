export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-heading` : undefined}
      className={`scroll-mt-24 border-t border-border px-6 py-24 md:px-12 lg:px-20 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <header className="mb-12">
            {eyebrow && (
              <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                id={`${id}-heading`}
                className="text-[length:var(--text-h1)] font-bold leading-[1.05] text-foreground"
              >
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
