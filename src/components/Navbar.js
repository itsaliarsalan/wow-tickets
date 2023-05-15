import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import logo from '../assets/250x150.svg'
import { Container } from '@mui/material'

function Navbar() {
	const [isOpen, setOpen] = useState(false)

	function handleClick() {
		if (!isOpen) {
			document.documentElement.style.overflow = 'hidden'
			setOpen(true)
		} else {
			document.documentElement.style.overflow = 'auto'
			setOpen(false)
		}
	}

	return (
		<>
			<nav className='top-nav'>
				<Container
					maxWidth='md'
					sx={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<div className='logo'>
						<Link to='/'>
							<img src={logo} alt='main logo' />
						</Link>
					</div>
					<button
						className='menu-toggle'
						aria-label='Open Navigation Menu'
						onClick={handleClick}
					>
						<span className='menu-icon' />
					</button>
					<ul className={isOpen ? 'menu open' : 'menu'}>
						<li>
							<Link className='nav-link' to='/events'>
								Explore Events
							</Link>
						</li>
						<li>
							<Link to='/signin' className='nav-cta'>
								Your Tickets
							</Link>
						</li>
					</ul>
				</Container>
			</nav>
			{/* Darken background when menu opens */}
			<div
				className={isOpen ? 'overlay visible' : 'overlay'}
				onClick={handleClick}
			/>
		</>
	)
}

export default Navbar
