import Link from "next/link";
import { contactInfo } from "@/data/contact";

export interface PolicySection {
  id: string;
  title: string;
  content: React.ReactNode;
}

const formatDate = (isoDate: string) =>
  new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

export function PrivacyPolicyLayout({
  eyebrow,
  title,
  intro,
  lastUpdated,
  backHref,
  backLabel,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  /** ISO date, e.g. "2026-10-09". */
  lastUpdated: string;
  backHref: string;
  backLabel: string;
  sections: PolicySection[];
}) {
  const contactNumber = String(sections.length + 1).padStart(2, "0");

  return (
    <article className="px-6 pb-24 pt-32 md:px-12 md:pb-32 md:pt-40 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href={backHref}
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
        >
          <span aria-hidden="true">&larr;</span> {backLabel}
        </Link>

        <header className="mt-10 max-w-3xl border-b border-border pb-12">
          <p className="flex items-center gap-3 font-mono text-sm uppercase tracking-[0.2em] text-accent">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            {eyebrow}
          </p>
          <h1 className="mt-5 text-[length:var(--text-h1)] font-bold leading-[1.05] text-foreground">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{intro}</p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-muted">
            Last updated: <time dateTime={lastUpdated}>{formatDate(lastUpdated)}</time>
          </p>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-20">
          <nav
            aria-label="Privacy policy sections"
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              On this page
            </p>
            <ol className="mt-4 space-y-3 border-l border-border pl-4 text-sm">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    {String(index + 1).padStart(2, "0")} / {section.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-muted transition-colors hover:text-accent"
                >
                  {contactNumber} / Contact
                </a>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-12">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="scroll-mt-28"
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2
                  id={`${section.id}-heading`}
                  className="mt-2 text-2xl font-semibold text-foreground"
                >
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 leading-7 text-muted [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_strong]:text-foreground [&_ul]:space-y-2">
                  {section.content}
                </div>
              </section>
            ))}

            <section
              id="contact"
              aria-labelledby="contact-heading"
              className="scroll-mt-28 rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {contactNumber}
              </p>
              <h2
                id="contact-heading"
                className="mt-2 text-2xl font-semibold text-foreground"
              >
                Contact
              </h2>
              <p className="mt-4 leading-7 text-muted">
                For questions or privacy requests, email{" "}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="break-all text-accent underline underline-offset-4"
                >
                  {contactInfo.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
