import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/project/ProjectCard";
import { projects } from "@/data/projects";

export function ProductDesignProjects() {
  const productDesignProjects = projects.filter(
    (project) => project.discipline === "Product Design",
  );

  return (
    <Section
      id="product-design"
      eyebrow="Product Design Engineering"
      title="Mechanical & product design work"
    >
      {productDesignProjects.length === 0 ? (
        <Reveal>
          <div className="rounded-xl border border-dashed border-border p-8 text-center">
            <p className="text-muted">Product design projects — coming soon.</p>
          </div>
        </Reveal>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productDesignProjects.map((project, index) => (
            <Reveal key={project.slug} delayMs={index * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
