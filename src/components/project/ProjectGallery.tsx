"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { ProjectMediaItem } from "@/types/project";

export function ProjectGallery({ items }: { items: ProjectMediaItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // +1 when moving forward, -1 when moving back; drives the slide direction
  const [direction, setDirection] = useState(1);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = activeIndex !== null;
  const active = open ? items[activeIndex] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const step = (delta: number) => {
    setDirection(delta);
    setActiveIndex((index) => (index === null ? index : (index + delta + items.length) % items.length));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
  };

  if (items.length === 0) {
    return <p className="text-muted">[MEDIA GALLERY WILL BE PROVIDED]</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            onClick={() => {
              setDirection(1);
              setActiveIndex(index);
            }}
            aria-label={`View larger: ${item.caption ?? item.alt}`}
            className="group relative overflow-hidden rounded-xl border border-border text-left transition-colors hover:border-accent"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/70 via-black/0 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <span className="text-sm font-medium text-white">{item.caption}</span>
              <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-black/60 text-white">
                ⤢
              </span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={active?.caption ?? "Image viewer"}
        onClose={() => setActiveIndex(null)}
        onKeyDown={handleKeyDown}
        onClick={(event) => event.target === event.currentTarget && setActiveIndex(null)}
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-black/90 backdrop:backdrop-blur-sm"
      >
        {/* Clicks on this padded area count as "outside" the image and close the viewer */}
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-4 p-4 md:p-12"
          onClick={(event) => event.target === event.currentTarget && setActiveIndex(null)}
        >
          <div
            className="relative flex w-full max-w-6xl flex-1 items-center justify-center overflow-hidden"
            onClick={(event) => event.target === event.currentTarget && setActiveIndex(null)}
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              {active && (
                <motion.img
                  key={activeIndex}
                  src={active.src}
                  alt={active.alt}
                  custom={direction}
                  variants={{
                    enter: (d: number) => ({ opacity: 0, x: d * 80, scale: 0.96 }),
                    center: { opacity: 1, x: 0, scale: 1 },
                    exit: (d: number) => ({ opacity: 0, x: d * -80, scale: 0.96 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="max-h-[78vh] max-w-full rounded-lg object-contain shadow-2xl"
                />
              )}
            </AnimatePresence>
          </div>

          <div className="flex w-full max-w-6xl items-center justify-between gap-4 text-white">
            <p className="min-w-0 text-sm md:text-base">
              <span className="mr-3 font-mono text-xs text-accent">
                {String((activeIndex ?? 0) + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
              {active?.caption}
            </p>
            {items.length > 1 && (
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous image"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-lg hover:border-accent hover:text-accent"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next image"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-lg hover:border-accent hover:text-accent"
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setActiveIndex(null)}
          aria-label="Close image viewer"
          className="fixed right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/50 text-xl text-white hover:border-accent hover:text-accent md:right-6 md:top-6"
        >
          ×
        </button>
      </dialog>
    </>
  );
}
