export type SoundKey = "click" | "hover" | "transition" | "ambient";

export const soundRegistry: Record<SoundKey, string> = {
  click: "/audio/click.mp3",
  hover: "/audio/hover.mp3",
  transition: "/audio/transition.mp3",
  ambient: "/audio/ambient.mp3",
};
