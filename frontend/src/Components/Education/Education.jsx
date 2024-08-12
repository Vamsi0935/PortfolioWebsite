import React, { useContext } from "react";
import "./education.css";
import { ContextAPI } from "../../utils/context";

const Education = () => {
  const { setRef } = useContext(ContextAPI);
  return (
    <div className="education" ref={setRef('Education')}>
      <div className="education-title">
        <h1>
          Education <hr style={{ width: "85%" }} />
        </h1>
      </div>
      <div className="education-container">
        <div className="education-section">
          <i className="fa-solid fa-graduation-cap"></i>
          <p className="education-name">Bachelor’s Degree</p>
          <p className="education-level">Civil Engineering</p>
        </div>
        <div className="education-section">
          <i className="fa-solid fa-university"></i>
          <p className="education-name">Sir C R Reddy College of Engineering</p>
          <p className="education-level">Graduated: 2023</p>
        </div>
        <div className="education-section">
          <i className="fa-solid fa-certificate"></i>
          <p className="education-name">Certification</p>
          <p className="education-level">Java Full Stack Development</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
