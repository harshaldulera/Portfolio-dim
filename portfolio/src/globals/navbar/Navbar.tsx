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

export default function Navbar(props: NavbarProps) {
  return (
    <div className="relative bg-transparent w-full py-4 px-10 flex justify-between items-center gap-24">
      <div className="flex gap-2 items-center">
        <Image src={props.logo} alt={props.title} width={25} height={25} />
        <h1 className="text-white">{props.name}</h1>
      </div>
      <div className="rounded-3xl p-px bg-gradient-to-r from-blue-200 via-red-200 to-yellow-200 flex justify-center items-center">
        <div className="p-2 bg-background rounded-3xl text-white flex justify-center items-center">
          {props.links.map((link) => (
            <Link href={`/${link.link}`} key={link.link}>
              <p className="text-white px-4 py-2">{link.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-10">
        <div className="rounded-3xl p-px bg-gradient-to-r from-yellow-200 via-red-200 to-red-200 flex justify-center items-center">
          <Button className="rounded-3xl bg-gradient-to-r from-blue-200 via-red-200 to-yellow-200 text-black">
            Hire Me
          </Button>
        </div>
        <div className="rounded-3xl p-px bg-gradient-to-r from-yellow-200 via-red-200 to-red-200">
          <UserRound size={36} className="p-2 rounded-3xl bg-gradient-to-r from-blue-200 via-red-200 to-yellow-200 text-black" />
        </div>
      </div>
    </div>
  );
}
