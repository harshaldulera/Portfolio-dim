import React from "react";
import { FaGithub } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
const Footer = () => {
  return (
    <>
      <footer className="h-[100px] bg-slate-800">
        <div className="mt-[150px] w-full flex items-center justify-between">
          <a
            href="https://github.com/StevyxD"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-9 text-2xl  text-white dark:text-neutral-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/StevyxD/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-9 text-2xl text-white dark:text-neutral-200"
          >
            <TbBrandLeetcode />
          </a>

          <a
            href="https://www.linkedin.com/in/mayank-kumar-64111722a/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-9 text-2xl text-white dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a
            href="#!"
            className="flex  items-center mr-9 text-2xl text-white dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>
            <div className=" flex text-xl  items-center ">
              : kumarmayank310@gmail.com
            </div>
          </a>
        </div>
      </footer>
    </>
  );
};

// export default Footer;
// import { FaFacebookF } from "react-icons/fa";
// import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
// import { BiLogoPinterestAlt } from "react-icons/bi";

// function Footer() {
//   const iconsTab = [
//     { icon: <FaFacebookF /> },
//     { icon: <AiOutlineTwitter /> },
//     { icon: <AiFillYoutube /> },
//     { icon: <BiLogoPinterestAlt /> },
//   ];
//   return (
//     <>
//       <footer className=" bg-gray-500">
//         <div className="container mx-auto  py-[10rem]">
//           {/* footer div all */}
//         </div>
//       </footer>
//     </>
//   );
// }

export default Footer;
