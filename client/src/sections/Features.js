import React from 'react'
import './Style.css'
import { FiCheckCircle } from 'react-icons/fi'
import { Container } from '@mui/material'

function Features() {
	return (
		<section className='features'>
			<Container>
				<h2>Explore Exciting Events and Secure Your Tickets</h2>
				<div className='features-list'>
					<div className='feature-item'>
						<div className='feature-icon'>
							<FiCheckCircle className='icon' size={32} />
						</div>
						<div className='feature-body'>
							<h4>Ticketing done better</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Quisquam fuga enim iste dolor obcaecati repellendus.
							</p>
						</div>
					</div>
					<div className='feature-item'>
						<div className='feature-icon'>
							<FiCheckCircle className='icon' size={32} />
						</div>
						<div className='feature-body'>
							<h4>Ticketing done better</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Quisquam fuga enim iste dolor obcaecati repellendus.
							</p>
						</div>
					</div>
					<div className='feature-item'>
						<div className='feature-icon'>
							<FiCheckCircle className='icon' size={32} />
						</div>
						<div className='feature-body'>
							<h4>Ticketing done better</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Quisquam fuga enim iste dolor obcaecati repellendus.
							</p>
						</div>
					</div>
					<div className='feature-item'>
						<div className='feature-icon'>
							<FiCheckCircle className='icon' size={32} />
						</div>
						<div className='feature-body'>
							<h4>Ticketing done better</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Quisquam fuga enim iste dolor obcaecati repellendus.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Features
