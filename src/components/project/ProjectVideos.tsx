"use client";

import { useState } from "react";
import type { ProjectVideo } from "@/types/project";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

export function ProjectVideos({ videos, title }: { videos: ProjectVideo[]; title: string }) {
  const [active, setActive] = useState(0);
  const current = videos[active] ?? videos[0];
  const step = (delta: number) => setActive((index) => (index + delta + videos.length) % videos.length);
  const titleOf = (i: number) => videos[i].title ?? `Video ${i + 1}`;

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
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project videos">
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
                {titleOf(i)}
              </button>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span className="font-mono text-xs text-muted">
              {String(active + 1).padStart(2, "0")} / {String(videos.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={`Previous video: ${titleOf((active - 1 + videos.length) % videos.length)}`}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-lg text-muted transition-colors hover:border-accent hover:text-accent"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label={`Next video: ${titleOf((active + 1) % videos.length)}`}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-lg text-muted transition-colors hover:border-accent hover:text-accent"
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
