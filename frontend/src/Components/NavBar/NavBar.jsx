import React, { useContext, useState } from "react";
import "./navbar.css";
import { ContextAPI } from "../../utils/context";
import { FaBars } from "react-icons/fa"; // Hamburger icon from react-icons

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
        {/* Hamburger Icon for small screens */}
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <FaBars size={30} />
        </div>

        {/* Navigation menu */}
        <ul className={menuOpen ? "menu open" : "menu"}>
          {items.map((item) => (
            <li onClick={() => scrollToRef(item)} key={item}>
              <a className="menu-items">{item}</a>
            </li>
          ))}
          <button className="contact-btn" onClick={() => scrollToRef("Hire Me")}>
            Hire Me
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
