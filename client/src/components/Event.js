import { Link } from 'react-router-dom'
import "./Style.css"

function Event({ slug, eventName, date, location, thumbnail }) {
  return (
    <Link className='event-link' to={`/event/${slug}`}>
      <div className='event-card'>
        <img className='thumbnail' src={thumbnail} alt='' />
        <div className='card-body'>
          <small className='event-info'>
            {date} - {location}
          </small>
          <h3 className='event-name'>{eventName}</h3>
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
