import React from "react";
import "./EventCard.css";
import { motion } from "framer-motion";
import thumbnail from "../assets/event-thumbnail-01.jpg";

function EventCard({ events }) {
  return (
    <>
      {events.map((event) => {
        return (
          <motion.div className="card" key={event.id}>
            <img src={event.image} alt="" />
            <p>
              {event.date} - {event.venue}
            </p>
            <h3>{event.title}</h3>
            <a href={event.url} className="book-btn">
              Book Now
            </a>
          </motion.div>
        );
      })}
    </>
  );
}

export default EventCard;
