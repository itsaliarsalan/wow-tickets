import DashboardHeader from '../../components/DashboardHeader'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

// fetch data
import { paymentDetails } from '../../data'

// Icons
import LocalAtmIcon from '@mui/icons-material/LocalAtm'

function Payments() {
	return (
		<Box sx={{ margin: '30px 0' }}>
			<DashboardHeader
				title='Payments'
				links={[
					{ name: 'Home', route: '/' },
					{ name: 'Payments', route: './' },
				]}
			/>
			<section className='content'>
				<Grid container spacing={2}>
					<Grid container xs={12} md={6} spacing={2}>
						<Grid xs={12} sm={6} sx={{ minWidth: { xs: '100%', sm: 'auto' } }}>
							<Box className='dashboard-card-secondary' sx={{ width: '100%' }}>
								<LocalAtmIcon sx={{ fontSize: 45, color: '#068549' }} />
								<h2>$2023</h2>
								<p>Your Available Balance</p>
							</Box>
						</Grid>
						<Grid xs={12} sm={6} sx={{ minWidth: { xs: '100%', sm: 'auto' } }}>
							<Box className='dashboard-card-secondary' sx={{ width: '100%' }}>
								<LocalAtmIcon sx={{ fontSize: 45, color: '#068549' }} />
								<h2>$2023</h2>
								<p>Your Available Balance</p>
							</Box>
						</Grid>
						<Grid xs={12} sm={6} sx={{ minWidth: { xs: '100%', sm: 'auto' } }}>
							<Box className='dashboard-card-secondary' sx={{ width: '100%' }}>
								<LocalAtmIcon sx={{ fontSize: 45, color: '#068549' }} />
								<h2>$2023</h2>
								<p>Your Available Balance</p>
							</Box>
						</Grid>
						<Grid xs={12} sm={6} sx={{ minWidth: { xs: '100%', sm: 'auto' } }}>
							<Box className='dashboard-card-secondary' sx={{ width: '100%' }}>
								<LocalAtmIcon sx={{ fontSize: 45, color: '#068549' }} />
								<h2>$2023</h2>
								<p>Your Available Balance</p>
							</Box>
						</Grid>
					</Grid>
					<Grid xs={12} md={6}>
						<Box className='card-primary' sx={{ height: { md: '100%' } }}>
							<Chart
								type='line'
								data={{
									labels: [
										'Red',
										'Blue',
										'Yellow',
										'Green',
										'Purple',
										'Orange',
									],
									datasets: [
										{
											label: '# of Views',
											data: [12, 19, 3, 5, 2, 3],
											borderWidth: 1,
										},
										{
											label: '# of Sales',
											data: [6, 12, 0, 3, 1, 2],
											borderWidth: 1,
										},
									],
								}}
								options={{ responsive: true, maintainAspectRatio: true }}
							/>
						</Box>
					</Grid>
				</Grid>
				<div
					className='card-primary mt-2'
					style={{ height: 500, width: '100%' }}
				>
					<DataGrid
						rows={paymentDetails.rows}
						columns={paymentDetails.columns}
						sx={{ border: '0' }}
						slots={{
							toolbar: GridToolbar,
						}}
					/>
				</div>
			</section>
		</Box>
	)
}
export default Payments
