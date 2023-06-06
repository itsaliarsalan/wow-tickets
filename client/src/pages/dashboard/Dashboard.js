import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/dashboard/sidebar/Sidebar'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import { Container } from '@mui/material'

function Dashboard() {
	return (
		<Grid container>
			<Grid item container xs={0} sm={0} md={3} lg={2}>
				<Sidebar />
			</Grid>
			<Grid item container xs sx={{ marginBottom: { md: 5 } }}>
				<Container>
					<Outlet />
				</Container>
			</Grid>
		</Grid>
	)
}

export default Dashboard
