import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import { Box, Container } from '@mui/material'

// Icons
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined'

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
			<Box
				className={isOpen ? 'dashboard-menu open' : 'dashboard-menu'}
				sx={{
					visibility: { sm: 'hidden', md: 'visible' },
					maxWidth: { xs: '16rem', md: '100%' },
				}}
			>
				<Container fixed className='menu-container mui-fixed'>
					<ul className='menu'>
						<li className='nav-item'>
							<Link to='/dashboard' className='nav-link'>
								<GridViewOutlinedIcon />
								Dashboard
							</Link>
						</li>
						<li className='nav-item dropdown' onClick={handleDropdownClass}>
							<label className='nav-link'>
								<CalendarTodayOutlinedIcon />
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
								<GroupOutlinedIcon />
								Organizers
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/' className='nav-link'>
								<ReceiptOutlinedIcon />
								Orders
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/' className='nav-link'>
								<QrCodeScannerOutlinedIcon />
								Scanner App
							</Link>
						</li>
					</ul>
				</Container>
			</Box>
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
