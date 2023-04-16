import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Event from "../components/Event";
import "./Style.css";

function Events() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <section className="events">
        <div className="container">
          <h2>Explore Events</h2>
          <div className="events-container">
            <motion.div
              className="carousel"
              ref={carousel}
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div
                className="inner-carousel"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
              >
                <Event id={1} />
                <Event id={2} />
                <Event id={3} />
                <Event id={4} />
                <Event id={5} />
              </motion.div>
            </motion.div>
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
