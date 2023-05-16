import 'chart.js/auto'
import DashboardHeader from '../../components/DashboardHeader'
import { Box } from '@mui/material'
import { venues } from '../../data'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

function Venues() {
	return (
		<Box sx={{ margin: '30px 0' }}>
			<DashboardHeader
				title='Venues'
				links={[
					{ name: 'Home', route: '/dashboard' },
					{ name: 'Audience', route: './' },
				]}
			/>
			<section className='manage-categories'>
				<div className='content'>
					<div className='main'>
						<div className='card-primary'>
							<DataGrid
								rows={venues.rows}
								columns={venues.columns}
								sx={{ border: '0' }}
								slots={{
									toolbar: GridToolbar,
								}}
								checkboxSelection={true}
							/>
						</div>
					</div>
				</div>
			</section>
		</Box>
	)
}
export default Venues
