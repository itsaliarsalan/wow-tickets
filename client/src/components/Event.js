import { Link } from 'react-router-dom'
import "./Style.css"

function Event(props) {
  const { event } = props
  return (
    <Link className='event-link' to={`/event/${event._id}`}>
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
Event.defaultProps = {
  eventName: "Event name",
  date: "23 Mar",
  location: "London",
  thumbnail: "/images/event-thumbnail-dummy.jpg",
}
export default Event
