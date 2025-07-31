"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "@/globals/Heading";
import { about, aboutLinks } from "@/data/data";
import Link from "next/link";

interface AboutProps {
  heading: string;
  desc: string;
  image: string;
}

const AboutComponent = ({
  heading,
  desc,
  image,
  index,
}: AboutProps & { index: number }) => {
  return (
    <motion.div
      className="flex flex-col justify-center lg:items-start items-center md:text-center lg:p-24 p-10 w-full my-10 lg:gap-10 gap-5 lg:text-start text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.3 }}
      viewport={{ once: true }}
    >
      <Heading title={heading} image="/portal.svg" />
      <div
        className={`flex lg:justify-between justify-center gap-10 items-center lg:flex-nowrap flex-wrap w-full ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <span className="leading-relaxed lg:text-2xl text-lg max-w-[900px] text-white mt-5 leading-loose">
          {desc}
        </span>
        <Image src={image} alt={heading} width={500} height={500} />
      </div>
    </motion.div>
  );
};

export default function AboutMe() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-start py-10 items-center gap-10 moving">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="/real-me.JPG"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full"
          />
        </motion.div>
        <div className="flex flex-col justify-center items-center px-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:text-3xl text-xl text-white mt-5 text-center"
          >
            Hi, I am Harshal Dulera, a passionate FX Trader, Software Engineer
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="lg:text-3xl text-xl text-white mt-5 text-center"
          >
            and Cyber Security Researcher.
          </motion.span>
        </div>
      </div>
      {about.map((about, index) => (
        <AboutComponent
          key={index}
          heading={about.heading}
          desc={about.desc}
          image={about.image}
          index={index}
        />
      ))}
      <div className="flex flex-col lg:p-24 p-10 gap-10 items-center">
        <Heading title="Contact Me" image="/portal.svg" />
        <motion.div
          className="flex w-full justify-evenly gap-10 flex-wrap"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          viewport={{ once: true }}
        >
          {aboutLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center items-center gap-3"
            >
              <Link href={link.link} onClick={link.click}>
                <Image
                  src={link.image}
                  alt={link.name}
                  width={100}
                  height={100}
                />
              </Link>
              <span className="text-2xl text-white">{link.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
