import 'chart.js/auto'
import Axios from 'axios'
import { Box } from '@mui/material'
import { Button } from '@mui/material'
import Modal from '../../components/Modal'
import { useEffect, useState } from 'react'

import {
	createVenue,
	deleteVenue,
	listVenues,
	updateVenue,
} from '../../actions/venueActions'

import {
	VENUE_ADD_RESET,
	VENUE_DELETE_RESET,
	VENUE_UPDATE_RESET,
} from '../../constants/venueConstants'

import { useSelector, useDispatch } from 'react-redux'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import DashboardHeader from '../../components/layout/DashboardHeader'
import LoadingBox from '../../components/LoadingBox'
import MessageBox from '../../components/MessageBox'

function Venues() {
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
		{ field: '_id', headerName: 'ID', width: 10 },
		{
			field: 'image',
			headerName: 'Venue Image',
			width: 150,
			renderCell: params => <img alt={params.row.name} src={params.value} />,
		},
		{
			field: 'name',
			headerName: 'Venue Name',
			width: 80,
			editable: true,
		},
		{
			field: 'streetAddress',
			headerName: 'Street Address',
			width: 200,
			editable: true,
		},
		{
			field: 'city',
			headerName: 'City/Town',
			width: 200,
			editable: true,
		},
		{
			field: 'state',
			headerName: 'State/Province',
			width: 200,
			editable: true,
		},
		{
			field: 'postalCode',
			headerName: 'Zip/Postal Code',
			width: 100,
			editable: true,
		},
		{
			field: 'country',
			headerName: 'Country',
			width: 200,
			editable: true,
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
				title='Venues'
				links={[
					{ name: 'Home', route: '/dashboard' },
					{ name: 'Audience', route: './' },
				]}
			/>
			<section className='manage-categories'>
				<div className='content'>
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
						<div className='text-end mt-1'>
							<label className='btn btn-main' htmlFor='modal-1'>
								Add Venue
							</label>
						</div>
						{/* Modal */}
						<input className='modal-state' id='modal-1' type='checkbox' />
						<Modal id='modal-1' title='New Category'>
							<form
								name='createCategoryForm'
								action=''
								onSubmit={e => {
									handleSubmit(e)
								}}
							>
								<div className='ui form'>
									<div className='field'>
										<label>Name</label>
										<input
											type='text'
											placeholder='Category Name'
											onChange={e => {
												setName(e.target.value)
											}}
										/>
									</div>
									<div className='field'>
										<label>Street Address</label>
										<input
											type='text'
											placeholder='Street Address'
											onChange={e => {
												setStreetAddress(e.target.value)
											}}
										/>
									</div>
									<div className='field'>
										<label>City</label>
										<input
											type='text'
											placeholder='City/Town'
											onChange={e => {
												setCity(e.target.value)
											}}
										/>
									</div>
									<div className='field'>
										<label>State</label>
										<input
											type='text'
											placeholder='State/Province'
											onChange={e => {
												setState(e.target.value)
											}}
										/>
									</div>
									<div className='field'>
										<label>Postal Code</label>
										<input
											type='text'
											placeholder='Zip/Postal Code'
											onChange={e => {
												setPostalCode(e.target.value)
											}}
										/>
									</div>
									<div className='field'>
										<label>Country</label>
										<input
											type='text'
											placeholder='Country'
											onChange={e => {
												setCountry(e.target.value)
											}}
										/>
									</div>

									<div className='field'>
										<label>Category Image</label>
										<div className='drop-files'>
											<input
												type='file'
												id='imageFile'
												label='Choose Image'
												onChange={e => {
													uploadFileHandler(e, null, true)
												}}
											></input>
										</div>
									</div>
								</div>
								<div className='modal-footer'>
									<div className=''></div>
									<button type='submit' className='btn btn-main'>
										Create Venue
									</button>
								</div>
							</form>
						</Modal>
					</div>
				</div>
			</section>
		</Box>
	)
}
export default Venues
