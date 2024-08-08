"use client";
import Image from "next/image";
import "@/app/globals.css";
import { CustomButton } from "@/globals/navbar/Navbar";
import Link from "next/link";
import { ProjectCard } from "@/globals/project-card/ProjectCard";
import { projects , clients , skills  } from "@/data/data";
import { ClientCard } from "@/globals/client-card/ClientCard";
import Heading from "@/globals/Heading";
import Skill from "@/globals/Skill";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative lg:p-0 p-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-hero w-full h-screen text-white flex justify-center items-center flex-col gap-10"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:text-4xl text-2xl hover:text-blue-200 transition-colors duration-300 cursor-pointer text-center"
        >
          Hi, I am Aarya Tiwari
        </motion.h1>
        <motion.span
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="lg:text-2xl text-lg hover:text-blue-200 transition-colors duration-300 cursor-pointer text-center"
        >
          A passionate Software Engineer and Full-Stack Developer
        </motion.span>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <CustomButton innerClassName="" outerClassName="" title="Hire Me" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col p-10 my-10 align-center items-center justify-center"
      >
        <Heading title="My Top Skills" image="/portal.svg" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } },
          }}
          className="my-10 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-24 md:gap-12 w-full place-items-center"
        >
          {skills.slice(0, 12).map((skill, index) => (
            <motion.div key={index} variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
              <Link href={skill.link}>
                <Skill
                  image={skill.image}
                  name={skill.name}
                  type={skill.type}
                  link={skill.link}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-end w-full mt-5">
          <Link href="/skills">
            <p className="underline text-white text-xl self-end">
              View All Skills
            </p>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col lg:p-10 p-0 my-10 items-center justify-center"
      >
        <Heading title="My Top Projects" image="/portal.svg" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
          }}
          className="w-full my-10 flex lg:justify-between justify-center gap-10 lg:flex-nowrap flex-wrap lg:items-start items-center"
        >
          {projects.slice(0,3).map((project, index) => (
            <motion.div key={project.name} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
              <ProjectCard
                name={project.name}
                image={project.image}
                github={project.github}
                hosted_link={project.hosted_link}
                description={project.description}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-end w-full mt-5">
          <Link href="/skills">
            <p className="underline text-white text-xl self-end">
              View All Projects
            </p>
          </Link>
        </div>
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center p-10"
      >
        <Heading title="Clients I have worked with" image="/portal.svg" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } },
          }}
          className="grid place-items-center w-full my-10 lg:grid-cols-2 md:grid-cols-1 gap-10"
        >
          {clients.map((client) => (
            <motion.div key={client.name} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <ClientCard
                name={client.name}
                position={client.position}
                image={client.image}
                comment={client.comment}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-end w-full">
          <Link href="/skills">
            <p className="underline text-white text-xl self-end">
              View All Testimonials
            </p>
          </Link>
        </div>
      </motion.div> */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full flex justify-center my-10"
      >
        <div className="flex lg:justify-between sm:justify-center items-center max-w-[1440px] w-full flex-wrap">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col lg:items-start items-center gap-3 max-w-[500px] xs:text-center sm:gap-6"
          >
            <h1 className="lg:text-5xl text-3xl lg:text-start text-center text-white text-center w-full">
              Wanna Hire Me?
            </h1>
            <p className="text-white lg:text-lg text-md lg:text-start text-center">
              I am available for hire. Let us work together and make something great.
            </p>
            <CustomButton
              innerClassName="flex items-center w-full h-full p-3"
              outerClassName="w-48 h-full"
              title="Send Me a Message"
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/wanna-hire.png"
              alt="Aarya Tiwari"
              width={400}
              height={400}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-3xl text-white py-10"
      >
        Thanks for scrolling
      </motion.p>
    </div>
  );
}