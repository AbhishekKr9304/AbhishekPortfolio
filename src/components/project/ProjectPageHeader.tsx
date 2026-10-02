"use client";

import Link from "next/link";
import { SoundToggle } from "@/components/ui/SoundToggle";

export function ProjectPageHeader() {
  return (
    <div className="flex items-center justify-between border-b border-border px-6 py-4 md:px-12 lg:px-20">
      <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-foreground">
        AK
      </Link>
      <div className="flex items-center gap-3">
        <SoundToggle />
        <Link
          href="/"
          className="flex h-10 items-center rounded-full border border-border px-4 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
        >
          ← Return to Workspace
        </Link>
      </div>
    </div>
  );
}
