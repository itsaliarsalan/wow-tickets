import React from 'react'
import './Style.css'
import SearchBox from '../components/SearchBox'
import { Container } from '@mui/material'

function Hero() {
	return (
		<section className='hero'>
			<Container>
				<div className='content'>
					<h1>Book Your Tickets For Upcoming Events</h1>
					<SearchBox />
					<button className='search-button'>Search</button>
				</div>
			</Container>
		</section>
	)
}

export default Hero
