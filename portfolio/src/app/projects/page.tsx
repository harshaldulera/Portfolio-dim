import React from "react";
import Heading from "@/globals/Heading";
import { ProjectCard } from "@/globals/project-card/ProjectCard";
import { projects } from "@/data/data";
export default function Projects() {
  return (
    <div className="flex flex-col items-center mt-10">
      <Heading title="My Top Projects" image="/portal.svg" />
      <div className="w-full my-10 flex gap-10 xl:flex-nowrap sm:flex-wrap items-start">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            image={project.image}
            github={project.github}
            hosted_link={project.hosted_link}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
