import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { PrivacyPolicyLayout } from "@/components/legal/PrivacyPolicyLayout";
import type { PrivacyPolicyBlock } from "@/types/project";

export async function generateStaticParams() {
  return projects
    .filter((project) => project.privacyPolicy)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const policy = getProjectBySlug(slug)?.privacyPolicy;
  if (!policy) return {};
  return {
    title: `${policy.appName} Privacy Policy | Abhishek Kumar`,
    description: policy.summary,
  };
}

function renderBlock(block: PrivacyPolicyBlock, index: number) {
  if (typeof block === "string") return <p key={index}>{block}</p>;
  if (Array.isArray(block)) {
    return (
      <ul key={index}>
        {block.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <p key={index}>
      <a href={block.href} target="_blank" rel="noopener noreferrer">
        {block.label}
      </a>
    </p>
  );
}

export default async function ProjectPrivacyPolicyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const policy = project?.privacyPolicy;
  if (!project || !policy) notFound();

  return (
    <PrivacyPolicyLayout
      eyebrow={`${policy.platform} // Privacy`}
      title={`${policy.appName} Privacy Policy`}
      intro={policy.summary}
      lastUpdated={policy.lastUpdated}
      backHref={`/projects/${project.slug}`}
      backLabel={`Back to ${project.title}`}
      sections={policy.sections.map((section) => ({
        id: section.id,
        title: section.title,
        content: section.blocks.map(renderBlock),
      }))}
    />
  );
}
