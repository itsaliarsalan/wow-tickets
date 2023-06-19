import {
	Box,
	Button,
	FormControl,
	Grid,
	InputAdornment,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	TextField,
} from '@mui/material'
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { listEvents } from "../../../actions/eventActions"
import { createTicket } from "../../../actions/ticketActions"
import LoadingBox from "../../../components/LoadingBox"
import MessageBox from "../../../components/MessageBox"

import DashboardHeader from "../../../components/layout/DashboardHeader"
import { toast } from "react-toastify"
function AddTicket() {
  const dispatch = useDispatch()

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const eventList = useSelector((state) => state.eventList)
  const { loading: loadingEvents, error: errorEvents, events } = eventList

  const ticketCreate = useSelector((state) => state.ticketCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = ticketCreate

  const [name, setTicketName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setTicketCost] = useState(0.01)
  const [allocation, setTicketAllocations] = useState("")
  const ticketStatus = true
  const [userId, setUserId] = useState(null)
  const [eventId, setEventId] = useState(null)

  useEffect(() => {
    if (successCreate) {
      toast.success("Ticket Created Successfully!")
      setTicketName("")
      setDescription("")
      setTicketCost(0.0)
      setTicketAllocations("")
    }
    dispatch(listEvents())
    setUserId(userInfo._id)
  }, [dispatch, userInfo._id, successCreate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createTicket({
        name,
        description,
        price,
        allocation,
        userId,
        eventId,
        ticketStatus,
      })
    )
  }
  return (
    <Box sx={{ marginTop: "30px", marginBottom: "10px" }}>
      <DashboardHeader
        title='Create a new Event'
        description='Add new event to your list. Fill all the details below'
      />
      <Grid
        container
        spacing={{ xs: 5, lg: 2 }}
        direction={{ xs: "column-reverse", lg: "row" }}
      >
        <Grid item xs={12} lg={6}>
          <Box className='content new-event' sx={{ display: "flex" }}>
            <Box className='categories' sx={{ width: "100%" }}>
              <Box className='card-primary' sx={{ marginTop: "0 !important" }}>
                <form onSubmit={submitHandler}>
                  <Box className='head' sx={{ marginBottom: 1 }}>
                    <h3 className='title'>Basic Information</h3>
                  </Box>
                  <Box>
                    <FormControl fullWidth sx={{ marginY: 1 }}>
                      <InputLabel id='categories'>Select Event</InputLabel>
                      <Select labelId='events' id='events' label='Select Event'>
                        {events?.map((event) => (
                          <MenuItem
                            key={event._id}
                            value={event.name}
                            onClick={() => {
                              setEventId(event._id)
                            }}
                          >
                            {event.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {loadingEvents ? (
                      <LoadingBox>loading events...</LoadingBox>
                    ) : errorEvents ? (
                      <MessageBox variant='danger'>{errorEvents}</MessageBox>
                    ) : (
                      <></>
                    )}
                    <TextField
                      id='name'
                      label='Ticket Name'
                      variant='outlined'
                      value={name}
                      onChange={(e) => {
                        setTicketName(e.target.value)
                      }}
                      fullWidth
                      sx={{ marginBottom: 1 }}
                    />
                    <TextField
                      id='description'
                      label='Short event description'
                      multiline
                      rows={4}
                      fullWidth
                      sx={{ marginBottom: 1 }}
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value)
                      }}
                    />

                    <Box className='head' sx={{ marginTop: 2 }}>
                      <h3 className='title'>Ticket Pricing</h3>
                    </Box>
                    <FormControl fullWidth sx={{ marginY: 1 }}>
                      <InputLabel htmlFor='outlined-adornment-amount'>
                        Cost
                      </InputLabel>

                      <OutlinedInput
                        type='number'
                        min='0'
                        step='0.01'
                        id='outlined-adornment-amount'
                        startAdornment={
                          <InputAdornment position='start'>€</InputAdornment>
                        }
                        value={Number(price).toFixed(2)}
                        onChange={(e) => setTicketCost(e.target.value)}
                        label='Amount'
                      />
                    </FormControl>
                    <TextField
                      label='Allocations'
                      variant='outlined'
                      value={allocation}
                      onChange={(e) => {
                        setTicketAllocations(e.target.value)
                      }}
                      fullWidth
                      sx={{ marginBottom: 1 }}
                    />
                  </Box>

                  <Box sx={{ textAlign: "end", marginTop: 4 }}>
                    <Button
                      type='submit'
                      className='btn btn-main'
                      variant='contained'
                    >
                      Add Ticket
                    </Button>
                    {loadingCreate ? (
                      <LoadingBox>Adding new ticket...</LoadingBox>
                    ) : errorCreate ? (
                      <MessageBox variant='danger'>{errorCreate}</MessageBox>
                    ) : (
                      <></>
                    )}
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}></Grid>
      </Grid>
    </Box>
  )
}

export default AddTicket
