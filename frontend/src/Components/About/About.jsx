import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>
          About Me
        </h1>
      </div>
      <div className="about-container">
        <div className="about-section">
          <i className="fa-solid fa-award"></i>
          <p className="about-name">Experience</p>
          <p className="about-level">6 Months</p>
        </div>
        <div className="about-section">
          <i className="fa-solid fa-suitcase"></i>
          <p className="about-name">Completed</p>
          <p className="about-level">5 Projects</p>
        </div>
        <div className="about-section">
          <i className="fa-solid fa-headset"></i>
          <p className="about-name">Support</p>
          <p className="about-level">Online 24/7</p>
        </div>
      </div>
    </div>
  );
};

export default About;
