import React from "react";
import "./EventCardStylesheet.css";
import thumbnail from "../../assets/card-image.jpg";

function EventCard() {
  return (
    <div className="event-card">
      <img src={thumbnail} alt="" />
      <div className="event-card__details">
        <p className="event-card__metaInfo">April 2023 - London</p>
        <h3 className="event-card__title">Event Name</h3>
      </div>
    </div>
  );
}

export default EventCard;
