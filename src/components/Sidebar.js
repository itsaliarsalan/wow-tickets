import { useState } from 'react'
import { Link } from 'react-router-dom'
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
			<aside className={isOpen ? 'dashboard-menu open' : 'dashboard-menu'}>
				<div className='container'>
					<ul className='menu'>
						<li className='nav-item'>
							<Link to='/dashboard' className='nav-link'>
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
							</Link>
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
										className='bi bi-caret-up-fill'
										viewBox='0 0 16 16'
									>
										<path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z' />
									</svg>
								)}
							</label>
							<ul className={isDrop ? 'dropdown-menu open' : 'dropdown-menu'}>
								<li className='dropdown-item'>
									<Link to='new-event' className='dropdown-link'>
										Add Event
									</Link>
								</li>
								<li className='dropdown-item'>
									<Link to='/dashboard/manage-events' className='dropdown-link'>
										Manage Events
									</Link>
								</li>
								<li className='dropdown-item'>
									<Link
										to='/dashboard/manage-categories'
										className='dropdown-link'
									>
										Categories
									</Link>
								</li>
								<li className='dropdown-item'>
									<Link to='/' className='dropdown-link'>
										Audience
									</Link>
								</li>
								<li className='dropdown-item'>
									<Link to='/' className='dropdown-link'>
										Venues
									</Link>
								</li>
								<div className='vertical-line'></div>
							</ul>
						</li>
						<li className='nav-item'>
							<Link to='/' className='nav-link'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='feather feather-users'
								>
									<path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
									<circle cx='9' cy='7' r='4'></circle>
									<path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
									<path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
								</svg>
								Organizers
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/' className='nav-link'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									fill='currentColor'
									className='bi bi-receipt'
									viewBox='0 0 16 16'
								>
									<path d='M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z' />
									<path d='M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z' />
								</svg>
								Orders
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/' className='nav-link'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									fill='currentColor'
									className='bi bi-qr-code-scan'
									viewBox='0 0 16 16'
								>
									<path d='M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z' />
									<path d='M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z' />
									<path d='M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z' />
									<path d='M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z' />
									<path d='M12 9h2V8h-2v1Z' />
								</svg>
								Scanner App
							</Link>
						</li>
					</ul>
				</div>
			</aside>
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
