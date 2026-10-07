import type { Project } from "@/types/project";
import { Tag } from "@/components/ui/Tag";
import { ProjectVideos } from "@/components/project/ProjectVideos";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <span className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
          {project.category}
        </span>
        <h1 className="mt-4 text-[length:var(--text-h1)] font-bold leading-[1.05] text-foreground">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{project.shortDescription}</p>
        {project.technologies.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        )}
        <div className="mt-10">
          <ProjectVideos
            videos={project.videos?.length ? project.videos : [project.video]}
            title={project.title}
          />
        </div>
      </div>
    </header>
  );
}
