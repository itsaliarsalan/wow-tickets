import React from "react";
import "./Style.css";
import logo from "../assets/250x150.svg";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-menu">
          <div className="logo">
            <img src={logo} alt="website logo" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
              ipsam. Commodi aspernatur ut optio!
            </p>
          </div>
          <div className="sub-menu sitemap">
            <h4>Sitemap</h4>
            <ul>
              <li>
                <a href="#" className="nav-item">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-item">
                  Explore Events
                </a>
              </li>
              <li>
                <a href="#" className="nav-item">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="sub-menu account">
            <h4>Account</h4>
            <ul>
              <li>
                <a href="#" className="nav-item">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="nav-item">
                  Add Ticket
                </a>
              </li>
              <li>
                <a href="#" className="nav-item">
                  Orders
                </a>
              </li>
            </ul>
          </div>
          <div className="sub-menu subsribe">
            <h4>Subscribe</h4>
          </div>
        </div>
        <hr />
        <p className="copyright">
          ©2021 - 2022 Wow Tickets | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
