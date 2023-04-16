import React from "react";
import "./Navbar.css";
import logo from "../assets/300x75.svg";

function Navbar() {
  return (
    <>
      {" "}
      <nav className="top-nav">
        <div className="container">
          <a href="#" className="mobile-cta">
            Join
          </a>
          <div className="logo">
            <img src={logo} alt="main logo" />
          </div>
          <button className="menu-toggle" aria-label="Open Navigation Menu">
            <span className="menu-icon" />
          </button>
          <ul className="menu">
            <li>
              <a href="#" className="nav-link">
                Sign In
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Explore Events
              </a>
            </li>
            <li>
              <a href="#" className="nav-cta">
                Join
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Darken background when menu opens */}
      <div className="overlay" />
    </>
  );
}

export default Navbar;
