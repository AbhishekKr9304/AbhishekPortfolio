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
  status: ProjectStatus;
}
