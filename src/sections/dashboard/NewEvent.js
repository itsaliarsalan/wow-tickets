import { Outlet } from 'react-router-dom'
import ProgressTracker from '../../components/ProgressTracker'

const NewEvent = () => {
	return (
		<>
			<div className='main new-event'>
				<div className='head'>
					<h2>Create a new Event</h2>
					<ul className='breadcrumb'>
						<li>
							<a href='/' className='breadcrumb-link'>
								Home
							</a>
						</li>
						<li className='divider'>&gt;</li>
						<li>
							<a href='/' className='breadcrumb-link'>
								Events
							</a>
						</li>
					</ul>
				</div>
				<hr />
				<div className='progress'>
					<div className='card-primary'>
						<ProgressTracker step='1' />
					</div>
				</div>
				<Outlet />
				<div className='footer'>
					<button className='btn btn-main'>Next</button>
				</div>
			</div>
			<aside className='side-content'></aside>
		</>
	)
}

export default NewEvent
