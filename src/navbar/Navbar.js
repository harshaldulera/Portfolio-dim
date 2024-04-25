import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../routes/Home";
import Contact from "../routes/Contact";
import About from "../routes/About";
import Project from "../routes/Project";
const Navbar = () => {
  return (
    <>
      <header class="bg-slate-800 header sticky top-0  shadow-md flex items-center justify-center px-8 py-02">
        <nav class="nav font-semibold text-lg  ">
          <ul class="flex items-center text-white active:text-gray-400">
            <li class="hover:scale-105 duration-500 p-4 border-b-2 border-green-500 border-opacity-0  hover:border-opacity-100 hover:text-green-100  cursor-pointer active">
              <Link to="/">HOME</Link>
            </li>
            <li class="hover:scale-105 duration-500  p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-gray-900  cursor-pointer">
              <Link to="/about">ABOUT</Link>
            </li>
            <li class="hover:scale-105 duration-500  p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-gray-900  cursor-pointer">
              <Link to="/project">PROJECT</Link>
            </li>
            <li class="hover:scale-105 duration-500  p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-gray-900  cursor-pointer">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
