"use client";

import { useSyncExternalStore } from "react";
import { WorkstationExperience } from "./WorkstationExperience";
import { SiteNav } from "@/components/layout/SiteNav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { TechnicalArsenal } from "@/components/sections/TechnicalArsenal";
import { Workflow } from "@/components/sections/Workflow";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { XRLab } from "@/components/sections/XRLab";
import { Playground } from "@/components/sections/Playground";
import { Contact } from "@/components/sections/Contact";

const QUERY = "(hover: hover) and (pointer: fine) and (min-width: 1024px)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

function FlatFallback() {
  return (
    <>
      <SiteNav />
      <Hero />
      <About />
      <WhatIBuild />
      <FeaturedProjects />
      <TechnicalArsenal />
      <Workflow />
      <Experience />
      <Achievements />
      <XRLab />
      <Playground />
      <Contact />
      <Footer />
    </>
  );
}

export function ResponsiveHome() {
  const supports3D = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return supports3D ? <WorkstationExperience /> : <FlatFallback />;
}
