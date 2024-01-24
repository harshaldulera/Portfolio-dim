import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import HeroImg from "./components/HeroImg";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
