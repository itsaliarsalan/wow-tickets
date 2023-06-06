import DashboardHeader from '../../components/layout/DashboardHeader'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Box } from '@mui/material'

// fetch data
import { eventDetails } from '../../data'

function Organizers() {
	return (
		<Box sx={{ margin: '30px 0' }}>
			<DashboardHeader
				title='Manage All Organizers'
				links={[
					{ name: 'Home', route: '/' },
					{ name: 'Organizers', route: '/' },
				]}
			/>
			<section className='content'>
				<div className='main'>
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
export default Organizers
