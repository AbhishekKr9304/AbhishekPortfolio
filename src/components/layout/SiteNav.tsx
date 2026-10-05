"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/nav";
import { projects } from "@/data/projects";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { gameStore } from "@/lib/game/store";

export function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  // Section ids (e.g. "#workshops") only exist on the homepage. From any
  // other route, a bare hash link does nothing — resolve it back to the
  // homepage first so the jump actually lands somewhere.
  const sectionHref = (href: string) => (isHome ? href : `/${href}`);
  const [activeId, setActiveId] = useState(navItems[0]?.id ?? "");
  const [indexOpen, setIndexOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0 || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (indexOpen && !dialog.open) {
      dialog.showModal();
      gameStore.unlock("navigator");
    }
    if (!indexOpen && dialog.open) dialog.close();
  }, [indexOpen]);

  return (
    <>
      <Link
        href="/"
        className="fixed left-6 top-6 z-40 font-mono text-sm font-semibold tracking-tight text-foreground md:left-12"
      >
        AK
      </Link>

      <nav
        aria-label="Section index"
        className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 md:flex"
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={sectionHref(item.href)}
            aria-current={activeId === item.id ? "true" : undefined}
            className="group flex items-center gap-3"
          >
            <span className="max-w-0 overflow-hidden whitespace-nowrap font-mono text-xs text-muted opacity-0 transition-all duration-[var(--duration-base)] group-hover:max-w-xs group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:opacity-100">
              {item.label}
            </span>
            <span
              className={`h-2 w-2 rounded-full border border-border transition-colors ${
                activeId === item.id ? "bg-accent border-accent" : "bg-transparent"
              }`}
            />
          </a>
        ))}
      </nav>

      <div className="fixed right-6 top-6 z-40 flex items-center gap-3">
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setIndexOpen(true)}
          className="flex h-10 items-center rounded-full border border-border px-4 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
        >
          Index
        </button>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setIndexOpen(false)}
        className="m-auto w-[min(90vw,32rem)] rounded-2xl border border-border bg-surface p-8 text-foreground backdrop:bg-black/70"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Navigate</h2>
          <button
            type="button"
            onClick={() => setIndexOpen(false)}
            aria-label="Close navigation"
            className="h-8 w-8 rounded-full hover:bg-surface-elevated"
          >
            ×
          </button>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={sectionHref(item.href)}
                onClick={() => setIndexOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm hover:bg-surface-elevated hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <h3 className="mt-6 text-sm font-semibold text-muted">Projects</h3>
        <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                onClick={() => setIndexOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm hover:bg-surface-elevated hover:text-accent"
              >
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </dialog>

      <div className="fixed inset-x-0 bottom-6 z-40 flex justify-center md:hidden">
        <button
          type="button"
          onClick={() => setIndexOpen(true)}
          className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground shadow-lg"
        >
          Index
        </button>
      </div>
    </>
  );
}
