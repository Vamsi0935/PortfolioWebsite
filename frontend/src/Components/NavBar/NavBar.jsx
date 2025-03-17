import React, { useContext, useState } from "react";
import "./navbar.css";
import { ContextAPI } from "../../utils/context";
import { FaBars } from "react-icons/fa";
import resume from "../../asserts/resume/Vamsi Krishna D.pdf"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const items = ["Home", "Education", "Skills", "Projects", "Contact Me"];
  const { scrollToRef } = useContext(ContextAPI);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <FaBars size={30} />
        </div>

        <ul className={menuOpen ? "menu open" : "menu"}>
          {items.map((item) => (
            <li onClick={() => scrollToRef(item)} key={item}>
              <a className="menu-items">{item}</a>
            </li>
          ))}
          <li key="download-resume">
            <a
              className="contact-btn text-decoration-none resume-link"
              href={resume}
              download="Vamsi Krishna Dudyala_Resume.pdf"
            >
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
