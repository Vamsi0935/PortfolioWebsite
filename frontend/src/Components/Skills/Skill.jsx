import React, { useContext } from "react";
import "./skill.css";
import { ContextAPI } from "../../utils/context";

const Skill = () => {
  const { setRef } = useContext(ContextAPI);
  return (
    <div className="skills" ref={setRef('Skills')}>
      <div className="skills-title">
        <h1>
          Skills <hr style={{ width: "85%" }} />
        </h1>
      </div>
      <div className="about-skills">
        <div className="about-skill">
          <p>HTML & CSS</p>
          <hr style={{ width: "45%" }} />
        </div>
        <div className="about-skill">
          <p>JavaScript</p>
          <hr style={{ width: "35%" }} />
        </div>
        <div className="about-skill">
          <p>ReactJs</p>
          <hr style={{ width: "40%" }} />
        </div>
        <div className="about-skill">
          <p>NodeJs</p>
          <hr style={{ width: "38%" }} />
        </div>
        <div className="about-skill">
          <p>Java</p>
          <hr style={{ width: "40%" }} />
        </div>
        <div className="about-skill">
          <p>MySQL</p>
          <hr style={{ width: "45%" }} />
        </div>
        <div className="about-skill">
          <p>MongoDB</p>
          <hr style={{ width: "45%" }} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
