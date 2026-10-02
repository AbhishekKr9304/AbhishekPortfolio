import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project/ProjectCard";
import type { ProjectCategory } from "@/types/project";

export function ProjectsApp({ categoryFilter }: { categoryFilter?: ProjectCategory }) {
  const list = categoryFilter
    ? projects.filter((project) => project.category === categoryFilter)
    : projects;

  return (
    <div>
      {categoryFilter && (
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">
          Filtered: {categoryFilter} projects
        </p>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {list.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
