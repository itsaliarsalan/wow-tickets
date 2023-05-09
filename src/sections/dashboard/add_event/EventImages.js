import DropFiles from '../../../components/DropFiles'

function EventImages() {
	return (
		<>
			<div className='card-primary'>
				<div className='head'>
					<h3 className='title'>Now Lets choose some images</h3>
					<p className='description'>
						This is an important part of creating an engaging and memorable
						experience for your guests. Take your time to select high-quality
						images that best represent your event.
					</p>
				</div>
				<section>
					<h4 className='sub-heading'>Cover Image</h4>
					<div className='drop-files'>
						<DropFiles />
					</div>
				</section>
				<hr />
				<section>
					<h4 className='sub-heading'>Flyer Image</h4>
					<div className='drop-files'>
						<DropFiles />
					</div>
				</section>
			</div>
		</>
	)
}

export default EventImages
