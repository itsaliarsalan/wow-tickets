import DashboardHeader from '../../components/DashboardHeader'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Box, Stack } from '@mui/material'
import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

// fetch data
import { eventDetails } from '../../data'

function Orders() {
	return (
		<Box sx={{ margin: '30px 0' }}>
			<DashboardHeader
				title='Manage All Orders'
				links={[
					{ name: 'Home', route: '/' },
					{ name: 'Orders', route: '/' },
				]}
			/>
			<section className='content'>
				<div className='main'>
					<Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
						<Box
							className='card-primary'
							sx={{
								width: { md: '100%' },
							}}
						>
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
						<Box className='card-primary' sx={{ width: '100%' }}>
							<Chart
								type='bar'
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
					</Stack>
					<div
						className='card-primary mt-2'
						style={{ height: 500, width: '100%' }}
					>
						<DataGrid
							rows={eventDetails.rows}
							columns={eventDetails.columns}
							sx={{ border: '0' }}
							slots={{
								toolbar: GridToolbar,
							}}
							checkboxSelection={true}
						/>
					</div>
				</div>
			</section>
		</Box>
	)
}
export default Orders
