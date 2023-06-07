import './Style.css'
import { useDispatch, useSelector } from 'react-redux'
import { detailsEvent } from '../actions/eventActions'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
	Box,
	Button,
	Card,
	CardActions,
	CardMedia,
	Chip,
	Container,
	Paper,
	Typography,
	CardContent,
	Stack,
} from '@mui/material'

import DateRangeIcon from '@mui/icons-material/DateRange'
import LocationOnIcon from '@mui/icons-material/LocationOn'

function SingleEvent(props) {
	const dispatch = useDispatch()
	const params = useParams()
	const eventId = params.id

	const eventDetails = useSelector(state => state.eventDetails)

	const { loading, error, event } = eventDetails

	useEffect(() => {
		dispatch(detailsEvent(eventId))
	}, [dispatch, eventId])

	return (
		<>
			{false ? (
				<div className='text-center mb-3'>fetching event details...</div>
			) : false ? (
				<div className='text-center mb-3'>
					error occured while fetching event's details
				</div>
			) : (
				<Container sx={{ marginY: 4 }} maxWidth='md'>
					{/* Banner */}
					<Box sx={{ position: 'relative', marginBottom: -8 }}>
						{/* Cover Image */}
						<Paper
							sx={{
								height: '20rem',
								width: '100%',
								overflow: 'hidden',
								borderRadius: 4,
								position: 'relative',
								'& img': { width: '100%', height: '100%', objectFit: 'cover' },
							}}
						>
							<img
								src='https://agendabrussels.imgix.net/004a2b71108438b08b4c2d39af2e4173770c6408.jpg'
								alt='event banner'
							/>
						</Paper>
						{/* Chips */}
						<Box
							sx={{
								position: 'absolute',
								top: { xs: 20, md: 'inherit' },
								bottom: { xs: 0, md: 170 },
								right: 50,
							}}
						>
							<Chip color='primary' label='Film and Festival' />{' '}
							<Chip color='primary' label='18+ Only' />
						</Box>
						{/* Event Image */}
						<Paper
							sx={{
								width: 150,
								height: 150,
								overflow: 'hidden',
								borderRadius: 3,
								position: 'relative',
								bottom: 80,
								left: { xs: 0, md: 50 },
								right: { xs: 0, md: 'inherit' },
								marginX: { xs: 'auto', md: 'inherit' },
								'& img': {
									width: '100%',
									height: '100%',
									objectFit: 'cover',
								},
							}}
						>
							<img
								src='https://eventmasters.eu/webp-express/webp-images/uploads/2020/04/bosch-1800x1200.jpg.webp'
								alt='event image'
							/>
						</Paper>
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							flexDirection: { xs: 'column', md: 'row' },
							overflow: 'hidden',
						}}
					>
						<h2>Event Name here</h2>
						{/* Meta data */}
						<Box sx={{ display: 'flex', gap: 2 }}>
							<Box
								sx={{
									overflow: 'hidden',
									whiteSpace: 'nowrap',
									maxWidth: { xs: 120, md: 'inherit' },
								}}
							>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'start',
										gap: '2px',
										animation: {
											xs: 'textLeftToRight 3s linear infinite alternate',
											md: 'inherit',
										},
									}}
								>
									<LocationOnIcon color='secondary' sx={{ marginTop: '3px' }} />
									Jutial Gilgit
								</Box>
							</Box>

							<Box
								sx={{
									overflow: 'hidden',
									whiteSpace: 'nowrap',
									maxWidth: { xs: 120, md: 'inherit' },
								}}
							>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'start',
										gap: '2px',
										animation: {
											xs: 'textLeftToRight 3s linear infinite alternate',
											md: 'inherit',
										},
									}}
								>
									<DateRangeIcon color='secondary' sx={{ marginTop: '3px' }} />
									Start: 20 June, 2023
								</Box>
							</Box>
							<Box
								sx={{
									overflow: 'hidden',
									whiteSpace: 'nowrap',
									maxWidth: { xs: 120, md: 'inherit' },
								}}
							>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'start',
										gap: '2px',
										animation: {
											xs: 'textLeftToRight 3s linear infinite alternate',
											md: 'inherit',
										},
									}}
								>
									<DateRangeIcon color='secondary' sx={{ marginTop: '3px' }} />
									End: 30 June, 2023
								</Box>
							</Box>
						</Box>
					</Box>
					<p style={{ color: 'var(--secondary-typo-color)', marginTop: 14 }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						quidem sit odio quae adipisci sequi totam sapiente, doloribus
						veritatis amet atque delectus fugit voluptas, temporibus non
						expedita minus deleniti nobis. Quia, repudiandae nam! Iure omnis
						impedit, distinctio dolorem aspernatur optio vero quos amet laborum
						ad laudantium est, nostrum commodi voluptatibus!
					</p>

					<Typography variant='h4' style={{ marginTop: 32, marginBottom: 24 }}>
						Available Tickets
					</Typography>
					<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
						<Card sx={{ width: { xs: '100%', sm: 250 } }}>
							<CardContent>
								<Stack justifyContent='space-between' direction='row'>
									<Typography gutterBottom variant='h5' component='div'>
										VIP
									</Typography>
									<Typography gutterBottom variant='h5' component='div'>
										10$
									</Typography>
								</Stack>
								<Typography variant='body2' color='text.secondary'>
									Lizards are a widespread group of squamate reptiles.
								</Typography>
								<Button variant='contained' fullWidth sx={{ marginTop: 2 }}>
									Buy Now
								</Button>
								<Typography
									variant='subtitle2'
									sx={{ marginTop: 1 }}
									color='text.secondary'
								>
									400 sold out already out of 500.
								</Typography>
							</CardContent>
						</Card>
						<Card sx={{ width: { xs: '100%', sm: 250 } }}>
							<CardContent>
								<Stack justifyContent='space-between' direction='row'>
									<Typography gutterBottom variant='h5' component='div'>
										VIP
									</Typography>
									<Typography gutterBottom variant='h5' component='div'>
										10$
									</Typography>
								</Stack>
								<Typography variant='body2' color='text.secondary'>
									Lizards are a widespread group of squamate reptiles.
								</Typography>
								<Button variant='contained' fullWidth sx={{ marginTop: 2 }}>
									Buy Now
								</Button>
								<Typography
									variant='subtitle2'
									sx={{ marginTop: 1 }}
									color='text.secondary'
								>
									400 sold out already out of 500.
								</Typography>
							</CardContent>
						</Card>
						<Card sx={{ width: { xs: '100%', sm: 250 } }}>
							<CardContent>
								<Stack justifyContent='space-between' direction='row'>
									<Typography gutterBottom variant='h5' component='div'>
										VIP
									</Typography>
									<Typography gutterBottom variant='h5' component='div'>
										10$
									</Typography>
								</Stack>
								<Typography variant='body2' color='text.secondary'>
									Lizards are a widespread group of squamate reptiles.
								</Typography>
								<Button variant='contained' fullWidth sx={{ marginTop: 2 }}>
									Buy Now
								</Button>
								<Typography
									variant='subtitle2'
									sx={{ marginTop: 1 }}
									color='text.secondary'
								>
									400 sold out already out of 500.
								</Typography>
							</CardContent>
						</Card>
					</Stack>
				</Container>
			)}
		</>
	)
}

export default SingleEvent
