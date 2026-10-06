import type { Metadata } from "next";
import Link from "next/link";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "Privacy Policy | Abhishek Kumar",
  description:
    "Learn how Abhishek Kumar's portfolio handles browser storage, hosting data, external links, and messages.",
};

const sections = [
  {
    id: "information",
    title: "Information this website handles",
    content: (
      <>
        <p>
          This is a personal portfolio website. I do not use a contact form,
          advertising trackers, or analytics tools to collect personal
          information through the site.
        </p>
        <p>
          If you contact me by email, I receive the information you choose to
          include, such as your name, email address, and message. I use it only
          to read and respond to your enquiry and for any related follow-up.
        </p>
      </>
    ),
  },
  {
    id: "browser-storage",
    title: "Browser storage",
    content: (
      <>
        <p>
          The site stores a small amount of information in your browser so that
          interactive features work as expected:
        </p>
        <ul>
          <li>Your light or dark theme preference.</li>
          <li>Your progress in the portfolio&apos;s optional game features.</li>
          <li>Whether the opening animation has already played in the current session.</li>
        </ul>
        <p>
          This information stays on your device and is not sent to me. You can
          remove it at any time by clearing this site&apos;s storage in your browser.
        </p>
      </>
    ),
  },
  {
    id: "hosting",
    title: "Hosting and technical data",
    content: (
      <p>
        This website is hosted by Vercel. When you visit, Vercel may process
        routine technical information needed to deliver and protect the site,
        such as your IP address, browser and device details, requested pages,
        timestamps, and diagnostic or security logs. That processing is
        governed by Vercel&apos;s own privacy practices.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "Sharing and retention",
    content: (
      <>
        <p>
          I do not sell or rent personal information. Information you send by
          email is shared only when needed to respond to you, comply with a
          legal obligation, or protect the security and rights of this website
          and its visitors.
        </p>
        <p>
          Email correspondence is kept only for as long as reasonably needed
          for the conversation, related professional records, or legal
          obligations.
        </p>
      </>
    ),
  },
  {
    id: "external-links",
    title: "External links",
    content: (
      <p>
        This portfolio links to third-party websites such as LinkedIn and
        GitHub. Their privacy practices apply once you leave this website, and
        I am not responsible for how those services handle your information.
      </p>
    ),
  },
  {
    id: "choices",
    title: "Your choices",
    content: (
      <p>
        You can disable or clear browser storage through your browser settings.
        You may also contact me to ask about, correct, or request deletion of
        personal information you have sent directly to me, subject to any
        information I must retain by law.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        I may update this policy when the website or its data practices change.
        The latest version will be published on this page with a revised date.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <article className="px-6 pb-24 pt-32 md:px-12 md:pb-32 md:pt-40 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
        >
          <span aria-hidden="true">&larr;</span> Back to portfolio
        </Link>

        <header className="mt-10 max-w-3xl border-b border-border pb-12">
          <p className="flex items-center gap-3 font-mono text-sm uppercase tracking-[0.2em] text-accent">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Legal // Privacy
          </p>
          <h1 className="mt-5 text-[length:var(--text-h1)] font-bold leading-[1.05] text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            A plain-language explanation of what this portfolio stores, what it
            does not collect, and the choices available to you.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-muted">
            Last updated: <time dateTime="2026-10-06">October 6, 2026</time>
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
                  08 / Contact
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
                <div className="mt-4 space-y-4 leading-7 text-muted [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_ul]:space-y-2">
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
                08
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
