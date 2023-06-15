import { Link } from "react-router-dom"
import "./Style.css"

function Event(props) {
	return (
		<Link className="event-link" to={`/events/${props.id}`}>
			<div className="event-card">
				<img className="thumbnail" src={props.thumbnail} alt="" />
				<div className="card-body">
					<small className="event-info">
						{props.date} - {props.location}
					</small>
					<h3 className="event-name">{props.name}</h3>
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
