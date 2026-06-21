"use client"
import {useState} from "react";

import Hero from "./components/Hero";
import Skills from "./components/Skills"
import ProjectCard from "./components/ProjectCard";
import Navbar from "./components/Navbar";

const projects = [
  {
    title: "Pneumatic Trainer Kit VR",
    technology: "Unity, Meta XR SDK, Quest 3",
    description:
      "Virtual pneumatic training system with SAC, DAC, valves and pressure visualization.",
  },

  {
    title: "FSM Smart Lab AR",
    technology: "Unity, Vuforia, Firebase",
    description:
      "Augmented reality smart lab experience with machine information and navigation.",
  },

  {
    title: "Robotic Welding Cell VR",
    technology: "Unity, XR Interaction Toolkit",
    description:
      "VR-based robotic welding training simulator for industrial learning.",
  },

  {
    title: "VMC AR Training",
    technology: "Unity, AR Foundation",
    description:
      "Interactive AR training application for VMC machine operations.",
  },
];

export default function Home() {
  const [isProjectsVisible, setIsProjectsVisible] = useState(true);
  return (
    <main>
      <Navbar/>
        <Hero/>
        <Skills/>
        <button 
            onClick= {() => setIsProjectsVisible(!isProjectsVisible)}
          >
            {isProjectsVisible? "Hide Projects" : "Show Projects"}
          </button>
        {isProjectsVisible && (
          <section>    
            <h1 className= "text-4xl font-bold m-4">
              Projects
            </h1>
            {projects.map((project) => (
              <ProjectCard
                key= {project.title}
                title={project.title}
                technology={project.technology}
                description={project.description}
              />
              ))}
        </section>)}
    </main>
  );
}
  
