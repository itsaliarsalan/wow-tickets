import { Box, Button, Stack } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import DashboardHeader from "../../../components/layout/DashboardHeader"
import StaticsCardVariant1 from "../../../components/cards/StaticsCardVariant1"
import { useSelector, useDispatch } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// Icons
import EventIcon from "@mui/icons-material/Event"
import EventAvailableIcon from "@mui/icons-material/EventAvailable"
import EventBusyIcon from "@mui/icons-material/EventBusy"
import { useEffect } from "react"
import { listEvents, deleteEvent } from "../../../actions/eventActions"
import { EVENT_DELETE_RESET } from "../../../constants/eventConstants"
import { useNavigate } from "react-router-dom"

function ManageEvents() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const eventList = useSelector((state) => state.eventList)
  const { loading, error, events } = eventList

  const eventDelete = useSelector((state) => state.eventDelete)
  const { success: successDelete } = eventDelete

  const handleDelete = (params) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteEvent(params.row._id))
    }
  }

  const handleEdit = (params) => {
    // if (window.confirm("Are you sure to update?")) {
    //   venues.map((venue) => {
    //     if (venue._id === params.row._id) {
    //       venue.name = params.row.name
    //       venue.capacity = params.row.capacity
    //       venue.contact = params.row.contact
    //       venue.address = params.row.address
    //       venue.city = params.row.city
    //       venue.state = params.row.state
    //       venue.postal = params.row.postal
    //       venue.country = params.row.country
    //       dispatch(updateVenue(venue))
    //     }
    //     return 0
    //   })
    // }
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
      headerName: "Event Name",
      width: 200,
    },
    {
      field: "category",
      headerName: "Category",
      width: 200,
    },
    {
      field: "startDate",
      headerName: "Start Date",
      width: 200,
    },
    {
      field: "endDate",
      headerName: "End Date",
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

  useEffect(() => {
    if (successDelete) {
      dispatch({ type: EVENT_DELETE_RESET })
      toast.success("Event Deleted Successfully.")
    }

    dispatch(listEvents())
  }, [dispatch, successDelete])
  return (
    <Box sx={{ margin: "30px 0" }}>
      <DashboardHeader
        title='Your Events'
        description='All your events are listed below. You can update or delete them.'
      >
        <Button
          variant='contained'
          sx={{ whiteSpace: "nowrap" }}
          onClick={() => {
            navigate("/dashboard/events/add")
          }}
        >
          Create Event
        </Button>
      </DashboardHeader>

      <section className='manage-events content'>
        <Stack mb={2} direction='row' spacing={2}>
          <StaticsCardVariant1
            title='5'
            description='Total Events'
            icon={<EventIcon color='secondary' sx={{ fontSize: 62 }} />}
            sx={{ minWidth: 150 }}
          />
          <StaticsCardVariant1
            title='3'
            description='Active Events'
            icon={
              <EventAvailableIcon color='secondary' sx={{ fontSize: 62 }} />
            }
            sx={{ minWidth: 150 }}
          />
          <StaticsCardVariant1
            title='3'
            description='Closed Events'
            icon={<EventBusyIcon color='secondary' sx={{ fontSize: 62 }} />}
            sx={{ minWidth: 150 }}
          />
        </Stack>
        <div className='main'>
          <div
            className='card-primary recent-sales mt-2'
            style={{ height: 500, width: "100%" }}
          >
            {loading ? (
              <span>fetching events...</span>
            ) : error ? (
              <span>{error}</span>
            ) : (
              <DataGrid
                getRowId={(row) => row._id}
                rows={events}
                columns={columns}
                sx={{ border: "0" }}
                slots={{
                  toolbar: GridToolbar,
                }}
                checkboxSelection={true}
              />
            )}
            <ToastContainer
              position='bottom-center'
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='dark'
            />
          </div>
        </div>
      </section>
    </Box>
  )
}
export default ManageEvents
