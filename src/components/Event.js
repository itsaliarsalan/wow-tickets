import { Link } from 'react-router-dom'
import './Style.css'
import thumbnail from '../assets/event-thumbnail-01.jpg'

function Event({ id, eventName, date, location, thumbnail }) {
	return (
		<Link className='event-link' to='/event' key={id}>
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
	eventName: 'Event name',
	date: '23 Mar',
	location: 'London',
	thumbnail: thumbnail,
}
export default Event
