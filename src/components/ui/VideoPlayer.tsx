"use client";

import { useState } from "react";
import type { ProjectVideo } from "@/types/project";
import { toGoogleDriveEmbedUrl } from "@/lib/video";

export function VideoPlayer({ video, title }: { video: ProjectVideo; title: string }) {
  const [failed, setFailed] = useState(false);

  if (video.provider === "none" || !video.url) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-border bg-surface text-muted">
        [GOOGLE DRIVE VIDEO URL WILL BE PROVIDED]
      </div>
    );
  }

  if (video.provider === "mp4") {
    return (
      <video
        controls
        poster={video.posterSrc}
        className="aspect-video w-full rounded-xl border border-border bg-black"
      >
        <source src={video.url} type="video/mp4" />
      </video>
    );
  }

  const embedUrl = toGoogleDriveEmbedUrl(video.url);

  if (!embedUrl || failed) {
    return (
      <div className="flex aspect-video flex-col items-center justify-center gap-4 rounded-xl border border-border bg-surface">
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background hover:bg-accent-strong"
        >
          Watch Project Video
        </a>
      </div>
    );
  }

  return (
    <iframe
      src={embedUrl}
      title={video.title ?? title}
      allow="autoplay"
      onError={() => setFailed(true)}
      className="aspect-video w-full rounded-xl border border-border"
    />
  );
}
