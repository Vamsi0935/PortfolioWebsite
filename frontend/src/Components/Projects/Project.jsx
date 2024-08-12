import React, { useContext } from "react";
import "./project.css";
import { projects } from "../../utils/data.js";
import { ContextAPI } from "../../utils/context.js";

const Project = () => {
  const { setRef } = useContext(ContextAPI);
  return (
    <div className="projects" ref={setRef("Projects")}>
      <div className="project-title">
        <h1>My Projects</h1>
      </div>
      <div className="project-container">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.p_no} className="project-format">
              <h3>{project.p_no}</h3>
              <h2>{project.p_name}</h2>
              <p>{project.p_desc}</p>
              <a href={project.p_link} target="_blank" rel="noreferrer">
                Read More
              </a>
            </div>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </div>
  );
};

export default Project;
