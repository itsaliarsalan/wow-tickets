function ConfirmEvent() {
	return (
		<>
			<div className='card-primary'>
				<div className='head'>
					<h3 className='title'>Let's Get Your Event Up and Running!</h3>
					<p className='description'>
						Congratulations on creating your event! Now it's time to make it
						live. Choose whether to make your event public or keep it private.
					</p>
				</div>
				<section>
					<h4 className='sub-heading'>Event Visibility</h4>
					<div className='ui form'>
						<div className='inline fields'>
							<div className='field'>
								<div className='ui radio checkbox'>
									<input type='radio' name='frequency' checked='checked' />
									<label>Public</label>
								</div>
							</div>
							<div className='field'>
								<div className='ui radio checkbox'>
									<input type='radio' name='frequency' />
									<label>Private</label>
								</div>
							</div>
						</div>
					</div>
				</section>
				<hr />
				<section>
					<div className='card-outline'>
						<div className='head'>
							<h3>Basic Information</h3>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								className='icon'
							>
								<path
									fill='currentColor'
									fill-rule='evenodd'
									d='M15.586 3a2 2 0 0 1 2.828 0L21 5.586a2 2 0 0 1 0 2.828L19.414 10 14 4.586 15.586 3zm-3 3-9 9A2 2 0 0 0 3 16.414V19a2 2 0 0 0 2 2h2.586A2 2 0 0 0 9 20.414l9-9L12.586 6z'
									clip-rule='evenodd'
								/>
							</svg>
						</div>
						<hr style={{ marginTop: '1rem' }} />
						<div className='row'>
							<div className='col'>
								<p>Event Name</p>
								<p>Highlanders Flyers</p>
							</div>
							<div className='col'>
								<p>Event Short Description</p>
								<p>
									Could be anything here but it may be restrited to some
									words...
								</p>
							</div>
							<div className='col'>
								<p>Event Category</p>
								<p>Music</p>
							</div>
							<div className='col'>
								<p>Venue</p>
								<p>Online</p>
							</div>
						</div>
					</div>
				</section>
				<hr />
				<section>
					<div className='card-outline'>
						<div className='head'>
							<h3>Images</h3>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								className='icon'
							>
								<path
									fill='currentColor'
									fill-rule='evenodd'
									d='M15.586 3a2 2 0 0 1 2.828 0L21 5.586a2 2 0 0 1 0 2.828L19.414 10 14 4.586 15.586 3zm-3 3-9 9A2 2 0 0 0 3 16.414V19a2 2 0 0 0 2 2h2.586A2 2 0 0 0 9 20.414l9-9L12.586 6z'
									clip-rule='evenodd'
								/>
							</svg>
						</div>
						<hr style={{ marginTop: '1rem' }} />
						<h4 className='sub-heading'>Cover Image</h4>
						<div className='card-secondary img-preview'>
							<img
								src='https://images.pexels.com/photos/14707145/pexels-photo-14707145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
						</div>
						<h4 className='sub-heading'>Flyer Image</h4>
						<div className='card-secondary'>
							<h5>You haven't added any flyer image</h5>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
export default ConfirmEvent
