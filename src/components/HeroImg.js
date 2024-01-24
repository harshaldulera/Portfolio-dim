import React from "react";
import IntroImg from "./Background.jpg";
import { Link } from "react-router-dom";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
const HeroImg = () => {
  return (
    <div className="hero ">
      {/* <div className="h-14 bg-gradient-to-r ss">
        <p className="my-5 text-gray-200 hover:text-black hover:bg-cyan-300 bg-cyan-600 rounded-md hover:scale-105 duration-500  mx-10 w-[300px] cursor-pointer p-8 text-gray-400 border-solid hover:border-gray-400 border-2 duration-200 border-blue-400 text-gray-800">
          Hi, I'm B.Tech student of Sardar Patel Institute of Technology,
          Computer Science department. I am a full stack web developer and
          competitive programmer. I am passionate about web development and love
          to learn new technologies.
        </p>
      </div> */}

      <div className="relative h-96 w-full">
        <img
          className=" h-full w-full rounded-xl object-cover object-center"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
        <div className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div>
            <div
              variant="h5"
              className="text-black font-bold text-xl"
              color="blue-gray"
            >
              Mayank Kumar
            </div>
            <div color="gray" className="mt-2 text-gray-600 font-normal">
              Computer Science specialisation in Data Science
            </div>
          </div>
          <div variant="h5" className="text-gray-600" color="blue-gray">
            Data Analyst and web developer
          </div>
        </div>
      </div>
      <div className="mb-20 m-4  ">
        <p className="font-bold text-xl ">About Me</p>
        <p className=" text-xl ">
          Hi, I'm Mayank Kumar Full Stack web developer, gymbro and more...
          About Me Got my degree from Sardar Patel Institute of Technology and
          actual coding skills from the Internet. I'm a skilled software
          developer with 3+ years of coding experience and have many projects in
          various languages
        </p>
      </div>

      <div className="grid  md:grid-cols-2 gap-4">
        <div className="m-0">
          <div className=" min-h-screen flex-col justify-center bg-slate-100">
            <div className="group h-96 w-100 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 flex-col justify-center items-center">
                  <div className="flex justify-center ">
                    <p className="m-4 text-2xl font-bold text-black hover:scale-105 cursor-pointer duration-500 hover:text-white ">
                      Front End
                    </p>
                  </div>

                  <img
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src="https://technographx.com/wp-content/uploads/2018/11/what-is-front-end-development-1.jpg"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full items-center justify-between">
                    <p className="text-5xl flex-col justify-center items-center ">
                      <FaHtml5 />
                      <p className="text-3xl  ">HTML</p>
                    </p>
                    <p className="text-5xl">
                      <IoLogoCss3 />
                      <p className="text-3xl">CSS</p>
                    </p>
                    <p className="text-5xl">
                      <FaReact />
                      <p className="text-3xl">React</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="m-0">
          <div className=" min-h-screen flex-col justify-center bg-slate-100">
            <div className="group h-96 w-100 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 flex-col justify-center items-center">
                  <div className="flex justify-center ">
                    <p className="m-4 text-2xl font-bold text-black hover:scale-105 cursor-pointer duration-500 hover:text-white ">
                      Back End
                    </p>
                  </div>

                  <img
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    src="https://diib.com/learn/wp-content/uploads/2020/12/Website-backend-cover.jpg"
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full items-center justify-between">
                    <p className="text-5xl">
                      <FaNodeJs />
                      <p className="text-3xl">Node JS</p>
                    </p>
                    <p className="text-5xl">
                      <SiExpress />

                      <p className="text-3xl">Express</p>
                    </p>
                    <p className="text-5xl">
                      <FaNodeJs />

                      <p className="text-3xl">Mongoose</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
