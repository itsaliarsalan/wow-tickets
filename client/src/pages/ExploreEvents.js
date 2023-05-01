import { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import Event from '../components/Event'

function ExploreEvents() {
	const [cardsData, setCardsData] = useState([])
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				'https://raw.githubusercontent.com/edoitachi/tickets/master/cards-data.js'
			)
			const data = await response.json()
			setCardsData(data)
		}
		fetchData()
	}, [])

	return (
		<>
			<Banner title='Events' url='#' />
			<div className='container'>
				<aside>
					<div className='events-filter'>
						<div className='search-box'>
							<span className='search-icon'>
								<svg
									className='color-secondary'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={2}
									stroke='currentColor'
									aria-hidden='true'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
									/>
								</svg>
							</span>
							<input type='text' id='searchInput' placeholder='Search event' />
						</div>
						<label
							className='btn btn-outline filter-btn btn-icon'
							htmlFor='modal-1'
						>
							<svg
								viewBox='0 0 16 16'
								xmlns='http://www.w3.org/2000/svg'
								aria-hidden='true'
								role='presentation'
								focusable='false'
								style={{
									display: 'block',
									height: '14px',
									width: '14px',
									fill: 'currentcolor',
								}}
								className='color-secondary'
							>
								<path d='M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'></path>
							</svg>
							Filter
						</label>
					</div>
				</aside>
			</div>
			<section className='component explore-events'>
				<div className='container'>
					<div className='events-container'>
						{cardsData.map(card => (
							<Event
								key={card.id}
								eventName={card.eventName}
								location={card.location}
								date={card.date}
								thumbnail={card.thumbnail}
							/>
						))}
					</div>
				</div>
			</section>

			<div>
				{/* Filter Modal */}
				<input className='modal-state' id='modal-1' type='checkbox' />
				<div className='modal'>
					<label className='modal-bg' htmlFor='modal-1' />
					<div className='modal-container'>
						<div className='modal-header'>
							<h4>Filters</h4>
							<label className='modal-close' htmlFor='modal-1' />
						</div>
						<div className='modal-inner'>
							<section>
								<h3>Sort by</h3>
								<div className='tags'>
									<div className='tag'>
										<input
											type='radio'
											name='sort'
											id='sortPopularity'
											defaultChecked
										/>
										<label htmlFor='popularity'>Popularity</label>
									</div>
									<div className='tag'>
										<input type='radio' name='sort' id='sortMostRecent' />
										<label htmlFor='sortMostRecent'>Most Recent</label>
									</div>
									<div className='tag'>
										<input type='radio' name='sort' id='sortLowToHigh' />
										<label htmlFor='sortLowToHigh'>Low to High</label>
									</div>
									<div className='tag'>
										<input type='radio' name='sort' id='sortHighToLow' />
										<label htmlFor='sortHighToLow'>High to Low</label>
									</div>
								</div>
							</section>
							<hr />
							<section>
								<h3>More Filters</h3>
								<div className='tags'>
									<div className='tag'>
										<input
											type='checkbox'
											name='filter'
											id='filterCancelledEvents'
										/>
										<label htmlFor='filterCancelledEvents'>
											Hide Cancelled Events
										</label>
									</div>
									<div className='tag'>
										<input
											type='checkbox'
											name='filter'
											id='filterAvailableEvents'
										/>
										<label htmlFor='filterAvailableEvents'>
											Show Only Available Events
										</label>
									</div>
									<div className='tag'>
										<input
											type='checkbox'
											name='filter'
											id='filterAvailableEvents'
										/>
										<label htmlFor='filterAvailableEvents'>
											Under 18's Allowed
										</label>
									</div>
								</div>
							</section>
							<hr />
							<section>
								<h3>Date</h3>
								<div className='tags'>
									<div className='tag'>
										<input type='checkbox' name='date' id='filterToday' />
										<label htmlFor='filterToday'>Today</label>
									</div>
									<div className='tag'>
										<input type='checkbox' name='date' id='filterTomorrow' />
										<label htmlFor='filterTomorrow'>Tomorrow</label>
									</div>
									<div className='tag'>
										<input type='checkbox' name='date' id='filterWeek' />
										<label htmlFor='filterWeek'>Week</label>
									</div>
								</div>
							</section>
						</div>
						<div className='modal-footer'>
							<a href='/'>Clear All</a>
							<button className='btn btn-main'>Show 21 Events</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ExploreEvents
