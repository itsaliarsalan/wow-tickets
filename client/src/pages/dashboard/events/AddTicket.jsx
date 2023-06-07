import {
	Box,
	Button,
	FormControl,
	Grid,
	InputAdornment,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	TextField,
} from '@mui/material'
import { useState } from 'react'
import DashboardHeader from '../../../components/layout/DashboardHeader'

function AddTicket() {
	const [ticketName, setTicketName] = useState('')
	const [description, setDescription] = useState('')
	const [ticketCost, setTicketCost] = useState('')
	const [ticketAllocations, setTicketAllocations] = useState('')

	return (
		<Box sx={{ marginTop: '30px', marginBottom: '10px' }}>
			<DashboardHeader
				title='Create a new Event'
				description='Add new event to your list. Fill all the details below'
			/>
			<Grid
				container
				spacing={{ xs: 5, lg: 2 }}
				direction={{ xs: 'column-reverse', lg: 'row' }}
			>
				<Grid item xs={12} lg={6}>
					<Box className='content new-event' sx={{ display: 'flex' }}>
						<Box className='categories' sx={{ width: '100%' }}>
							<Box className='card-primary' sx={{ marginTop: '0 !important' }}>
								<form>
									<Box className='head' sx={{ marginBottom: 1 }}>
										<h3 className='title'>Basic Information</h3>
									</Box>
									<Box>
										<FormControl fullWidth sx={{ marginY: 1 }}>
											<InputLabel id='categories'>Select Event</InputLabel>
											<Select labelId='events' id='events' label='Select Event'>
												<MenuItem value='party-pooper'>Part Pooper</MenuItem>
												<MenuItem value='allway-nighter'>Night Kings</MenuItem>
											</Select>
										</FormControl>
										<TextField
											id='ticketName'
											label='Ticket Name'
											variant='outlined'
											value={ticketName}
											onChange={e => {
												setTicketName(e.target.value)
											}}
											fullWidth
											sx={{ marginBottom: 1 }}
										/>
										<TextField
											id='description'
											label='Short event description'
											multiline
											rows={4}
											fullWidth
											sx={{ marginBottom: 1 }}
											value={description}
											onChange={e => {
												setDescription(e.target.value)
											}}
										/>

										<Box className='head' sx={{ marginTop: 2 }}>
											<h3 className='title'>Ticket Pricing</h3>
										</Box>
										<FormControl fullWidth sx={{ marginY: 1 }}>
											<InputLabel htmlFor='outlined-adornment-amount'>
												Cost
											</InputLabel>
											<OutlinedInput
												id='outlined-adornment-amount'
												startAdornment={
													<InputAdornment position='start'>$</InputAdornment>
												}
												value={ticketCost}
												onChange={e => setTicketCost(e.target.value)}
												label='Amount'
											/>
										</FormControl>
										<TextField
											label='Allocations'
											variant='outlined'
											value={ticketAllocations}
											onChange={e => {
												setTicketAllocations(e.target.value)
											}}
											fullWidth
											sx={{ marginBottom: 1 }}
										/>
									</Box>

									<Box sx={{ textAlign: 'end', marginTop: 4 }}>
										<Button
											type='submit'
											className='btn btn-main'
											variant='contained'
										>
											Add Ticket
										</Button>
									</Box>
								</form>
							</Box>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} lg={6}></Grid>
			</Grid>
		</Box>
	)
}

export default AddTicket
