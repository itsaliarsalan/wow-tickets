import DashboardHeader from '../../../components/layout/DashboardHeader'
import { Box, Stack } from '@mui/material'
import { audience } from '../../../data'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import StaticsCardVariant1 from '../../../components/cards/StaticsCardVariant1'
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded'

export default function ManageUsers() {
	return (
		<Box sx={{ margin: '30px 0' }}>
			<DashboardHeader
				title='Users'
				description='All your users are listed below.'
			></DashboardHeader>
			<section className='manage-categories'>
				<div className='content'>
					<Stack mb={2} direction='row' spacing={2}>
						<StaticsCardVariant1
							title='100K'
							description='Users'
							icon={
								<PeopleOutlineRoundedIcon
									color='secondary'
									sx={{ fontSize: 62 }}
								/>
							}
							sx={{ minWidth: 150 }}
						/>
					</Stack>
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
