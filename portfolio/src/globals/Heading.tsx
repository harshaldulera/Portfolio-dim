"use client";
import Image from "next/image";

interface HeadingProps {
  title: string;
  image: any;
}

const Heading: React.FC<HeadingProps> = (props) => (
  <div className="flex justify-center items-center gap-5 lg:flex-nowrap flex-wrap text-center">
    <h1 className="text-4xl text-white">{props.title}</h1>
    <Image src={props.image} alt={props.title} width={40} height={40} />
  </div>
);

export default Heading;
