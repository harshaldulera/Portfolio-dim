"use client";
import React from "react";
import Heading from "@/globals/Heading";
import { ProjectCard } from "@/globals/project-card/ProjectCard";
import { projects } from "@/data/data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="flex flex-col items-center mt-10 lg:p-0 p-3">
      <Heading title="My Top Projects" image="/portal.svg" />
      <motion.div
        className="w-full my-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 p-5"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard
              key={project.name}
              name={project.name}
              image={project.image}
              github={project.github}
              hosted_link={project.hosted_link}
              description={project.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
