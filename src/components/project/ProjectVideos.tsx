"use client";

import { useState } from "react";
import type { ProjectVideo } from "@/types/project";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

export function ProjectVideos({ videos, title }: { videos: ProjectVideo[]; title: string }) {
  const [active, setActive] = useState(0);
  const current = videos[active] ?? videos[0];

  return (
    <div>
      {/* key resets the player's internal state when switching videos */}
      <VideoPlayer key={active} video={current} title={title} />

      {current.caption && (
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {videos.length > 1 && (
            <span className="mr-2 font-mono text-xs uppercase tracking-[0.15em] text-accent">
              {String(active + 1).padStart(2, "0")}
            </span>
          )}
          {current.caption}
        </p>
      )}

      {videos.length > 1 && (
        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Project videos">
          {videos.map((video, i) => (
            <button
              key={`${video.url ?? "video"}-${i}`}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                i === active
                  ? "border-accent bg-accent text-background"
                  : "border-border bg-surface text-muted hover:border-accent hover:text-foreground"
              }`}
            >
              {video.title ?? `Video ${i + 1}`}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
