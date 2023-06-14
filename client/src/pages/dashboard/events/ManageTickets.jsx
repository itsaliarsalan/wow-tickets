import { useEffect } from "react"
import { Box, Button, Stack } from "@mui/material"
import { eventDetails } from "../../../data"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import DashboardHeader from "../../../components/layout/DashboardHeader"
import StaticsCardVariant1 from "../../../components/cards/StaticsCardVariant1"
import { useSelector, useDispatch } from "react-redux"
import { listTickets, deleteTicket } from "../../../actions/ticketActions"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// Icons
import ReceiptIcon from "@mui/icons-material/Receipt"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import { TICKET_DELETE_RESET } from "../../../constants/ticketConstants"

function ManageTickets() {
  const dispatch = useDispatch()
  const ticketList = useSelector((state) => state.ticketList)
  const { loading, error, tickets } = ticketList

  const ticketDelete = useSelector((state) => state.ticketDelete)
  const { success: successDelete } = ticketDelete

  const handleDelete = (params) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteTicket(params.row._id))
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
      headerName: "Ticket",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "allocation",
      headerName: "Allocated Tickets",
      width: 200,
    },
    {
      field: "ticketStatus",
      headerName: "Status",
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
      dispatch({ type: TICKET_DELETE_RESET })
      toast.success("Ticket Deleted Successfully.")
    }
    dispatch(listTickets())
  }, [dispatch, successDelete])
  return (
    <Box sx={{ margin: "30px 0" }}>
      <DashboardHeader
        title='Your Tickets'
        description='All your tickets are listed below. You can update or delete them.'
      >
        <Button variant='contained' sx={{ whiteSpace: "nowrap" }}>
          Create Ticket
        </Button>
      </DashboardHeader>

      <section className='manage-events content'>
        <Stack mb={2} direction='row' spacing={2}>
          <StaticsCardVariant1
            title='5K'
            description='Allocated Tickets'
            icon={<ReceiptIcon color='secondary' sx={{ fontSize: 62 }} />}
            sx={{ minWidth: 150 }}
          />
          <StaticsCardVariant1
            title='3'
            description='Expired Tickets'
            icon={<ReceiptIcon color='secondary' sx={{ fontSize: 62 }} />}
            sx={{ minWidth: 150 }}
          />
          <StaticsCardVariant1
            title='3'
            description='Sold Tickets'
            icon={<ReceiptIcon color='secondary' sx={{ fontSize: 62 }} />}
            sx={{ minWidth: 150 }}
          />
          <StaticsCardVariant1
            title='100K'
            description='Earned'
            icon={<AttachMoneyIcon color='secondary' sx={{ fontSize: 62 }} />}
            sx={{ minWidth: 150 }}
          />
        </Stack>
        <div className='main'>
          <div
            className='card-primary recent-sales mt-2'
            style={{ height: 500, width: "100%" }}
          >
            {loading ? (
              <span>fetching tickets...</span>
            ) : error ? (
              <span>{error}</span>
            ) : (
              <DataGrid
                getRowId={(row) => row._id}
                rows={tickets}
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
export default ManageTickets
