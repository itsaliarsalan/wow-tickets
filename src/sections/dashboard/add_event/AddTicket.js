function AddTicket() {
	return (
		<>
			<div className='card-primary'>
				<div className='head'>
					<h3 className='title'>Create Your Ticket</h3>
					<p className='description'>
						Let's make your event extra special! Customize your ticket settings
						below so it perfectly fits your event's style and needs.
					</p>
				</div>
				<section>
					<h4 className='sub-heading'>Ticket Details</h4>
					<div className='ui form'>
						<div className='field'>
							<input
								type='text'
								placeholder='Ticket name'
								style={{ marginBottom: '10px' }}
							/>
							<textarea
								rows='2'
								placeholder='Short description about ticket'
								style={{ resize: 'none' }}
							></textarea>
						</div>
					</div>
				</section>
				<hr />
				<section>
					<h4 className='sub-heading'>Entry Cost</h4>
					<div className='ui form'>
						<div className='inline fields'>
							<label className='fw-normal'>
								Will your event have an entry fee?
							</label>
							<div className='field'>
								<div className='ui radio checkbox'>
									<input type='radio' name='frequency' checked='checked' />
									<label>Yes</label>
								</div>
							</div>
							<div className='field'>
								<div className='ui radio checkbox'>
									<input type='radio' name='frequency' />
									<label>No</label>
								</div>
							</div>
						</div>
						<div className='field'>
							<div className='two fields'>
								<div className='ui right labeled input amount field'>
									<label for='amount' className='ui label'>
										$
									</label>
									<input type='text' placeholder='Ticket Price' id='amount' />
									<div className='ui basic label'>.00</div>
								</div>
								<div className='ui input allocations field'>
									<input type='number' placeholder='Allocations' />
								</div>
							</div>
						</div>
					</div>
				</section>
				<hr />
				<section>
					<h4 className='sub-heading'>Tickets Availability Duration</h4>
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
				<hr />
				<div className='card-outline'>
					<div className='row'>
						<div className='col'>
							<p>Tickets Prices</p>
							<p>0.00 USD</p>
						</div>
						<div className='col'>
							<p>Customer Fees</p>
							<p>1.00 USD</p>
						</div>
						<div className='col'>
							<p>Your Fees</p>
							<p>0.00 USD</p>
						</div>
						<hr style={{ marginTop: '1rem' }} />
						<div className='col'>
							<p>Total you recieve</p>
							<p>0.00 USD</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default AddTicket
