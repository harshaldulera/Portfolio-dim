"use client";
import React from "react";
import Heading from "@/globals/Heading";
import Link from "next/link";
import { skills } from "@/data/data";
import Skill from "@/globals/Skill";
import { SkillProps } from "@/globals/Skill";
import { motion } from "framer-motion";

export default function Skills() {
  function filterSkills(skills: SkillProps[], data: string) {
    return skills.filter((skill: SkillProps) => skill.type === data);
  }

  const types = [
    {
      name: "programming",
      label: "Programming Languages",
    },
    {
      name: "frontend",
      label: "Frontend Technologies",
    },
    {
      name: "backend",
      label: "Backend Technologies",
    },
    {
      name: "database",
      label: "Databases",
    },
    {
      name: "tools",
      label: "Other Tools and Version Control",
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-10 lg:p-0 p-3">
      {types.map((type, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="my-10 flex flex-col w-full items-center"
        >
          <Heading title={type.label} image="/portal.svg" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } },
            }}
            className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-24 md:gap-12 w-full place-items-center"
          >
            {filterSkills(skills, type.name).map((skill: SkillProps, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <Link href={skill.link}>
                  <Skill
                    key={skill.name}
                    image={skill.image}
                    name={skill.name}
                    type={skill.type}
                    link={skill.link}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
