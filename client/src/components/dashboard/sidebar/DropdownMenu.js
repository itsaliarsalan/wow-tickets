import { useState } from "react"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"
import { Typography } from "@mui/material"

export default function DropdownMenu(props) {
	const [isDrop, setDrop] = useState(false)
	function handleDropdownClass() {
		if (!isDrop) setDrop(true)
		else setDrop(false)
	}
	return (
		<li className="nav-item dropdown" onClick={handleDropdownClass}>
			<Typography
				variant="body1"
				sx={{
					display: "flex",
					alignItems: "center",
					gap: 1,
					cursor: "pointer",
				}}
			>
				{props.icon}
				{props.title}
				{!isDrop ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
			</Typography>
			<ul className={isDrop ? "dropdown-menu open" : "dropdown-menu"}>
				{props.children}
				<div className="vertical-line"></div>
			</ul>
		</li>
	)
}
