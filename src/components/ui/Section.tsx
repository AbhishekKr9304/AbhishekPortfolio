import { Reveal } from "@/components/ui/Reveal";
import { ScrambleText } from "@/components/xr/ScrambleText";
import { navItems } from "@/data/nav";

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
  const navIndex = navItems.findIndex((item) => item.id === id);
  const label = eyebrow && navIndex >= 0 ? `${String(navIndex).padStart(2, "0")} // ${eyebrow}` : eyebrow;

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
              <Reveal>
                <p className="mb-3 flex items-center gap-3 font-mono text-sm uppercase tracking-[0.2em] text-accent">
                  <span aria-hidden="true" className="h-px w-8 bg-accent" />
                  <ScrambleText text={label ?? ""} />
                </p>
              </Reveal>
            )}
            {title && (
              <Reveal variant="flip" delayMs={100}>
                <h2
                  id={`${id}-heading`}
                  className="text-[length:var(--text-h1)] font-bold leading-[1.05] text-foreground"
                >
                  {title}
                </h2>
              </Reveal>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
