import React from "react";
import "./Style.css";

function Banner({ title, url }) {
  return (
    <section className="component page-banner">
      <div className="container">
        <h1 className="page-title">Explore Events</h1>
        <ul className="breadcrumb">
          <li>
            <a href="#" className="breadcrumb-link">
              Home
            </a>
          </li>
          <li className="divider">|</li>
          <li>
            <a href="#" className="breadcrumb-link">
              Events
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Banner;
