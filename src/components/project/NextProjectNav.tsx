import Link from "next/link";
import type { Project } from "@/types/project";

export function NextProjectNav({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex items-center justify-between border-t border-border px-6 py-12 md:px-12 lg:px-20"
    >
      <div>
        <span className="font-mono text-xs uppercase tracking-wider text-muted">
          Next project
        </span>
        <h3 className="mt-2 text-2xl font-semibold text-foreground group-hover:text-accent">
          {project.title}
        </h3>
      </div>
      <span aria-hidden="true" className="text-2xl text-muted group-hover:text-accent">
        →
      </span>
    </Link>
  );
}
