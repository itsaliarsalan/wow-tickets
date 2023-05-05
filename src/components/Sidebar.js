import { useState } from 'react'
import './Style.css'

function Sidebar() {
	const [isOpen, setOpen] = useState(false)
	const [isDrop, setDrop] = useState(false)

	function handleDropdownClass() {
		if (!isDrop) setDrop(true)
		else setDrop(false)
	}
	function handleSidebarClass() {
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
			<div className={isOpen ? 'dashboard-menu open' : 'dashboard-menu'}>
				<div className='container'>
					<ul className='menu'>
						<li className='nav-item'>
							<a href='/' className='nav-link'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									fill='currentColor'
									className='bi bi-grid'
									viewBox='0 0 16 16'
								>
									<path d='M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z' />
								</svg>
								Dashboard
							</a>
						</li>
						<li className='nav-item dropdown' onClick={handleDropdownClass}>
							<label className='nav-link'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									fill='currentColor'
									className='bi bi-calendar-check'
									viewBox='0 0 16 16'
								>
									<path d='M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z' />
									<path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z' />
								</svg>
								Events
								{!isDrop ? (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='12'
										height='12'
										fill='currentColor'
										className='bi bi-caret-down-fill'
										viewBox='0 0 16 16'
									>
										<path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
									</svg>
								) : (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='12'
										height='12'
										fill='currentColor'
										class='bi bi-caret-up-fill'
										viewBox='0 0 16 16'
									>
										<path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z' />
									</svg>
								)}
							</label>
							<ul className={isDrop ? 'dropdown-menu open' : 'dropdown-menu'}>
								<li className='dropdown-item'>
									<a href='/' className='dropdown-link'>
										Manage Events
									</a>
								</li>
								<li className='dropdown-item'>
									<a href='/' className='dropdown-link'>
										Categories
									</a>
								</li>
								<li className='dropdown-item'>
									<a href='/' className='dropdown-link'>
										Venues
									</a>
								</li>
								<div className='vertical-line'></div>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div
				className={
					isOpen ? 'dashboard-menu-overlay visible' : 'dashboard-menu-overlay'
				}
				onClick={handleSidebarClass}
			></div>

			{/* Button */}
			<aside
				className={isOpen ? 'btn-dashboard open' : 'btn-dashboard'}
				onClick={handleSidebarClass}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='45'
					height='45'
					viewBox='0 0 16 16'
				>
					<circle cx='8' cy='8' r='7' fill='white' />
					<path
						d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'
						fill='#aa1894'
					></path>
				</svg>
			</aside>
		</>
	)
}

export default Sidebar
