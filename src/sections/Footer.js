import React from 'react'
import './Style.css'
import logo from '../assets/250x150.svg'
function Footer() {
	return (
		<footer>
			<div className='container'>
				<div className='footer-menu'>
					<div className='logo'>
						<img src={logo} alt='website logo' />
						<p>
							Get ready for unforgettable experiences and book your tickets now
							on our website for the hottest events in town!
						</p>
					</div>
					<div className='sub-menu sitemap'>
						<h4>Customer</h4>
						<ul>
							<li>
								<a href='#' className='nav-item'>
									My Tickets
								</a>
							</li>
							<li>
								<a href='#' className='nav-item'>
									Explore Events
								</a>
							</li>
							<li>
								<a href='#' className='nav-item'>
									Contact Us
								</a>
							</li>
						</ul>
					</div>
					<div className='sub-menu account'>
						<h4>Seller</h4>
						<ul>
							<li>
								<a href='#' className='nav-item'>
									Dashboard
								</a>
							</li>
							<li>
								<a href='#' className='nav-item'>
									Add Ticket
								</a>
							</li>
							<li>
								<a href='#' className='nav-item'>
									Orders
								</a>
							</li>
						</ul>
					</div>
					<div className='sub-menu subscribe'>
						<h4>Join Us</h4>
						<ul>
							<li>
								<a href='#' className='nav-item'>
									Customer Account
								</a>
							</li>
							<li>
								<a href='#' className='nav-item'>
									Seller Account
								</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<p className='copyright'>
					©2023 Furiosa Ltd t/a Wow Tickets | All Rights Reserved
				</p>
			</div>
		</footer>
	)
}

export default Footer
