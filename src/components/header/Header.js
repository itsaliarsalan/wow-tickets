import React from "react";
import "./Style.css";
import logo from "../../assets/300x75.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="site__logo">
        <a href="#">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="site__nav">
        <ul className="site__nav__list">
          <li className="site__nav__listItem">
            <a href="#">Home</a>
          </li>
          <li className="site__nav__listItem">
            <a href="#">Events</a>
          </li>
          <li className="site__nav__listItem">
            <a href="#">About</a>
          </li>
          <li className="site__nav__listItem">
            <a href="#">Contact</a>
          </li>
          <li className="site__nav__listItem">
            <a href="#" className="site__nav__listItem--btn">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
