import { Link } from 'react-router-dom'
import DashboardHeader from '../../components/DashboardHeader'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

// fetch data
import { eventDetails } from '../../data'
import { Box } from '@mui/material'

function ManageEvents() {
	return (
		<Box sx={{ margin: '30px 0' }}>
			<DashboardHeader
				title='Manage All Events'
				links={[
					{ name: 'Home', route: '/' },
					{ name: 'Events', route: '/' },
				]}
			/>
			<section className='manage-events content'>
				<div className='main'>
					<div
						className='card-primary recent-sales mt-2'
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
					<div className='mt-2 text-end'>
						<Link to='/dashboard/new-event' className='btn btn-main'>
							Create New Event
						</Link>
					</div>
				</div>
			</section>
		</Box>
	)
}
export default ManageEvents
