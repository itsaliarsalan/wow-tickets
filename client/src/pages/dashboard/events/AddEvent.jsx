import {
	Alert,
	Box,
	Chip,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Stack,
	Switch,
	TextField,
} from '@mui/material'
import dayjs from 'dayjs'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingBox from '../../../components/LoadingBox'
import { useDispatch, useSelector } from 'react-redux'
import { listVenues } from '../../../actions/venueActions'
import { createEvent } from '../../../actions/eventActions'
import DashboardHeader from '../../../components/layout/DashboardHeader'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { EVENT_ADD_RESET } from '../../../constants/eventConstants'

// Icons
import CropOriginalRoundedIcon from '@mui/icons-material/CropOriginalRounded'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DateRangeIcon from '@mui/icons-material/DateRange'

function AddEvent() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const userSignin = useSelector(state => state.userSignin)
	const { userInfo } = userSignin

	const eventCreate = useSelector(state => state.eventCreate)
	const {
		loading: loadingCreate,
		error: errorCreate,
		success: successCreate,
		event: createdEvent,
	} = eventCreate

	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [cover, setCover] = useState('')
	const [thumbnail, setThumbnail] = useState('')
	const [startDate, setStartDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [restrictions, setRestrictions] = useState([])
	const [price, setPrice] = useState(0)
	const [categoryId, setCategoryId] = useState(null)
	const [venueId, setVenueId] = useState(null)
	const [eventStatus, setEventStatus] = useState(true)

	const [userId, setUserId] = useState(null)
	// const categoryList = useSelector(state => state.categoryList)
	// const {
	// 	loading: loadingCategories,
	// 	error: errorCategories,
	// 	categories,
	// } = categoryList

	const venueList = useSelector(state => state.venueList)
	const { loading: loadingVenues, error: errorVenues, venues } = venueList

	//   Upload States
	const [loadingUpload, setLoadingUpload] = useState(false)
	const [errorUpload, setErrorUpload] = useState('')

	const uploadFileHandler = async (e, isThumbnail) => {
		const file = e.target.files[0]
		const bodyFormData = new FormData()
		bodyFormData.append('image', file)
		setLoadingUpload(true)
		try {
			const { data } = await Axios.post('/api/uploads', bodyFormData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${userInfo.token}`,
				},
			})
			if (isThumbnail) {
				setThumbnail(data)
			} else {
				setCover(data)
			}
			setLoadingUpload(false)
		} catch (error) {
			setErrorUpload(error.message)
			setLoadingUpload(false)
		}
	}

	const createHandler = e => {
		e.preventDefault()
		setEventStatus(true)
		dispatch(
			createEvent({
				name,
				description,
				thumbnail,
				cover,
				startDate,
				endDate,
				restrictions,
				price,
				userId,
				categoryId,
				venueId,
				eventStatus,
			})
		)
	}

	useEffect(() => {
		if (userInfo) {
			setUserId(userInfo._id)
		}
		if (successCreate) {
			dispatch({ type: EVENT_ADD_RESET })
			navigate('/dashboard/manage-events')
		}
		dispatch(listVenues())
	}, [dispatch, successCreate])

	// Active venue for display preview
	const activeVenue = venues?.find(venue => venue._id === venueId)

	// Control restrictions input
	const [restrictionsInput, setRestrictionsInput] = useState(true)

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
								<form
									onSubmit={e => {
										createHandler(e)
									}}
								>
									<Box className='head' sx={{ marginBottom: 2 }}>
										<h3 className='title'>Basic Information</h3>
									</Box>
									<Box>
										<TextField
											id='name'
											label='Event Name'
											variant='outlined'
											onChange={e => {
												setName(e.target.value)
											}}
											fullWidth
											sx={{ marginBottom: 1 }}
										/>
										<FormControl fullWidth>
											<InputLabel id='categories'>Select Category</InputLabel>
											<Select
												labelId='categories'
												id='category'
												label='Select Category'
											>
												<MenuItem value='music'>Music</MenuItem>
												<MenuItem value='party'>Party</MenuItem>
											</Select>
										</FormControl>
										<TextField
											id='description'
											label='Short event description'
											multiline
											rows={4}
											fullWidth
											sx={{ marginTop: 1 }}
											onChange={e => {
												setDescription(e.target.value)
											}}
										/>
										<Box
											className='drop-files'
											sx={{ marginY: 1, width: '100%' }}
										>
											<div className='drop-wrapper'>
												<Box
													component='label'
													htmlFor='imageFile'
													sx={{ display: 'flex' }}
												>
													<CropOriginalRoundedIcon sx={{ fontSize: 40 }} />
													<div className='meta'>
														<h5>Thumbnail Image</h5>
														<input
															type='file'
															id='imageFile'
															onChange={e => {
																uploadFileHandler(e, true)
															}}
															style={{ width: '100%' }}
														/>
													</div>
													{loadingUpload && <LoadingBox></LoadingBox>}
													{/* Use https://www.npmjs.com/package/react-toastify For Notifications */}
													{errorUpload && 'Error Occured'}
												</Box>
											</div>
										</Box>
										<Box
											className='drop-files'
											sx={{ marginY: 1, width: '100%' }}
										>
											<div className='drop-wrapper'>
												<Box
													component='label'
													htmlFor='imageFile'
													sx={{ display: 'flex' }}
												>
													<CropOriginalRoundedIcon sx={{ fontSize: 40 }} />
													<div className='meta'>
														<h5>Cover Image</h5>
														<input
															type='file'
															id='imageFile'
															onChange={e => {
																uploadFileHandler(e, true)
															}}
															style={{ width: '100%' }}
														/>
													</div>
													{loadingUpload && <LoadingBox></LoadingBox>}
													{/* Use https://www.npmjs.com/package/react-toastify For Notifications */}
													{errorUpload && 'Error Occured'}
												</Box>
											</div>
										</Box>

										{/* Venue and Date Information */}
										<Box className='head' sx={{ marginTop: 3 }}>
											<h3 className='title'>Venue & Date</h3>
										</Box>
										<Stack
											spacing={2}
											direction={{ xs: 'column', md: 'column' }}
										>
											<DatePicker
												label='Start Date'
												defaultValue={dayjs('2023-06-1')}
												views={['year', 'month', 'day']}
												sx={{ width: '100%' }}
												onChange={date => {
													setStartDate(date)
												}}
											/>

											<DatePicker
												label='End Date'
												views={['year', 'month', 'day']}
												defaultValue={dayjs('2023-06-1')}
												sx={{ width: '100%' }}
												onChange={date => {
													setEndDate(date)
												}}
											/>
										</Stack>
										<FormControl fullWidth sx={{ marginY: 2 }}>
											<InputLabel id='categories'>Select Venue</InputLabel>
											<Select labelId='venues' id='venues' label='Select Venue'>
												{venues?.map(venue => (
													<MenuItem
														key={venue._id}
														value={venue.name}
														onClick={() => {
															setVenueId(venue._id)
														}}
													>
														{venue.name}
													</MenuItem>
												))}
											</Select>
										</FormControl>

										{/* Venue and Date Information */}
										<Box
											className='head'
											sx={{
												marginTop: 3,
												display: 'flex',
												justifyContent: 'space-between',
												alignItems: 'center',
											}}
										>
											<h3 className='title'>Restrictions</h3>
											<Switch
												checked={restrictionsInput}
												onChange={() =>
													setRestrictionsInput(!restrictionsInput)
												}
											/>
										</Box>
										<Box sx={{ display: 'flex', gap: 1 }}>
											<TextField
												id='minAge'
												label='Min Age'
												variant='outlined'
												type='number'
												fullWidth
												value={restrictions}
												onChange={e => {
													setRestrictions([e.target.value])
												}}
												disabled={restrictionsInput}
												sx={{ marginY: 1 }}
											/>
											<TextField
												id='maxAge'
												label='Max Age'
												variant='outlined'
												type='number'
												fullWidth
												value={restrictions}
												onChange={e => {
													setRestrictions([e.target.value])
												}}
												sx={{ marginY: 1 }}
												disabled={restrictionsInput}
											/>
										</Box>
									</Box>
									<Box sx={{ textAlign: 'end', marginTop: 5 }}>
										<button type='submit' className='btn btn-main'>
											Add Event
										</button>
									</Box>
								</form>
							</Box>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} lg={6}>
					<Box className='event-preview'>
						{/* Banner and Image */}
						<Box sx={{ marginBottom: -12 }}>
							<Box
								className='cover-image'
								sx={{
									maxHeight: 200,
									overflow: 'hidden',
									marginBottom: 4,
									borderRadius: 4,
								}}
							>
								<img
									src='https://agendabrussels.imgix.net/004a2b71108438b08b4c2d39af2e4173770c6408.jpg'
									alt=''
									style={{ width: '100%', height: '100%', objectFit: 'cover' }}
								/>
							</Box>
							<Paper
								sx={{
									width: 120,
									height: 120,
									position: 'relative',
									bottom: 120,
									left: 20,
									borderRadius: 4,
									overflow: 'hidden',
								}}
							>
								<img
									className='event-image'
									src='https://www.meydanfz.ae/wp-content/uploads/2021/10/Events.png'
									alt=''
									style={{ width: '100%', height: '100%', objectFit: 'cover' }}
								/>
							</Paper>
						</Box>
						{/* Basic Info */}
						<Box>
							<h2 style={{ marginBottom: '4px' }}>
								{name || 'Event name here'}
							</h2>
							<p style={{ color: 'var(--secondary-typo-color)' }}>
								{description ||
									'Join us for an exciting and engaging event that will leave you inspired and motivated. This event brings together industry experts, thought leaders, and innovators to share their knowledge and experiences. Discover the latest trends, gain valuable insights, and network with like-minded individuals. ...'}
							</p>
						</Box>
						<hr />
						{/* Meta Info */}
						<Box container sx={{ marginTop: 2 }}>
							{/* Venue */}
							<Box
								sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}
							>
								<LocationOnIcon color='secondary' />
								{activeVenue ? activeVenue.name : 'No Venue Selected'}
							</Box>
							{/* Date information */}
							<Box
								sx={{
									display: 'flex',
									gap: 2,
									alignItems: 'center',
									marginBottom: 1,
								}}
							>
								{/* Start date */}
								<Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
									<DateRangeIcon color='secondary' />
									Start:{' '}
									{startDate
										? new Date(startDate).toLocaleDateString('en-US', {
												day: 'numeric',
												month: 'long',
												year: 'numeric',
										  })
										: 'No date provided'}
								</Box>

								{/* End date */}
								<Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
									<DateRangeIcon color='secondary' />
									End:{' '}
									{endDate
										? new Date(endDate).toLocaleDateString('en-US', {
												day: 'numeric',
												month: 'long',
												year: 'numeric',
										  })
										: 'No date provided'}
								</Box>
							</Box>
							{/* Category */}
							<Chip label='Category' variant='outlined' /> {/* Restrictions */}
							<Chip label='Restrictions' variant='outlined' />
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Box>
	)
}

export default AddEvent
