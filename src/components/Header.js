import React from "react";
import "./Header.css";
import logo from "../assets/300x75.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="nav">
        <ul className="nav__list">
          <li className="nav__listItem">
            <a href="#">Home</a>
          </li>
          <li className="nav__listItem">
            <a href="#">Events</a>
          </li>
          <li className="nav__listItem">
            <a href="#">About</a>
          </li>
          <li className="nav__listItem">
            <a href="#">Contact</a>
          </li>
          <li className="nav__listItem">
            <a href="#" className="nav__listItem--btn">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
