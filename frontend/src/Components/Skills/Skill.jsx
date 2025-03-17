import React, { useContext } from "react";
import "./skill.css";
import { ContextAPI } from "../../utils/context";
import { skillsIcons } from "../../utils/data";

const Skill = () => {
  const { setRef } = useContext(ContextAPI);
  return (
    <div className="skills" ref={setRef("Skills")}>
      <div className="skills-title">
        <h1>
          Skills
        </h1>
      </div>
      <div className="about-skills">
        <div className="about-skill">
          {skillsIcons.length > 0 ? (
            skillsIcons.map((skillsImages) => (
              <div key={skillsImages.skill_no} className="skills-format">
                <img src={skillsImages.skill_icon} alt="html-icon" />
                <p>{skillsImages.skill_name}</p>
              </div>
            ))
          ) : (
            <p>No Skills....</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skill;
