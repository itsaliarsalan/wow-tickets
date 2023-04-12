import React from "react";
import EventCard from "../../components/event-card/EventCard";
import "./EventsCarouselStylesheet.css";

function EventsCarousel() {
  return (
    <div className="event-carousel-section">
      <h1 className="section__title">Explore Events</h1>
      <div className="event-carousel">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default EventsCarousel;
