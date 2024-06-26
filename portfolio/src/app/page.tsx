import Image from "next/image";
import '@/app/globals.css'
import { CustomButton } from "@/globals/navbar/Navbar";


export default function Home() {
  return (
    <div className="relative">
      <div className="bg-image w-full h-screen text-white flex justify-center items-center flex-col gap-10">
        <h1>
          <span className="text-4xl hover:text-blue-200 transition-colors duration-300 cursor-pointer">Hi, I am Aarya Tiwari</span>
        </h1>
        <p>
          <span className="text-2xl hover:text-blue-200 transition-colors duration-300 cursor-pointer">A passionate Software Engineer and Full-Stack Developer</span>
        </p>
        <CustomButton className="" title="Hire Me" />
      </div>
    </div>
  );
}
