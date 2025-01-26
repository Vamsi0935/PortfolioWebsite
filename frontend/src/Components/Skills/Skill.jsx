import React, { useContext } from "react";
import "./skill.css";
import { ContextAPI } from "../../utils/context";

const Skill = () => {
  const { setRef } = useContext(ContextAPI);
  return (
    <div className="skills" ref={setRef("Skills")}>
      <div className="skills-title">
        <h1>
          Skills <hr />
        </h1>
      </div>
      <div className="about-skills">
        <div className="about-skill">
          <p>HTML & CSS</p>
          90% &nbsp; <hr style={{ width: "45%" }} />
        </div>
        <div className="about-skill">
          <p>JavaScript</p>
          75% &nbsp;
          <hr style={{ width: "35%" }} />
        </div>
        <div className="about-skill">
          <p>ReactJs</p>
          80% &nbsp;
          <hr style={{ width: "40%" }} />
        </div>
        <div className="about-skill">
          <p>NodeJs</p>
          78% &nbsp; <hr style={{ width: "38%" }} />
        </div>
        <div className="about-skill">
          <p>Java</p>
          80% &nbsp;
          <hr style={{ width: "40%" }} />
        </div>
        <div className="about-skill">
          <p>MySQL</p>
          90% &nbsp; <hr style={{ width: "45%" }} />
        </div>
        <div className="about-skill">
          <p>MongoDB</p>
          90% &nbsp;
          <hr style={{ width: "45%" }} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
