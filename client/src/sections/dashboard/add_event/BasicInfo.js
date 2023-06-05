import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
} from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import dayjs from 'dayjs'
import { useState } from 'react'

function BasicInfo() {
	// eslint-disable-next-line
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
            <Box style={{ marginTop: "10px" }}>
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
                  {venues.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </section>
          <section>
            <h4 className='sub-heading'>Event Venue</h4>
            <Box style={{ marginTop: "10px" }}>
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
                  {venues.map((name) => (
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
            <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
              <DateTimePicker
                label='Start Date'
                defaultValue={dayjs()}
                sx={{ width: "100%" }}
              />
              <DateTimePicker label='End Date' sx={{ width: "100%" }} />
            </Stack>
          </section>
        </div>
      </div>
    </>
  )
}

export default BasicInfo
