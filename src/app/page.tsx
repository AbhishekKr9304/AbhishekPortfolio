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

export default function Home() {
  return (
    <>
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
    </>
  );
}
