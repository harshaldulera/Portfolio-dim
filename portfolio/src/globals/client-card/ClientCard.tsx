"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface ClientProps {
  name: string;
  position: string;
  image: any;
  comment: string;
}

export const ClientCard = (props: ClientProps) => {
  return (
    <div className="w-full self-center flex justify-center items-center rounded-3xl max-w-[450px] m-2 p-px bg-gradient-to-r from-blue-200 via-red-200 to-yellow-200 hover:bg-gradient-to-l">
      <Card className="p-1 bg-background rounded-3xl text-white flex flex-col justify-center transition-all duration-300 w-full">
        <CardHeader className="w-full">
          <div className="flex items-start justify-between w-full">
            <div className="flex items-center gap-3">
              <Image
                className="rounded-full border border-white"
                src={props.image}
                alt={props.name}
                width={50}
                height={50}
              />
              <div className="flex flex-col gap-3">
                <CardTitle className="text-xl">{props.name}</CardTitle>
                <CardDescription className="text-md">
                  {props.position}
                </CardDescription>
              </div>
            </div>
            <Image
              src="/apostrophe.svg"
              alt={props.name}
              width={30}
              height={30}
            />
          </div>
        </CardHeader>
        <CardContent>
          <p>"{props.comment}"</p>
        </CardContent>
      </Card>
    </div>
  );
};
