import React from "react";
import "./Style.css";
import SearchBox from "../components/SearchBox";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          <h1>Book Your Tickets For Upcoming Events</h1>
          <SearchBox />
          <button class="search-button">Search</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
