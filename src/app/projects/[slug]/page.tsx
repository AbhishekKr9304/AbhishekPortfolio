import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAdjacentProject, projects } from "@/data/projects";
import { ProjectPageHeader } from "@/components/project/ProjectPageHeader";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { NextProjectNav } from "@/components/project/NextProjectNav";
import { CaseStudySection, CaseStudyList } from "@/components/project/CaseStudySection";
import { ProjectFlow } from "@/components/ui/ProjectFlow";
import { Footer } from "@/components/layout/Footer";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Abhishek Kumar`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const nextProject = getAdjacentProject(project.slug);

  return (
    <article>
      <ProjectPageHeader />
      <ProjectHero project={project} />

      <CaseStudySection title="Project Overview">
        <p>{project.detailedDescription}</p>
      </CaseStudySection>

      <CaseStudySection title="Objective">
        <p>{project.objective}</p>
      </CaseStudySection>

      <CaseStudySection title="Project Flow">
        <ProjectFlow steps={project.flow} />
      </CaseStudySection>

      <CaseStudySection title="User Journey">
        <CaseStudyList items={project.userJourney} />
      </CaseStudySection>

      <CaseStudySection title="Key Features">
        <CaseStudyList items={project.features} />
      </CaseStudySection>

      <CaseStudySection title="My Role">
        <p>{project.role}</p>
      </CaseStudySection>

      <CaseStudySection title="My Contribution">
        <p>{project.contribution}</p>
      </CaseStudySection>

      <CaseStudySection title="Challenges">
        <CaseStudyList items={project.challenges} />
      </CaseStudySection>

      <CaseStudySection title="Solutions">
        <CaseStudyList items={project.solutions} />
      </CaseStudySection>

      <CaseStudySection title="Results">
        <CaseStudyList items={project.results} />
      </CaseStudySection>

      <CaseStudySection title="Media Gallery">
        <ProjectGallery items={project.gallery} />
      </CaseStudySection>

      <NextProjectNav project={nextProject} />
      <Footer />
    </article>
  );
}
