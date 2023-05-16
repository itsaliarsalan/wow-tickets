import React from 'react'
import './Style.css'
import Breadcrumb from './Breadcrumb'
import { Container } from '@mui/material'

function Banner({ title }) {
	return (
		<section className='component page-banner'>
			<Container sx={{ marginTop: { md: 3 } }}>
				<h1 className='page-title'>Explore Events</h1>
				<Breadcrumb
					links={[
						{ name: 'Home', route: '/' },
						{ name: 'Events', route: './' },
					]}
				/>
			</Container>
		</section>
	)
}

export default Banner
