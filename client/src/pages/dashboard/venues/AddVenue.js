import { Box, Grid, TextField } from '@mui/material'
import DashboardHeader from '../../../components/layout/DashboardHeader'
import { useState } from 'react'
import React from 'react'
import Heading from '../../../components/layout/Heading'

export default function AddVenue() {
	const [venueName, setVenueName] = useState('')
	const [description, setDescription] = useState('')
	const [capacity, setCapacity] = useState()
	const [phone, setPhone] = useState('')
	const [address, setAddress] = useState('')
	const [town, setTown] = useState('')
	const [country, setCountry] = useState('')

	return (
		<>
			<DashboardHeader
				title='Add Venue'
				links={[
					{ name: 'Home', route: '/dashboard' },
					{ name: 'Add Venue', current: true },
				]}
			/>
			<Grid container>
				<Grid item md={6}>
					<Box className='card-primary' sx={{ width: '100%' }}>
						<form>
							<TextField
								required
								id='venueName'
								label='Venue Name'
								defaultValue={venueName}
								onChange={e => setVenueName(e.target.value)}
								fullWidth
								sx={{ marginY: 1 }}
							/>
							<TextField
								id='venueDescription'
								label='Description'
								multiline
								rows={4}
								fullWidth
								defaultValue={description}
								onChange={e => setDescription(e.target.value)}
								sx={{ marginY: 1 }}
							/>
							<TextField
								id='capacity'
								label='Capacity'
								type='number'
								fullWidth
								defaultValue={capacity}
								onChange={e => setCapacity(e.target.value)}
								sx={{ marginY: 1 }}
							/>
							<TextField
								id='phone'
								label='Phone'
								fullWidth
								defaultValue={phone}
								onChange={e => setPhone(e.target.value)}
								sx={{ marginY: 1 }}
							/>
							<TextField
								id='address'
								label='Address'
								fullWidth
								defaultValue={address}
								onChange={e => setAddress(e.target.value)}
								sx={{ marginY: 1 }}
							/>
							<TextField
								id='town'
								label='Town'
								fullWidth
								defaultValue={town}
								onChange={e => setTown(e.target.value)}
								sx={{ marginY: 1 }}
							/>
							<TextField
								id='country'
								label='Country'
								fullWidth
								defaultValue={country}
								onChange={e => setCountry(e.target.value)}
								sx={{ marginY: 1 }}
							/>
							<Box sx={{ textAlign: 'end', mt: 2 }}>
								<button className='btn btn-main'>Save</button>
							</Box>
						</form>
					</Box>
				</Grid>
				<Grid item></Grid>
			</Grid>
		</>
	)
}
