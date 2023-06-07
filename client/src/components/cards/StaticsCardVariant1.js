import { Box } from '@mui/material'
import BtnDropdown from '../BtnDropdown'

export default function StaticsCardVariant1(props) {
	return (
		<Box component='div' className='dashboard-card-secondary' sx={props.sx}>
			<Box sx={{ textAlign: 'end', marginBottom: -3 }}>
				{props.icon}
				{props.links && <BtnDropdown links={props.links} />}
			</Box>
			<h2>{props.title}</h2>
			<p style={{ color: 'var(--secondary-typo-color)' }}>
				{props.description}
			</p>
		</Box>
	)
}
