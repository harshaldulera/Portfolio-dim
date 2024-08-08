import React from "react";
import Heading from "@/globals/Heading";
import Link from "next/link";
import { skills } from "@/data/data";
import Skill from "@/globals/Skill";
import { SkillProps } from "@/globals/Skill";

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
  ]

  return (
    <div className="flex flex-col justify-center items-center mt-10">
        {types.map((type , index) => {
          return (
            <div className="my-10 flex flex-col w-full items-center" key={index}>
              <Heading title={type.label} image="/portal.svg" />
              <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-24 md:gap-12 w-full place-items-center">
                {filterSkills(skills, type.name).map((skill: SkillProps , index) => (
                  <Link href={skill.link} key={index}>
                    <Skill
                      key={skill.name}
                      image={skill.image}
                      name={skill.name}
                      type={skill.type}
                      link={skill.link}
                    />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      {/* </div> */}
    </div>
  );
}
