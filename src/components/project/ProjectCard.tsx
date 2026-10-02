import Link from "next/link";
import type { Project } from "@/types/project";
import { Tag } from "@/components/ui/Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent"
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-accent">
            {project.category}
          </span>
          {project.status === "placeholder" && (
            <span className="font-mono text-xs text-muted">Content needed</span>
          )}
        </div>
        <h3 className="mt-3 text-xl font-semibold text-foreground group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{project.shortDescription}</p>
      </div>
      {project.technologies.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      )}
    </Link>
  );
}
