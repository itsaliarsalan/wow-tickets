import 'chart.js/auto'
import DashboardHeader from '../../components/layout/DashboardHeader'
import { Box } from '@mui/material'
import { audience } from '../../data'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

function Audience() {
	return (
		<Box sx={{ margin: '30px 0' }}>
			<DashboardHeader
				title='My Audience'
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
								rows={audience.rows}
								columns={audience.columns}
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
export default Audience
