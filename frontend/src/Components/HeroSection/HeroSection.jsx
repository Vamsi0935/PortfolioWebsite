import React, { useContext } from "react";
import "./herosection.css";
import { ContextAPI } from "../../utils/context";
import VamsiKrishnaD from "../../asserts/Images/VamsiKrishnaD.jpeg";

const HeroSection = () => {
  const { setRef } = useContext(ContextAPI);
  return (
    <section
      className="hero-container"
      style={{ textAlign: "center" }}
      ref={setRef("Home")}
    >
      <div className="hero-content">
        <img
          src={VamsiKrishnaD}
          alt="vamsikrishnapic"
          // width={"50%"}
          // style={{ borderRadius: "50%" }}
        />
        <h1>
          Hello I'm{" "}
          <span style={{ color: "orangered", fontSize: "48px" }}>
            Vamsi Krishna Dudyala
          </span>
        </h1>
        <h1 style={{ color: "purple", fontSize: "30px" }}>
          Full Stack Developer
        </h1>
        <p style={{ fontSize: "25px", color: "white", fontWeight: "500" }}>
          A Full Stack developer is a professional responsible for working on
          both front-end and back-end development processes. They design,
          develop, and maintain fully-fledged and functioning platforms with
          databases or servers.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
