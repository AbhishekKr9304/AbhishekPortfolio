import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { contactInfo } from "@/data/contact";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something">
      <Reveal className="max-w-2xl">
        <p className="text-lg text-muted">
          Have an idea for an AR, VR, MR or interactive experience?
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href={`mailto:${contactInfo.email}`}>Email me</ButtonLink>
          <ButtonLink href={contactInfo.linkedinUrl} variant="secondary">
            LinkedIn
          </ButtonLink>
          <ButtonLink href={contactInfo.githubUrl} variant="secondary">
            GitHub
          </ButtonLink>
          {contactInfo.resumeUrl ? (
            <ButtonLink href={contactInfo.resumeUrl} variant="secondary">
              Resume
            </ButtonLink>
          ) : (
            <span className="inline-flex items-center rounded-full border border-dashed border-border px-6 py-3 text-sm text-muted">
              Resume — coming soon
            </span>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
