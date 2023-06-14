import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { Box, Grid, TextField } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import LoadingBox from "../../../components/LoadingBox"
import MessageBox from "../../../components/MessageBox"
import { createVenue } from "../../../actions/venueActions"
import { VENUE_ADD_RESET } from "../../../constants/venueConstants"
import DashboardHeader from "../../../components/layout/DashboardHeader"

export default function AddVenue() {
  const [name, setName] = useState("")
  const [capacity, setCapacity] = useState()
  const [contact, setContact] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [postal, setPostal] = useState("")
  const [country, setCountry] = useState("")

  const eventCreate = useSelector((state) => state.eventCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    //event: createdEvent,
  } = eventCreate

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = () => {
    dispatch(
      createVenue({
        name,
        capacity,
        contact,
        address,
        city,
        state,
        postal,
        country,
      })
    )
  }
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: VENUE_ADD_RESET })
      navigate("/venues/manage")
    }
  }, [dispatch, navigate, successCreate])

  return (
    <>
      <DashboardHeader
        title='Add Venue'
        links={[
          { name: "Home", route: "/dashboard" },
          { name: "Add Venue", current: true },
        ]}
      />
      <Grid container>
        <Grid item md={6}>
          <Box className='card-primary' sx={{ width: "100%" }}>
            <form onSubmit={submitHandler}>
              <TextField
                required
                id='venueName'
                label='Venue Name'
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                sx={{ marginY: 1 }}
              />
              <TextField
                id='capacity'
                label='Capacity'
                type='number'
                fullWidth
                defaultValue={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                sx={{ marginY: 1 }}
              />
              <TextField
                id='contact'
                label='Contact No.'
                fullWidth
                defaultValue={contact}
                onChange={(e) => setContact(e.target.value)}
                sx={{ marginY: 1 }}
              />
              <TextField
                id='address'
                label='Address'
                fullWidth
                defaultValue={address}
                onChange={(e) => setAddress(e.target.value)}
                sx={{ marginY: 1 }}
              />
              <TextField
                id='city'
                label='City / Town'
                fullWidth
                defaultValue={city}
                onChange={(e) => setCity(e.target.value)}
                sx={{ marginY: 1 }}
              />
              <TextField
                id='state'
                label='State / Province'
                fullWidth
                defaultValue={state}
                onChange={(e) => setState(e.target.value)}
                sx={{ marginY: 1 }}
              />
              <TextField
                id='postal'
                label='Postal / Zip Code'
                fullWidth
                defaultValue={postal}
                onChange={(e) => setPostal(e.target.value)}
                sx={{ marginY: 1 }}
              />
              <TextField
                id='country'
                label='Country'
                fullWidth
                defaultValue={country}
                onChange={(e) => setCountry(e.target.value)}
                sx={{ marginY: 1 }}
              />
              <Box sx={{ textAlign: "end", mt: 2 }}>
                <button className='btn btn-main' type='submit'>
                  Add Venue
                </button>
              </Box>
            </form>
            {loadingCreate ? (
              <LoadingBox>Adding new event...</LoadingBox>
            ) : errorCreate ? (
              <MessageBox varient='danger'>{errorCreate}</MessageBox>
            ) : (
              <span></span>
            )}
          </Box>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </>
  )
}
