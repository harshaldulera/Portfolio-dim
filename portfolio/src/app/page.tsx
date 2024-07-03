import Image from "next/image";
import "@/app/globals.css";
import { CustomButton } from "@/globals/navbar/Navbar";
import { skills } from "@/data/data";
import Link from "next/link";
import { ProjectCard } from "@/globals/project-card/ProjectCard";
import { projects } from "@/data/data";
import { ClientCard } from "@/globals/client-card/ClientCard";
import { clients } from "@/data/data";
import { SkillProps } from "./skills/page";

interface HeadingProps {
  title: string;
  image: any;
}

export const Heading = (props: HeadingProps) => (
  <div className="flex items-center gap-5">
    <h1 className="text-4xl text-white">{props.title}</h1>
    <Image src={props.image} alt={props.title} width={40} height={40} />
  </div>
);

export const Skill = (props: SkillProps) => (
  <div className="flex transition-all ease-in-out duration-500 flex-col items-center text-white justify-center gap-3 px-10 py-6 rounded-3xl hover:text-blue-900 hover:bg-blue-200">
    <Image src={props.image} alt="Skill" width={100} height={100} />
    <p className="text-2xl">{props.name}</p>
  </div>
);

export default function Home() {
  return (
    <div className="relative">
      <div className="bg-hero w-full h-screen text-white flex justify-center items-center flex-col gap-10">
        <h1>
          <span className="text-4xl hover:text-blue-200 transition-colors duration-300 cursor-pointer">
            Hi, I am Aarya Tiwari
          </span>
        </h1>
        <p>
          <span className="text-2xl hover:text-blue-200 transition-colors duration-300 cursor-pointer">
            A passionate Software Engineer and Full-Stack Developer
          </span>
        </p>
        <CustomButton innerClassName="" outerClassName="" title="Hire Me" />
      </div>
      <div className="flex flex-col p-10 my-10 align-center items-center justify-center">
        <Heading title="My Top Skills" image="/portal.svg" />
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-24 md:gap-12 w-full place-items-center">
          {skills.slice(0, 12).map((skill) => (
            <Link href={skill.link}>
              <Skill key={skill.name} image={skill.image} name={skill.name} type={skill.type} link={skill.link} />
            </Link>
          ))}
        </div>
        <div className="flex justify-end w-full mt-5">
          <Link href="/skills">
            <p className="underline text-white text-xl self-end">
              View All Skills
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col p-10 my-10 align-center items-center justify-center">
        <Heading title="My Top Projects" image="/portal.svg" />
        <div className="grid w-full my-10 lg:grid-cols-2 md:grid-cols-1 gap-10">
          {projects.map((project) => (
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
        <div className="flex justify-end w-full mt-5">
          <Link href="/skills">
            <p className="underline text-white text-xl self-end">
              View All Projects
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-10">
        <Heading title="Clients I have worked with" image="/portal.svg" />
        {
          <div className="grid place-items-center w-full my-10 lg:grid-cols-2 md:grid-cols-1 gap-10">
            {clients.map((client) => (
              <ClientCard
                key={client.name}
                name={client.name}
                position={client.position}
                image={client.image}
                comment={client.comment}
              />
            ))}
          </div>
        }
        <div className="flex justify-end w-full">
          <Link href="/skills">
            <p className="underline text-white text-xl self-end">
              View All Testimonials
            </p>
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center my-10">
        <div className="flex lg:justify-between sm:justify-center items-center max-w-[1440px] w-full flex-wrap">
          <div className="flex flex-col lg:items-start sm:items-center xs:items-center gap-3 max-w-[500px] xs:text-center sm:gap-6">
            <h1 className="text-5xl text-white text-center w-full">Wanna Hire Me?</h1>
            <p className="text-white text-lg">
              I am available for hire. Let's work together and make something
              great.
            </p>
            <CustomButton
              innerClassName="flex items-center w-full h-full p-3"
              outerClassName="w-48 h-full"
              title="Send Me a Message"
            />
          </div>

          <Image
            src="/wanna-hire.png"
            alt="Aarya Tiwari"
            width={400}
            height={400}
          />
        </div>
      </div>
      <p className="text-center text-3xl text-white">Thanks for scrolling</p>
    </div>
  );
}
