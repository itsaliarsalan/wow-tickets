import React from "react";
import "./Hero.css";
import SearchBox from "../components/SearchBox";

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-section__content">
        <h1 className="hero-section__title">
          Book Your Tickets for
          <br />
          Upcoming Events
        </h1>
        <h2 className="hero-section__desc">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </h2>
        <SearchBox />
      </div>
    </div>
  );
}
