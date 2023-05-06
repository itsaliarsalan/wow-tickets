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
				<div className='categories'>
					<div className='card-primary'>
						<div className='head'>
							<h4 className='title'>Lets get your event set up</h4>
							<p className='description'>
								We'd like to help you tailor your event - please choose event
								type below
							</p>
						</div>
						<div className='categories-wrapper'>
							<div className='category-card'>
								<img
									className='thumbnail'
									src='https://images.pexels.com/photos/8170126/pexels-photo-8170126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
									alt=''
								/>
								<div className='name'>Music</div>
							</div>
							<div className='category-card'>
								<img
									className='thumbnail'
									src='https://images.pexels.com/photos/14211426/pexels-photo-14211426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
									alt=''
								/>
								<div className='name'>Birthday</div>
							</div>
							<div className='category-card'>
								<img
									className='thumbnail'
									src='https://images.pexels.com/photos/3993187/pexels-photo-3993187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
									alt=''
								/>
								<div className='name'>Food</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<aside className='side-content'></aside>
		</>
	)
}

export default NewEvent
