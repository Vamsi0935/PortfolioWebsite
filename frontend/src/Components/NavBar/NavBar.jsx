/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "./navbar.css";
import { ContextAPI } from "../../utils/context";

const NavBar = () => {
  const items = ["Home", "Education", "Skills", "Projects", "Contact Me"];
  const { scrollToRef } = useContext(ContextAPI);
  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <ul>
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
    </>
  );
};

export default NavBar;
