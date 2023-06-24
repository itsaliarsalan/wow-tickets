import 'chart.js/auto'
import { useEffect } from "react"

import {
  updateVenue,
  deleteVenue,
  listVenues,
} from "../../../actions/venueActions"
import {
  VENUE_DELETE_RESET,
  VENUE_UPDATE_RESET,
} from "../../../constants/venueConstants"
import Box from "@mui/material/Box"
import { toast } from "react-toastify"
import { Button, Stack } from "@mui/material"

// Icons
import MapIcon from "@mui/icons-material/Map"
import { useNavigate } from "react-router-dom"
import PendingIcon from "@mui/icons-material/Pending"
import { useSelector, useDispatch } from "react-redux"
import LoadingBox from "../../../components/LoadingBox"
import MessageBox from "../../../components/MessageBox"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import DashboardHeader from "../../../components/layout/DashboardHeader"
import StaticsCardVariant1 from "../../../components/cards/StaticsCardVariant1"

function ManageVenues() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const venueList = useSelector((state) => state.venueList)
  const { loading, error, venues } = venueList

  const venueDelete = useSelector((state) => state.venueDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = venueDelete

  const venueUpdate = useSelector((state) => state.venueUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = venueUpdate

  const handleDelete = (params) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteVenue(params.row._id))
    }
  }

  const handleEdit = (params) => {
    if (window.confirm("Are you sure to update?")) {
      venues.map((venue) => {
        if (venue._id === params.row._id) {
          venue.name = params.row.name
          venue.capacity = params.row.capacity
          venue.contact = params.row.contact
          venue.address = params.row.address
          venue.city = params.row.city
          venue.state = params.row.state
          venue.postal = params.row.postal
          venue.country = params.row.country
          dispatch(updateVenue(venue))
        }
        return 0
      })
    }
  }

  const renderActionButton = (params) => {
    return (
      <>
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
      </>
    )
  }

  const columns = [
    { field: "_id", headerName: "ID", width: 50 },
    {
      field: "name",
      headerName: "Venue Name",
      width: 200,
    },
    {
      field: "capacity",
      headerName: "Capacity",
      width: 200,
    },
    {
      field: "contact",
      headerName: "Contact No.",
      width: 200,
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
    },
    {
      field: "city",
      headerName: "City/Town",
      width: 200,
    },
    {
      field: "state",
      headerName: "State/Province",
      width: 200,
    },
    {
      field: "postal",
      headerName: "Zip/Postal Code",
      width: 100,
    },
    {
      field: "country",
      headerName: "Country",
      width: 200,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      renderCell: renderActionButton,
      width: 500,
    },
  ]

  //   UseEffect
  useEffect(() => {
    if (successDelete) {
      dispatch({ type: VENUE_DELETE_RESET })
      toast.success("Venue Deleted Successfully.")
    }
    if (successUpdate) {
      dispatch({ type: VENUE_UPDATE_RESET })
      toast.success("Venue Updated Successfully.")
    }

    dispatch(listVenues({ seller: userInfo._id }))
  }, [dispatch, successDelete, successUpdate, userInfo._id])

  return (
    <Box sx={{ margin: "30px 0" }}>
      <DashboardHeader
        title='Your Venues'
        description='All you venues are listed below. You can update or delete them.'
      >
        <Button
          variant='contained'
          sx={{ whiteSpace: "nowrap" }}
          onClick={() => {
            navigate("/dashboard/venues/add")
          }}
        >
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
              {loading ? (
                <LoadingBox>Fetching venue records...</LoadingBox>
              ) : loadingUpdate ? (
                <LoadingBox>Fetching updated records...</LoadingBox>
              ) : loadingDelete ? (
                <LoadingBox>Fetching venue records...</LoadingBox>
              ) : error ? (
                <MessageBox variant='danger'>{error}</MessageBox>
              ) : errorUpdate ? (
                <MessageBox variant='danger'>{errorUpdate}</MessageBox>
              ) : errorDelete ? (
                <MessageBox variant='danger'>{errorDelete}</MessageBox>
              ) : (
                <DataGrid
                  getRowId={(row) => row._id}
                  rows={venues}
                  columns={columns}
                  pageSize={6}
                  sx={{ border: "0" }}
                  slots={{
                    toolbar: GridToolbar,
                  }}
                  rowsPerPageOptions={[10]}
                  getRowHeight={() => "auto"}
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
