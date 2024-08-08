"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";
import { Github, Link as LinkIcon } from "lucide-react";

interface ProjectProps {
  name: string;
  image: string;
  github: string;
  hosted_link: string;
  description: string;
}


export const ProjectCard = (props: ProjectProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div className="flex w-full justify-center items-center">
      <Card className="relative w-full bg-background border-none rounded-3xl max-w-[500px] transition-all duration-800 cursor-pointer overflow-hidden hover:scale-105">
        <div className="absolute inset-0 flex items-center justify-center gap-4 text-white text-xl opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition-opacity duration-300">
          <Link href={props.github} target="_blank" rel="noopener noreferrer">
            <Github size={36} />
          </Link>
          <Link href={props.hosted_link} target="_blank" rel="noopener noreferrer">
            <LinkIcon size={36} />
          </Link>
        </div>
        <CardHeader className="m-0 p-0 w-full">
          <Link href={props.hosted_link}>
            <Image
              src={props.image}
              className="rounded-t-3xl transition-opacity duration-300"
              alt="Project"
              width={600}
              height={400}
              style={{ opacity: hovered ? 0.5 : 1 }}
            />
          </Link>
        </CardHeader>
        <CardContent className="text-white text-2xl m-1 px-4 py-4">
          <p>{props.name}</p>
        </CardContent>
        <CardFooter className="text-lg text-gray-400 m-1 px-4 py-4">
            {props.description}
        </CardFooter>
      </Card>
    </div>
  );
};
