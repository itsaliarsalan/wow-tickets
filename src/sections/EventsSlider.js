import { useRef, useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { motion } from "framer-motion";
import "./EventsSlider.css";
import events from "../data";

function EventsSlider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="section-boxed">
      <div className="section-info">
        <h1>Explore Events</h1>
      </div>
      <motion.div
        className="carousel"
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner-carousel row"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          <EventCard events={events} />
        </motion.div>
      </motion.div>
      <div className="section-footer">
        <a className="btn" href="#">
          Explore All Events
        </a>
      </div>
    </div>
  );
}

export default EventsSlider;
