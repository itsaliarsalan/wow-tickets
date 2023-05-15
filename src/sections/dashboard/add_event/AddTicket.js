import {
	Box,
	FormControl,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
	Radio,
	FormControlLabel,
	RadioGroup,
	FormLabel,
	Stack,
} from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'

function AddTicket() {
	return (
		<>
			<div className='card-primary'>
				<div className='head'>
					<h3 className='title'>Create Your Ticket</h3>
					<p className='description'>
						Let's make your event extra special! Customize your ticket settings
						below so it perfectly fits your event's style and needs.
					</p>
				</div>
				<section>
					<h4 className='sub-heading'>Ticket Details</h4>
					<Box>
						<TextField
							id='outlined-basic'
							label='Title'
							variant='outlined'
							fullWidth
						/>
						<TextField
							id='outlined-multiline-flexible'
							label='Short description'
							multiline
							rows={4}
							fullWidth
							sx={{ marginTop: 1 }}
						/>
					</Box>
				</section>
				<hr />
				<section>
					<h4 className='sub-heading'>Entry Cost</h4>
					<div className='urm'>
						<FormControl fullWidth>
							<FormLabel id='demo-row-radio-buttons-group-label'>
								Will your event have an entry fee?
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby='demo-row-radio-buttons-group-label'
								name='row-radio-buttons-group'
							>
								<FormControlLabel
									value='paidEvent'
									control={<Radio />}
									label='Yes'
								/>
								<FormControlLabel
									value='freeEvent'
									control={<Radio />}
									label='No'
								/>
							</RadioGroup>
						</FormControl>
						<Box sx={{ display: { md: 'flex' }, gap: 1, marginTop: 1 }}>
							<FormControl fullWidth>
								<InputLabel htmlFor='outlined-adornment-amount'>
									Amount
								</InputLabel>
								<OutlinedInput
									id='outlined-adornment-amount'
									startAdornment={
										<InputAdornment position='start'>$</InputAdornment>
									}
									label='Amount'
								/>
							</FormControl>
							<FormControl fullWidth sx={{ marginTop: { xs: 2, md: 0 } }}>
								<InputLabel htmlFor='outlined-adornment-amount'>
									Tickets
								</InputLabel>
								<OutlinedInput
									id='outlined-adornment-amount'
									startAdornment={
										<InputAdornment position='start'>
											Allocations
										</InputAdornment>
									}
									label='Amount'
								/>
							</FormControl>
						</Box>
					</div>
				</section>
				<hr />
				<section>
					<h4 className='sub-heading'>Tickets Availability Duration</h4>
					<Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
						<DateTimePicker
							label='Start Date'
							defaultValue={dayjs()}
							sx={{ width: '100%' }}
						/>
						<DateTimePicker label='End Date' sx={{ width: '100%' }} />
					</Stack>
				</section>
				<hr />
				<div className='card-outline'>
					<div className='row'>
						<div className='col'>
							<p>Tickets Prices</p>
							<p>0.00 USD</p>
						</div>
						<div className='col'>
							<p>Customer Fees</p>
							<p>1.00 USD</p>
						</div>
						<div className='col'>
							<p>Your Fees</p>
							<p>0.00 USD</p>
						</div>
						<hr style={{ marginTop: '1rem' }} />
						<div className='col'>
							<p>Total you recieve</p>
							<p>0.00 USD</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default AddTicket
