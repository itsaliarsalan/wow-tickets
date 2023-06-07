import { Box } from '@mui/material'

export default function Heading(props) {
	return (
		<Box sx={{ marginY: 3 }}>
			<h3>{props.title}</h3>
			<p style={{ color: 'var(--secondary-typo-color)' }}>
				{props.description}
			</p>
		</Box>
	)
}
