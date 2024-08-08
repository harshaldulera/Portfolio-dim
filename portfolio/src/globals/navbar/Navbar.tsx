"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "./navbar.css";
import { UserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface NavbarProps {
  logo: string;
  title: string;
  links: any[];
  name: string;
}

interface ButtonProps {
  innerClassName: string;
  outerClassName: string;
  title: string;
}

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

export const CustomButton = (props: ButtonProps) => (
  <div
    className={`rounded-3xl p-px transition-all duration-400 ease-in-out bg-gradient-to-r from-yellow-200 via-red-200 to-red-200 flex justify-center items-center hover:bg-gradient-to-l ${props.outerClassName}`}
  >
    <Button
      className={`rounded-3xl transition-all duration-1000 ease-in-out bg-gradient-to-r from-blue-200 via-red-200 to-yellow-200 text-black hover:bg-gradient-to-l ${props.innerClassName}`}
    >
      {props.title}
    </Button>
  </div>
);

export default function Navbar(props: NavbarProps) {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <div className="relative bg-transparent w-full py-6 px-12 flex justify-between items-center gap-24">
      <div className="flex gap-2 items-center">
        <Image src={props.logo} alt={props.title} width={25} height={25} />
      </div>
      {isMobile ? (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger>
            <Menu size={40} color="#FFFFFF" />
          </SheetTrigger>
          <SheetContent className="w-[300px] sm:w-[540px] bg-black border-none" side="left">
            <SheetHeader>
              <SheetTitle className="text-white">Welcome to My Portfolio</SheetTitle>
              <div className="w-full"></div>
              <SheetDescription className="flex flex-col gap-10">
                <span className="w-full h-10"></span>
                {props.links.map((link, index) => (
                  <Link href={`/${link.link}`} key={index}>
                    <span
                      className="text-white px-4 py-2 transition-all duration-300 hover:text-blue-200 text-xl"
                      onClick={handleLinkClick}
                    >
                      {link.name}
                    </span>
                  </Link>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ) : (
        <div className="rounded-3xl p-px bg-gradient-to-r from-blue-200 via-red-200 to-yellow-200 flex justify-center items-center hover:bg-gradient-to-l ">
          <div className="p-2 bg-background rounded-3xl text-white flex justify-center items-center transition-all duration-300">
            {props.links.map((link, index) => (
              <Link href={`/${link.link}`} key={index}>
                <p className="text-white px-4 py-2 transition-all duration-300 hover:text-blue-200">
                  {link.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
