"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "./navbar.css";
import { UserRound } from "lucide-react";

export interface NavbarProps {
  logo: string;
  title: string;
  links: any[];
  name: string;
}

interface ButtonProps {
  className: string;
  title: string;
}

export const CustomButton = (props: ButtonProps) => (
  <div className="rounded-3xl p-px transition-all duration-400 ease-in-out bg-gradient-to-r from-yellow-200 via-red-200 to-red-200 flex justify-center items-center hover:bg-gradient-to-l">
    <Button className="rounded-3xl transition-all duration-1000 ease-in-out bg-gradient-to-r from-blue-200 via-red-200 to-yellow-200 text-black hover:bg-gradient-to-l">
      {props.title}
    </Button>
  </div>
);

export default function Navbar(props: NavbarProps) {
  return (
    <div className="relative bg-transparent w-full py-4 px-10 flex justify-between items-center gap-24">
      <div className="flex gap-2 items-center">
        <Image src={props.logo} alt={props.title} width={25} height={25} />
        <h1 className="text-white">{props.name}</h1>
      </div>
      <div className="rounded-3xl p-px bg-gradient-to-r from-blue-200 via-red-200 to-yellow-200 flex justify-center items-center hover:bg-gradient-to-l">
        <div className="p-2 bg-background rounded-3xl text-white flex justify-center items-center transition-all duration-300">
          {props.links.map((link) => (
            <Link href={`/${link.link}`} key={link.link}>
              <p className="text-white px-4 py-2 transition-all duration-300 hover:text-blue-200">{link.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-10">
        <CustomButton className="" title="Hire Me" />
        <div className="rounded-3xl p-px bg-gradient-to-r from-yellow-200 via-red-200 to-red-200">
          <UserRound
            size={36}
            className="p-2 rounded-3xl bg-gradient-to-r from-blue-200 via-red-200 to-yellow-200 text-black hover:bg-gradient-to-l cursor-pointer transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}
