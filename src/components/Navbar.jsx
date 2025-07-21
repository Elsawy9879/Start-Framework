import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" ref={navRef}>
      <NavLink to="/" className="logo">
        START FRAMEWORK
      </NavLink>

      <div className="menu-icon" onClick={toggleMenu}>
        <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>
            PORTFOLIO
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
