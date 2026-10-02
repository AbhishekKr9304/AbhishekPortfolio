import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-semibold text-foreground">Project not found</h1>
      <p className="text-muted">This project doesn&apos;t exist or may have moved.</p>
      <Link href="/#projects" className="text-accent hover:underline">
        Back to projects
      </Link>
    </div>
  );
}
