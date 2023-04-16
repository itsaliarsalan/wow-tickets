import React from "react";
import "./Style.css";
import Event from "../components/Event";
function Events() {
  return (
    <>
      <section className="events">
        <div className="container">
          <h2>Explore Events</h2>
          <div className="events-container">
            <Event />
            <Event />
            <Event />
            <Event />
          </div>
          <div className="links">
            <button className="btn btn-main">View More</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;
