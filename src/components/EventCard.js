import React from "react";
import "./EventCard.css";
import thumbnail from "../assets/card-image.jpg";

function EventCard() {
  return (
    <div className="card">
      <img src={thumbnail} alt="" />
      <p>April 2023 - London</p>
      <h3>Fifa World Cup 2023</h3>
      <a href="#" className="book-btn">
        Book Now
      </a>
    </div>
  );
}

export default EventCard;
