import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ProductDesignProjects } from "@/components/sections/ProductDesignProjects";
import { TechnicalArsenal } from "@/components/sections/TechnicalArsenal";
import { Workflow } from "@/components/sections/Workflow";
import { Experience } from "@/components/sections/Experience";
import { Workshops } from "@/components/sections/Workshops";
import { Achievements } from "@/components/sections/Achievements";
import { XRLab } from "@/components/sections/XRLab";
import { Playground } from "@/components/sections/Playground";
import { Contact } from "@/components/sections/Contact";
import { SkillsBanner } from "@/components/xr/SkillsBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsBanner />
      <About />
      <WhatIBuild />
      <FeaturedProjects />
      <ProductDesignProjects />
      <TechnicalArsenal />
      <Workflow />
      <Experience />
      <Workshops />
      <Achievements />
      <XRLab />
      <Playground />
      <Contact />
    </>
  );
}
