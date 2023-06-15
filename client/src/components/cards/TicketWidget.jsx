import React from "react"
import "./TicketWidget.css"
import { Box, Typography } from "@mui/material"

const TicketWidget = props => {
	function returnEventName(name) {
		const openingBracketIndex = name.indexOf("(")
		if (openingBracketIndex !== -1) {
			const eventName = name.substring(0, openingBracketIndex).trim()
			return eventName
		} else {
			return name.trim()
		}
	}

	function returnTextWithBracket(name) {
		const openingBracketIndex = name.indexOf("(")
		const closingBracketIndex = name.indexOf(")")
		if (
			openingBracketIndex !== -1 &&
			closingBracketIndex !== -1 &&
			closingBracketIndex > openingBracketIndex
		) {
			const startIndex = openingBracketIndex + 1
			const endIndex = closingBracketIndex
			const textWithBracket = name.substring(startIndex, endIndex).trim()
			return textWithBracket
		} else {
			return ""
		}
	}
	return (
		<widget type="ticket">
			<Box
				className="content"
				sx={{
					background: "#fff",
					padding: "0.5rem 1rem",
					minHeight: 180,
					paddingTop: 2,
				}}
			>
				{/* Top */}
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "start",
						gap: 2,
					}}
				>
					<div className="event-name">
						<h3>{returnEventName(props.name)}</h3>
						<h5 style={{ fontWeight: 400 }}>
							{returnTextWithBracket(props.name)}
						</h5>
					</div>
					<div classNameName="ticket-price">
						<h2 style={{ color: "#036204" }}>${props.price}</h2>
					</div>
				</Box>
				{/* Description */}
				<Typography
					variant="subtitle2"
					color="text.secondary"
					gutterBottom
					sx={{ marginTop: 1 }}
				>
					{props.description}
				</Typography>
			</Box>
			<div className="rip"></div>
			<Box sx={{ backgroundColor: "#fff", paddingY: 1, paddingX: 2 }}></Box>
			<div className="bottom">
				<a className="buy" href="#">
					BUY TICKET
				</a>
			</div>
		</widget>
	)
}

export default TicketWidget
