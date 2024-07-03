"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Heading } from "../page";
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
    <div className="flex flex-col justify-center items-start lg:p-24 p-10 w-full my-10 lg:gap-10 gap-5 lg:text-start text-center">
      <Heading title={heading} image="/portal.svg" />
      <div
        className={`flex justify-between items-center lg:flex-nowrap flex-wrap w-full ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <span className="text-2xl max-w-[900px] text-white mt-5 leading-loose">
          {desc}
        </span>
        <Image src={image} alt={heading} width={500} height={500} />
      </div>
    </div>
  );
};
export default function AboutMe() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-start py-10 items-center gap-10 moving">
        <Image
          src="/me.png"
          alt="Profile"
          width={300}
          height={300}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center items-center px-10">
          <span className="lg:text-3xl  text-xl text-white mt-5 text-center">
            Hi, I'm Aarya Tiwari, a passionate Software Developer
          </span>
          <span className="lg:text-3xl text-xl text-white mt-5 text-center">
            and Full-Stack Developer.
          </span>
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
        <div className="flex w-full justify-evenly gap-10 flex-wrap">
          {aboutLinks.map((link, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-3"
            >
              <Link href={link.link}>
                <Image
                  src={link.image}
                  alt={link.name}
                  width={100}
                  height={100}
                />
              </Link>
              <span className="text-2xl text-white">{link.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
