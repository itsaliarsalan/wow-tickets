import 'chart.js/auto'
import Axios from 'axios'
import { useEffect, useState } from 'react'

import {
	createVenue,
	deleteVenue,
	listVenues,
	updateVenue,
} from '../../../actions/venueActions'

import {
	VENUE_ADD_RESET,
	VENUE_DELETE_RESET,
	VENUE_UPDATE_RESET,
} from '../../../constants/venueConstants'

import { useSelector, useDispatch } from 'react-redux'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import DashboardHeader from '../../../components/layout/DashboardHeader'
import LoadingBox from '../../../components/LoadingBox'
import MessageBox from '../../../components/MessageBox'
import Box from '@mui/material/Box'
import { Button, Stack } from '@mui/material'
import StaticsCardVariant1 from '../../../components/cards/StaticsCardVariant1'

// Icons
import MapIcon from '@mui/icons-material/Map'
import PendingIcon from '@mui/icons-material/Pending'

function ManageVenues() {
	const dispatch = useDispatch()
	const userSignin = useSelector(state => state.userSignin)
	const { userInfo } = userSignin

	const [name, setName] = useState('')
	const [image, setImage] = useState('')
	const [streetAddress, setStreetAddress] = useState('')
	const [city, setCity] = useState('')
	const [state, setState] = useState('')
	const [postalCode, setPostalCode] = useState('')
	const [country, setCountry] = useState('')

	const venueList = useSelector(state => state.venueList)
	const { loading, error, venues } = venueList

	const venueCreate = useSelector(state => state.venueCreate)
	const {
		loading: loadingCreate,
		error: errorCreate,
		success: successCreate,
		venue: createdVenue,
	} = venueCreate

	const venueDelete = useSelector(state => state.venueDelete)
	const {
		loading: loadingDelete,
		error: errorDelete,
		success: successDelete,
	} = venueDelete

	const venueUpdate = useSelector(state => state.venueUpdate)
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = venueUpdate

	const [loadingUpload, setLoadingUpload] = useState(false)
	const [errorUpload, setErrorUpload] = useState('')

	const uploadFileHandler = async (e, params, newVenue) => {
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

			if (newVenue) {
				setImage(data)
			} else {
				venues.map(venue => {
					if (venue._id === params.row._id) {
						venue.image = data
						dispatch(updateVenue(venue))
					}
					return 0
				})
			}

			setLoadingUpload(false)
		} catch (error) {
			setErrorUpload(error.message)
			setLoadingUpload(false)
		}
	}

	// eslint-disable-next-line
	const handleSubmit = e => {
		e.preventDefault()
		dispatch(
			createVenue({
				name,
				image,
				streetAddress,
				city,
				state,
				postalCode,
				country,
			})
		)
	}

	const handleDelete = params => {
		if (window.confirm('Are you sure to delete?')) {
			dispatch(deleteVenue(params.row._id))
		}
	}

	const handleEdit = params => {
		if (window.confirm('Are you sure to update?')) {
			venues.map(venue => {
				if (venue._id === params.row._id) {
					venue.name = params.row.name
					venue.image = params.row.image
					venue.streetAddress = params.row.streetAddress
					venue.city = params.row.city
					venue.state = params.row.state
					venue.postalCode = params.row.postalCode
					venue.country = params.row.country
					dispatch(updateVenue(venue))
				}
				return 0
			})
		}
	}

	const renderActionButton = params => {
		return (
			<strong>
				<input
					type='file'
					id='imageFile'
					label='Choose Image'
					onChange={e => {
						uploadFileHandler(e, params, false)
					}}
				></input>
				<Button
					type='button'
					variant='contained'
					color='primary'
					size='small'
					style={{ marginLeft: 16 }}
					onClick={() => {
						handleEdit(params)
					}}
				>
					Edit
				</Button>
				<Button
					type='button'
					variant='contained'
					color='primary'
					size='small'
					style={{ marginLeft: 16 }}
					onClick={() => {
						handleDelete(params)
					}}
				>
					Delete
				</Button>
			</strong>
		)
	}

	const columns = [
		{ field: '_id', headerName: 'ID', width: 50 },
		{
			field: 'image',
			headerName: 'Venue Image',
			width: 150,
			renderCell: params => (
				<img
					alt={params.row.name}
					src={params.value}
					style={{ width: '100%', objectFit: 'cover' }}
				/>
			),
		},
		{
			field: 'name',
			headerName: 'Venue Name',
			width: 200,
		},
		{
			field: 'streetAddress',
			headerName: 'Street Address',
			width: 200,
		},
		{
			field: 'city',
			headerName: 'City/Town',
			width: 200,
		},
		{
			field: 'state',
			headerName: 'State/Province',
			width: 200,
		},
		{
			field: 'postalCode',
			headerName: 'Zip/Postal Code',
			width: 100,
		},
		{
			field: 'country',
			headerName: 'Country',
			width: 200,
		},
		{
			field: 'actions',
			headerName: 'Actions',
			sortable: false,
			renderCell: renderActionButton,
			width: 500,
		},
	]

	//   UseEffect
	useEffect(() => {
		if (successCreate) {
			dispatch({ type: VENUE_ADD_RESET })
		}
		if (successDelete) {
			dispatch({ type: VENUE_DELETE_RESET })
		}
		if (successUpdate) {
			dispatch({ type: VENUE_UPDATE_RESET })
		}

		dispatch(listVenues())
	}, [dispatch, successCreate, successDelete, successDelete])
	return (
		<Box sx={{ margin: '30px 0' }}>
			<DashboardHeader
				title='Your Venues'
				description='All you venues are listed below. You can update or delete them.'
			>
				<Button type='submit' variant='contained' sx={{ whiteSpace: 'nowrap' }}>
					Create Venue
				</Button>
			</DashboardHeader>

			<section className='manage-categories'>
				<div className='content'>
					<Stack mb={2} direction='row' spacing={2}>
						<StaticsCardVariant1
							title='5'
							description='Total Venues'
							icon={<MapIcon color='secondary' sx={{ fontSize: 62 }} />}
							sx={{ minWidth: 150 }}
						/>
						<StaticsCardVariant1
							title='3'
							description='Reserved Venues'
							icon={<PendingIcon color='secondary' sx={{ fontSize: 62 }} />}
							sx={{ minWidth: 150 }}
						/>
					</Stack>
					<div className='main'>
						<div className='card-primary'>
							{loading || loadingCreate || loadingDelete || loadingUpdate ? (
								<LoadingBox />
							) : error ? (
								<MessageBox variant='danger'>{error}</MessageBox>
							) : (
								<DataGrid
									getRowId={row => row._id}
									rows={venues}
									columns={columns}
									pageSize={6}
									sx={{ border: '0' }}
									slots={{
										toolbar: GridToolbar,
									}}
									rowsPerPageOptions={[10]}
									getRowHeight={() => 'auto'}
								/>
							)}
						</div>
					</div>
				</div>
			</section>
		</Box>
	)
}
export default ManageVenues
