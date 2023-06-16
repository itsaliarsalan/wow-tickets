import { Link } from "react-router-dom"
import "./Style.css"

function Event({ event }) {
  return (
    <Link className='event-link' to={`/events/${event._id}`}>
      <div className='event-card'>
        <img className='thumbnail' src={event.thumbnail} alt='' />
        <div className='card-body'>
          <small className='event-info'>
            {event.date} - {event.location}
          </small>
          <h3 className='event-name'>{event.name}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Event
