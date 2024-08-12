import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Skill from "./Components/Skills/Skill";
import Contact from "./Components/Contact/Contact";
import Project from "./Components/Projects/Project";
import Context from "./utils/context";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Context>
      <NavBar />
      <div className="conatiner">
        <HeroSection />
        <About />
        <Education />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
    </Context>
  );
};

export default App;
