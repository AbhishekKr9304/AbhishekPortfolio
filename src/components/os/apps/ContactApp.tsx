import { ButtonLink } from "@/components/ui/Button";
import { contactInfo } from "@/data/contact";

export function ContactApp() {
  return (
    <div>
      <p className="text-sm text-muted">Have an idea for an AR, VR, MR or interactive experience?</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonLink href={`mailto:${contactInfo.email}`}>Email me</ButtonLink>
        <ButtonLink href={contactInfo.linkedinUrl} variant="secondary">LinkedIn</ButtonLink>
        <ButtonLink href={contactInfo.githubUrl} variant="secondary">GitHub</ButtonLink>
        {contactInfo.resumeUrl ? (
          <ButtonLink href={contactInfo.resumeUrl} variant="secondary">Resume</ButtonLink>
        ) : (
          <span className="inline-flex items-center rounded-full border border-dashed border-border px-6 py-3 text-sm text-muted">
            Resume — coming soon
          </span>
        )}
      </div>
    </div>
  );
}
