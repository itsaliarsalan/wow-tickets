import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import logo from "../assets/300x75.svg";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  function handleClick() {
    if (!isOpen) setOpen(true);
    else setOpen(false);
  }

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

          <button
            className="menu-toggle"
            aria-label="Open Navigation Menu"
            onClick={handleClick}
          >
            <span className="menu-icon" />
          </button>
          <ul className={isOpen ? "menu open" : "menu"}>
            <li>
              <Link className="nav-link" to="/events">
                Explore Events
              </Link>
            </li>
            <li>
              <a href="#" className="nav-link">
                Sign In
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
      <div
        className={isOpen ? "overlay visible" : "overlay"}
        onClick={handleClick}
      />
    </>
  );
}

export default Navbar;
