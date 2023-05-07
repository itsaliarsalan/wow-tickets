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
							<h3 className='title'>Lets get your event set up</h3>
							<p className='description'>
								We'd like to help you tailor your event - please choose options
								accordingly.
							</p>
						</div>

						<section>
							<h4 className='sub-heading'>Event Details</h4>
							<div class='ui form'>
								<div class='field'>
									<input
										type='text'
										placeholder='Event name'
										style={{ marginBottom: '10px' }}
									/>
									<textarea
										rows='2'
										placeholder='Short event description'
										style={{ resize: 'none' }}
									></textarea>
								</div>
							</div>
						</section>
						<section>
							<h4 className='sub-heading'>Event Category</h4>
							<div className='categories-wrapper'>
								<div className='category-card'>
									<div className='thumbnail'>
										<img
											src='https://images.pexels.com/photos/8170126/pexels-photo-8170126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
											alt=''
										/>
									</div>
									<div className='name'>Music</div>
								</div>
								<div className='category-card selected'>
									<div className='thumbnail'>
										<img
											src='https://images.pexels.com/photos/14211426/pexels-photo-14211426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
											alt=''
										/>
									</div>

									<div className='name'>Birthday</div>
								</div>
								<div className='category-card'>
									<div className='thumbnail'>
										<img
											src='https://images.pexels.com/photos/3993187/pexels-photo-3993187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
											alt=''
										/>
									</div>
									<div className='name'>Food</div>
								</div>
							</div>
						</section>
						<section>
							<h4 className='sub-heading'>Event Venue</h4>
							<div className='categories-wrapper'>
								<div className='category-card'>
									<div className='thumbnail'>
										<img
											src='https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
											alt=''
										/>
									</div>
									<div className='name'>Physical</div>
								</div>
								<div className='category-card'>
									<div className='thumbnail'>
										<img
											src='https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
											alt=''
										/>
									</div>
									<div className='name'>Online</div>
								</div>
							</div>
							<div className='ui form' style={{ marginTop: '10px' }}>
								<div className='field'>
									<select className='ui search fluid dropdown'>
										<option value=''>Select Venue</option>
										<option value='1'>Random 1</option>
									</select>
								</div>
							</div>
						</section>
						<section>
							<h4 className='sub-heading'>Event Shedule</h4>
							<div class='ui form'>
								<div class='two fields'>
									<div class='field'>
										<label>Start date</label>
										<div class='ui calendar' id='rangestart'>
											<div class='ui input left icon'>
												<i class='calendar icon'></i>
												<input type='text' placeholder='Start' />
											</div>
										</div>
									</div>
									<div class='field'>
										<label>End date</label>
										<div class='ui calendar' id='rangeend'>
											<div class='ui input left icon'>
												<i class='calendar icon'></i>
												<input type='text' placeholder='End' />
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
				<div className='footer'>
					<button className='btn btn-main'>Next</button>
				</div>
			</div>
			<aside className='side-content'></aside>
		</>
	)
}

export default NewEvent
