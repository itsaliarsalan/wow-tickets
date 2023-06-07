import { Box, Button, Stack } from '@mui/material'
import { eventDetails } from '../../../data'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import DashboardHeader from '../../../components/layout/DashboardHeader'
import StaticsCardVariant1 from '../../../components/cards/StaticsCardVariant1'

// Icons
import ReceiptIcon from '@mui/icons-material/Receipt'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

function ManageTickets() {
	return (
		<Box sx={{ margin: '30px 0' }}>
			<DashboardHeader
				title='Your Tickets'
				description='All your tickets are listed below. You can update or delete them.'
			>
				<Button variant='contained' sx={{ whiteSpace: 'nowrap' }}>
					Create Ticket
				</Button>
			</DashboardHeader>

			<section className='manage-events content'>
				<Stack mb={2} direction='row' spacing={2}>
					<StaticsCardVariant1
						title='5K'
						description='Allocated Tickets'
						icon={<ReceiptIcon color='secondary' sx={{ fontSize: 62 }} />}
						sx={{ minWidth: 150 }}
					/>
					<StaticsCardVariant1
						title='3'
						description='Expired Tickets'
						icon={<ReceiptIcon color='secondary' sx={{ fontSize: 62 }} />}
						sx={{ minWidth: 150 }}
					/>
					<StaticsCardVariant1
						title='3'
						description='Sold Tickets'
						icon={<ReceiptIcon color='secondary' sx={{ fontSize: 62 }} />}
						sx={{ minWidth: 150 }}
					/>
					<StaticsCardVariant1
						title='100K'
						description='Earned'
						icon={<AttachMoneyIcon color='secondary' sx={{ fontSize: 62 }} />}
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
export default ManageTickets
