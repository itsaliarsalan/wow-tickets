import { Box, Stack } from '@mui/material'
import { eventDetails } from '../../../data'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import DashboardHeader from '../../../components/layout/DashboardHeader'
import StaticsCardVariant1 from '../../../components/cards/StaticsCardVariant1'

// Icons
import AttachMoney from '@mui/icons-material/AttachMoney'

export default function SellOrders() {
	return (
		<Box sx={{ margin: '30px 0' }}>
			<DashboardHeader
				title='Sell Orders'
				description='All your sells are listed below.'
			></DashboardHeader>

			<section className='manage-events content'>
				<Stack mb={2} direction='row' spacing={2}>
					<StaticsCardVariant1
						title='100K'
						description='Earned'
						icon={<AttachMoney color='secondary' sx={{ fontSize: 62 }} />}
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
