import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Who I am">
      <Reveal className="max-w-3xl text-lg text-muted">
        <p>
          I&apos;m an XR Developer focused on augmented reality, virtual
          reality and mixed reality experiences for industrial training and
          spatial computing. I design and build real-time 3D interactive
          systems that connect people, technology and the physical world.
        </p>
      </Reveal>
    </Section>
  );
}
