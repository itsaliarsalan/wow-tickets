import { Link } from "react-router-dom";
import "./Style.css";
import { motion } from "framer-motion";
import thumbnail from "../assets/event-thumbnail-01.jpg";

function Event({ id }) {
  return (
    <motion.div className="inner-carousel__item" key={id}>
      <Link to="/event" className="event-link">
        <div className="event-card">
          <img className="thumbnail" src={thumbnail} alt="" />
          <div className="card-body">
            <small className="event-info">22 Mar - London</small>
            <h3 className="event-name">Event Name</h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default Event;
