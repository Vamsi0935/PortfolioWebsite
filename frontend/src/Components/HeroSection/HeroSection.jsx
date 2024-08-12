import React, { useContext } from "react";
import "./herosection.css";
import { ContextAPI } from "../../utils/context";

const HeroSection = () => {
  const { setRef } = useContext(ContextAPI);
  return (
    <section className="hero-container" style={{ textAlign: "center" }} ref={setRef('Home')}>
      <div className="hero-content">
        <img
          src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
          alt="vamsikrishnapic"
          width={"27%"}
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
          both front-end and back-end development processes.
          <br /> They design, develop, and maintain fully-fledged and
          functioning platforms with databases or servers.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
