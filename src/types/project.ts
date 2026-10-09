export type ProjectCategory = "VR" | "AR" | "MR" | "Mechanical";
export type ProjectDiscipline = "XR" | "Product Design";
export type ProjectStatus = "seeded" | "placeholder";

export interface ProjectFlowStep {
  label: string;
  description?: string;
}

export interface ProjectMediaItem {
  type: "image" | "video";
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectVideo {
  provider: "google-drive" | "mp4" | "none";
  url?: string;
  posterSrc?: string;
  title?: string;
  /** Sentence shown below the video describing which module/part of the project it covers. */
  caption?: string;
}

/** A paragraph, a bulleted list, or an external link shown on its own line. */
export type PrivacyPolicyBlock = string | string[] | { label: string; href: string };

export interface PrivacyPolicySection {
  id: string;
  title: string;
  blocks: PrivacyPolicyBlock[];
}

/** App-specific privacy policy, published at /projects/[slug]/privacy-policy. */
export interface ProjectPrivacyPolicy {
  /** Exact name as listed on the store. */
  appName: string;
  /** Where the app is distributed, e.g. "Meta Horizon Store". */
  platform: string;
  /** ISO date, e.g. "2026-10-09". */
  lastUpdated: string;
  summary: string;
  sections: PrivacyPolicySection[];
}

export interface Project {
  slug: string;
  title: string;
  discipline: ProjectDiscipline;
  category: ProjectCategory;
  client: string | null;
  year: string | null;
  technologies: string[];
  shortDescription: string;
  detailedDescription: string;
  objective: string;
  problem: string;
  flow: ProjectFlowStep[];
  userJourney: string[];
  features: string[];
  role: string;
  contribution: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  video: ProjectVideo;
  /** Optional additional videos (e.g. one per module). When set, these are shown as a playlist instead of `video`. */
  videos?: ProjectVideo[];
  gallery: ProjectMediaItem[];
  /** Set for apps published to a store; adds a privacy policy page and a link to it. */
  privacyPolicy?: ProjectPrivacyPolicy;
  status: ProjectStatus;
}
