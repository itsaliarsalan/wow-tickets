import DashboardHeader from '../../components/DashboardHeader'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Box } from '@mui/material'

// fetch data
import { paymentDetails } from '../../data'

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
				<div className='main'>
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
				</div>
			</section>
		</Box>
	)
}
export default Payments
