import { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

export default function DropdownMenu(props) {
	const [isDrop, setDrop] = useState(false)
	function handleDropdownClass() {
		if (!isDrop) setDrop(true)
		else setDrop(false)
	}
	return (
		<li className='nav-item dropdown' onClick={handleDropdownClass}>
			<label className='nav-link'>
				{props.icon}
				{props.title}
				{!isDrop ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
			</label>
			<ul className={isDrop ? 'dropdown-menu open' : 'dropdown-menu'}>
				{props.children}
				<div className='vertical-line'></div>
			</ul>
		</li>
	)
}
