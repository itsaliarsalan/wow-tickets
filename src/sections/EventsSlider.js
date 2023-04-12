import React from "react";
import EventCard from "../components/EventCard";
import "./EventsSlider.css";

function EventsSlider() {
  return (
    <div className="section-boxed">
      <div className="section-info">
        <h1>Explore Events</h1>
      </div>
      <div className="section-content row mt-3">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default EventsSlider;
