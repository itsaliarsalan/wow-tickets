import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, dropdownMenu, MenuItem } from '@mui/material'
import LockScroll from './layout/LockScroll'

const BtnDropdown = ({ links, title }) => {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
	const handleClick = event => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	const nav = useNavigate()
	return (
		<div className='btn-dropdown'>
			<div className='btn-dropdown-toggle' onClick={handleClick}>
				{!title ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						fill='currentColor'
						className='bi bi-three-dots-vertical vertical-menu'
						viewBox='0 0 16 16'
					>
						<path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
					</svg>
				) : (
					title
				)}
			</div>

			<Menu
				id='basic-menu'
				PaperProps={{
					style: {
						width: 150,
					},
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				{links.map((link, index) => (
					<MenuItem key={index} onClick={() => nav(link)}>
						Profile
					</MenuItem>
				))}
			</Menu>
			{open && <LockScroll />}
		</div>
	)
}

export default BtnDropdown
