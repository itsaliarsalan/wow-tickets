import './Style.css'
import { useDispatch, useSelector } from 'react-redux'
import { detailsEvent } from '../actions/eventActions'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Paper,
  Typography,
  CardContent,
  Stack,
} from "@mui/material"
import { detailsVenue } from "../actions/venueActions"
import DateRangeIcon from "@mui/icons-material/DateRange"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { listTicketsByEvent } from "../actions/ticketActions"

function SingleEvent(props) {
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
    <>
      {loading ? (
        <div className='text-center mb-3'>fetching event details...</div>
      ) : error ? (
        <div className='text-center mb-3'>
          error occured while fetching event's details
        </div>
      ) : (
        <Container sx={{ marginY: 4 }} maxWidth='md'>
          {/* Banner */}
          <Box sx={{ position: "relative", marginBottom: -8 }}>
            {/* Cover Image */}
            <Paper
              sx={{
                height: "20rem",
                width: "100%",
                overflow: "hidden",
                borderRadius: 4,
                position: "relative",
                "& img": { width: "100%", height: "100%", objectFit: "cover" },
              }}
            >
              <img src={event.cover} alt='event banner' />
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
              <img src={event.thumbnail} alt='event image' />
            </Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              overflow: "hidden",
            }}
          >
            <h2>{event.name}</h2>
            {/* Meta data */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  maxWidth: { xs: 120, md: "inherit" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    gap: "2px",
                    animation: {
                      xs: "textLeftToRight 3s linear infinite alternate",
                      md: "inherit",
                    },
                  }}
                >
                  <LocationOnIcon color='secondary' sx={{ marginTop: "3px" }} />
                  {event.venue.address}
                  <br></br>
                  {event.venue.city}
                  <br></br>
                  {event.venue.state}
                  <br></br>
                  {event.venue.country}
                </Box>
              </Box>

              <Box
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  maxWidth: { xs: 120, md: "inherit" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    gap: "2px",
                    animation: {
                      xs: "textLeftToRight 3s linear infinite alternate",
                      md: "inherit",
                    },
                  }}
                >
                  <DateRangeIcon color='secondary' sx={{ marginTop: "3px" }} />
                  {event.startDate || "20 June, 2023"}
                </Box>
              </Box>
              <Box
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  maxWidth: { xs: 120, md: "inherit" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    gap: "2px",
                    animation: {
                      xs: "textLeftToRight 3s linear infinite alternate",
                      md: "inherit",
                    },
                  }}
                >
                  <DateRangeIcon color='secondary' sx={{ marginTop: "3px" }} />
                  {event.endDate || "23 June, 2023"}
                </Box>
              </Box>
            </Box>
          </Box>
          <p style={{ color: "var(--secondary-typo-color)", marginTop: 14 }}>
            {event.description}
          </p>

          <Typography variant='h4' style={{ marginTop: 32, marginBottom: 24 }}>
            Available Tickets
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            {tickets.map((ticket) => (
              <Card sx={{ width: { xs: "100%", sm: 250 } }}>
                <CardContent>
                  <Stack justifyContent='space-between' direction='row'>
                    <Typography gutterBottom variant='h5' component='div'>
                      {ticket.name}
                    </Typography>
                    <Typography gutterBottom variant='h5' component='div'>
                      {ticket.price}$
                    </Typography>
                  </Stack>
                  <Typography variant='body2' color='text.secondary'>
                    {ticket.description}
                  </Typography>
                  <Button variant='contained' fullWidth sx={{ marginTop: 2 }}>
                    Buy Now
                  </Button>
                  <Typography
                    variant='subtitle2'
                    sx={{ marginTop: 1 }}
                    color='text.secondary'
                  >
                    {/* 400 sold out already out of 500. */}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Container>
      )}
    </>
  )
}

export default SingleEvent
