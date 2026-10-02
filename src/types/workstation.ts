import type { ProjectCategory } from "./project";

export type AppId =
  | "projects"
  | "about"
  | "experience"
  | "tech-stack"
  | "xr-lab"
  | "playground"
  | "contact"
  | "workflow";

export type Vec3 = [number, number, number];

export interface WorkstationObjectConfig {
  id: string;
  label: string;
  description: string;
  appId: AppId;
  projectCategoryFilter?: ProjectCategory;
  position: Vec3;
  /** Optional static yaw/pitch/roll for the object group, e.g. angled monitors. */
  rotation?: Vec3;
  /** Camera position when this object is focused. */
  focusPosition: Vec3;
  /** Point the camera looks at when focused. */
  focusTarget: Vec3;
}
