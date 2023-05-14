import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	Stack,
	TextField,
} from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import dayjs from 'dayjs'
import { useState } from 'react'

function BasicInfo() {
	const [venues, setVenues] = useState([
		'Select Venue',
		'Oliver Hansen',
		'Van Henry',
		'April Tucker',
		'Ralph Hubbard',
		'Omar Alexander',
		'Carlos Abbott',
		'Miriam Wagner',
		'Bradley Wilkerson',
		'Virginia Andrews',
		'Kelly Snyder',
	])
	const [venue, setVenue] = useState('')

	const handleChange = event => {
		setVenue(event.target.value)
	}

	return (
		<>
			<div className='categories'>
				<div className='card-primary'>
					<div className='head'>
						<h3 className='title'>Lets get your event set up</h3>
						<p className='description'>
							We'd like to help you tailor your event - please choose options
							accordingly.
						</p>
					</div>
					<section>
						<h4 className='sub-heading'>Event Details</h4>
						<Box>
							<TextField
								id='outlined-basic'
								label='Event name'
								variant='outlined'
								fullWidth
							/>
							<TextField
								id='outlined-multiline-flexible'
								label='Short event description'
								multiline
								rows={4}
								fullWidth
								sx={{ marginTop: 1 }}
							/>
						</Box>
					</section>
					<section>
						<h4 className='sub-heading'>Event Category</h4>
						<div className='categories-wrapper'>
							<div className='category-card'>
								<div className='thumbnail'>
									<img
										src='https://images.pexels.com/photos/8170126/pexels-photo-8170126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
										alt=''
									/>
								</div>
								<div className='name'>Music</div>
							</div>
							<div className='category-card selected'>
								<div className='thumbnail'>
									<img
										src='https://images.pexels.com/photos/14211426/pexels-photo-14211426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
										alt=''
									/>
								</div>

								<div className='name'>Birthday</div>
							</div>
							<div className='category-card'>
								<div className='thumbnail'>
									<img
										src='https://images.pexels.com/photos/3993187/pexels-photo-3993187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
										alt=''
									/>
								</div>
								<div className='name'>Food</div>
							</div>
						</div>
					</section>
					<section>
						<h4 className='sub-heading'>Event Venue</h4>
						<div className='categories-wrapper'>
							<div className='category-card selected'>
								<div className='thumbnail'>
									<img
										src='https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
										alt=''
									/>
								</div>
								<div className='name'>Physical</div>
							</div>
							<div className='category-card'>
								<div className='thumbnail'>
									<img
										src='https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
										alt=''
									/>
								</div>
								<div className='name'>Online</div>
							</div>
						</div>
						<Box style={{ marginTop: '10px' }}>
							<FormControl fullWidth>
								<InputLabel id='demo-simple-select-label'>
									Select Venue
								</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={venue}
									label='Select Venue'
									onChange={handleChange}
								>
									{venues.map(name => (
										<MenuItem key={name} value={name}>
											{name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box>
					</section>
					<section>
						<h4 className='sub-heading'>Event Shedule</h4>
						<Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
							<DateTimePicker
								label='Start Date'
								defaultValue={dayjs()}
								sx={{ width: '100%' }}
							/>
							<DateTimePicker label='End Date' sx={{ width: '100%' }} />
						</Stack>
					</section>
				</div>
			</div>
		</>
	)
}

export default BasicInfo
