import "./Style.css"
import {
  Box,
  Chip,
  Container,
  Paper,
  Typography,
  Stack,
  Avatar,
  Grid,
} from "@mui/material"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { detailsEvent } from "../actions/eventActions"
import TicketWidget from "../components/cards/TicketWidget"
import { listTicketsByEvent } from "../actions/ticketActions"
export default function SingleEvent(props) {
  const dispatch = useDispatch()

  const params = useParams()
  const eventId = params.id

  const eventDetails = useSelector((state) => state.eventDetails)
  const { loading, error, event } = eventDetails

  const ticketListByEvent = useSelector((state) => state.ticketListByEvent)
  const {
    loading: loadingTicketList,
    error: errorTicketList,
    tickets,
  } = ticketListByEvent

  useEffect(() => {
    dispatch(detailsEvent(eventId))
    dispatch(listTicketsByEvent(eventId))
  }, [dispatch, eventId])

  return (
    <Container sx={{ marginY: 4 }} maxWidth='md'>
      {loading ? (
        <span>Loading event....</span>
      ) : error ? (
        <span>{error}</span>
      ) : (
        <>
          <Box sx={{ position: "relative", marginBottom: -8 }}>
            <Paper
              sx={{
                height: "20rem",
                width: "100%",
                overflow: "hidden",
                borderRadius: 4,
                position: "relative",
                "& img": {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
              }}
            >
              <img src={event?.cover} alt='event banner' />
            </Paper>
            {/* Chips */}
            <Box
              sx={{
                position: "absolute",
                top: { xs: 20, md: "inherit" },
                bottom: { xs: 0, md: 170 },
                right: 50,
              }}
            >
              <Chip color='primary' label='Film and Festival' />{" "}
              <Chip color='primary' label='18+ Only' />
            </Box>
            {/* Event Image */}
            <Paper
              sx={{
                width: 150,
                height: 150,
                overflow: "hidden",
                borderRadius: 3,
                position: "relative",
                bottom: 80,
                left: { xs: 0, md: 50 },
                right: { xs: 0, md: "inherit" },
                marginX: { xs: "auto", md: "inherit" },
                "& img": {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
              }}
            >
              <img src={event?.thumbnail} alt='event' />
            </Paper>
          </Box>
          <Box sx={{ textAlign: { xs: "center", sm: "start" } }}>
            <Typography
              variant='subtitle1'
              sx={{
                textTransform: "uppercase",
                fontWeight: 600,
              }}
              color='primary'
            >
              Start Date: {event.startDate} | End Date: {event.endDate}
            </Typography>
            <Typography variant='h2' sx={{ fontWeight: 500 }}>
              {event?.name}
            </Typography>

            {/* Address details */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: { xs: "center", sm: "start" },
                "& p": {
                  fontSize: { xs: "16px", md: "18px" },
                  color: "#626A73",
                },
              }}
            >
              <p>{event?.venue?.address}</p>
              <p>{event?.venue?.city}</p>
              <p>{event?.venue?.state}</p>
              <p>{event?.venue?.country}</p>
            </Box>
          </Box>
          <hr style={{ marginTop: "1rem" }} />

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <Paper
              sx={{
                background: "#fff",
                padding: 3,
                textAlign: { xs: "center", md: "start" },
              }}
            >
              <Typography variant='h5' gutterBottom>
                Details
              </Typography>
              <Typography variant='body' color='text.secondary'>
                {event?.description}
              </Typography>
            </Paper>
            <Paper
              sx={{
                background: "#fff",
                padding: 3,
                minWidth: 280,
                textAlign: "center",
              }}
            >
              <Typography variant='h5' gutterBottom>
                About Host
              </Typography>
              <Box>
                <Avatar sx={{ marginX: "auto", width: 56, height: 56 }}>
                  N
                </Avatar>
                <Box>
                  <Typography>{event?.user?.name}</Typography>
                  <Typography>{event?.user?.email}</Typography>
                </Box>
              </Box>
            </Paper>
          </Stack>

          <Typography variant='h4' style={{ marginTop: 32, marginBottom: 24 }}>
            Available Tickets
          </Typography>
          <Grid spacing={2} container sx={{ marginBottom: 8 }}>
            {loadingTicketList ? (
              <span>Loading Tickets</span>
            ) : errorTicketList ? (
              <span>{errorTicketList}</span>
            ) : (
              tickets?.map((ticket) => (
                <Grid item xs={12} sm={4} key={ticket?._id}>
                  <TicketWidget props={ticket} />
                </Grid>
              ))
            )}
          </Grid>
        </>
      )}
    </Container>
  )
}
