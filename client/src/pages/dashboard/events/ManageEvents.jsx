import { Box, Button, Stack } from '@mui/material'
import { eventDetails } from '../../../data'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import DashboardHeader from '../../../components/layout/DashboardHeader'
import StaticsCardVariant1 from '../../../components/cards/StaticsCardVariant1'

// Icons
import EventIcon from '@mui/icons-material/Event'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import EventBusyIcon from '@mui/icons-material/EventBusy'

function ManageEvents() {
	return (
		<Box sx={{ margin: '30px 0' }}>
			<DashboardHeader
				title='Your Events'
				description='All your events are listed below. You can update or delete them.'
			>
				<Button variant='contained' sx={{ whiteSpace: 'nowrap' }}>
					Create Event
				</Button>
			</DashboardHeader>

			<section className='manage-events content'>
				<Stack mb={2} direction='row' spacing={2}>
					<StaticsCardVariant1
						title='5'
						description='Total Events'
						icon={<EventIcon color='secondary' sx={{ fontSize: 62 }} />}
						sx={{ minWidth: 150 }}
					/>
					<StaticsCardVariant1
						title='3'
						description='Active Events'
						icon={
							<EventAvailableIcon color='secondary' sx={{ fontSize: 62 }} />
						}
						sx={{ minWidth: 150 }}
					/>
					<StaticsCardVariant1
						title='3'
						description='Closed Events'
						icon={<EventBusyIcon color='secondary' sx={{ fontSize: 62 }} />}
						sx={{ minWidth: 150 }}
					/>
				</Stack>
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
				</div>
			</section>
		</Box>
	)
}
export default ManageEvents
