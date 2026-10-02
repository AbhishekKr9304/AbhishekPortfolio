import type { AppId } from "@/types/workstation";
import type { ProjectCategory } from "@/types/project";
import { ProjectsApp } from "./apps/ProjectsApp";
import { AboutApp } from "./apps/AboutApp";
import { ExperienceApp } from "./apps/ExperienceApp";
import { TechStackApp } from "./apps/TechStackApp";
import { XRLabApp } from "./apps/XRLabApp";
import { PlaygroundApp } from "./apps/PlaygroundApp";
import { WorkflowApp } from "./apps/WorkflowApp";
import { ContactApp } from "./apps/ContactApp";

export const appTitles: Record<AppId, string> = {
  projects: "Projects",
  about: "About",
  experience: "Experience",
  "tech-stack": "Tech Stack",
  "xr-lab": "XR Lab",
  playground: "Playground",
  workflow: "Workflow",
  contact: "Contact",
};

export function AppContent({
  appId,
  categoryFilter,
}: {
  appId: AppId;
  categoryFilter?: ProjectCategory;
}) {
  switch (appId) {
    case "projects":
      return <ProjectsApp categoryFilter={categoryFilter} />;
    case "about":
      return <AboutApp />;
    case "experience":
      return <ExperienceApp />;
    case "tech-stack":
      return <TechStackApp />;
    case "xr-lab":
      return <XRLabApp />;
    case "playground":
      return <PlaygroundApp />;
    case "workflow":
      return <WorkflowApp />;
    case "contact":
      return <ContactApp />;
    default:
      return null;
  }
}
