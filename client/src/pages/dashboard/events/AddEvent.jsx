import {
  Box,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Switch,
  TextField,
} from "@mui/material"
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker"
import { toast } from "react-toastify"

import Axios from "axios"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { listVenues } from "../../../actions/venueActions"
import { createEvent } from "../../../actions/eventActions"
import DashboardHeader from "../../../components/layout/DashboardHeader"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { EVENT_ADD_RESET } from "../../../constants/eventConstants"
import LoadingBox from "../../../components/LoadingBox"
import MessageBox from "../../../components/MessageBox"

// Icons
import DateRangeIcon from "@mui/icons-material/DateRange"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import CropOriginalRoundedIcon from "@mui/icons-material/CropOriginalRounded"

function AddEvent() {
  const dispatch = useDispatch()

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const eventCreate = useSelector((state) => state.eventCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = eventCreate

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [cover, setCover] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [startTime, setStartTime] = useState(null)
  const [lastEntry, setLastEntry] = useState(null)
  const [endTime, setEndTime] = useState(null)
  // Control restrictions input
  const [restrictionsInput, setRestrictionsInput] = useState(false)

  const [userId, setUserId] = useState(userInfo._id)
  const [venueId, setVenueId] = useState(null)
  const eventStatus = true

  const venueList = useSelector((state) => state.venueList)
  const { loading: loadingVenues, error: errorVenues, venues } = venueList

  //   Upload States
  const [loadingUpload, setLoadingUpload] = useState(false)
  const [errorUpload, setErrorUpload] = useState("")

  const uploadFileHandler = async (e, isThumbnail) => {
    const file = e.target.files[0]
    const bodyFormData = new FormData()
    bodyFormData.append("image", file)
    setLoadingUpload(true)

    try {
      const { data } = await Axios.post("/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
      if (isThumbnail) {
        setThumbnail(data)
      } else {
        setCover(data)
      }
      setLoadingUpload(false)
    } catch (error) {
      setErrorUpload(error.message)
      setLoadingUpload(false)
    }
  }

  const createHandler = (e) => {
    e.preventDefault()
    dispatch(
      createEvent({
        name,
        description,
        category,
        cover,
        thumbnail,
        startDate,
        endDate,
        startTime,
        lastEntry,
        endTime,
        restrictionsInput,
        userId,
        venueId,
        eventStatus,
      })
    )
  }

  useEffect(() => {
    if (userInfo) {
      setUserId(userInfo._id)
    }
    if (successCreate) {
      toast.success("Event Added Successfully!")
      dispatch({ type: EVENT_ADD_RESET })
      setName("")
      setDescription("")
      setCategory("")
      setThumbnail(null)
      setCover(null)
      setStartDate(null)
      setEndDate(null)
      setStartTime(null)
      setLastEntry(null)
      setEndTime(null)
      setVenueId(null)
    }
    dispatch(listVenues())
  }, [dispatch, successCreate, userInfo])

  // Active venue for display preview
  const activeVenue = venues?.find((venue) => venue._id === venueId)

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
                <form
                  onSubmit={(e) => {
                    createHandler(e)
                  }}
                >
                  <Box className='head' sx={{ marginBottom: 2 }}>
                    <h3 className='title'>Basic Information</h3>
                  </Box>
                  <Box>
                    <TextField
                      id='name'
                      label='Event Name'
                      variant='outlined'
                      onChange={(e) => {
                        setName(e.target.value)
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
                      sx={{ marginTop: 1 }}
                      onChange={(e) => {
                        setDescription(e.target.value)
                      }}
                    />

                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Box
                        className='drop-files'
                        sx={{ marginY: 2, width: "100%", borderRadius: "3px" }}
                      >
                        <div className='drop-wrapper'>
                          <Box
                            component='label'
                            htmlFor='imageFile'
                            sx={{ display: "flex" }}
                          >
                            <CropOriginalRoundedIcon sx={{ fontSize: 40 }} />
                            <div className='meta'>
                              <h5>Thumbnail Image</h5>
                              <input
                                type='file'
                                id='imageFile'
                                onChange={(e) => {
                                  uploadFileHandler(e, true)
                                }}
                                style={{ width: "100%" }}
                              />
                            </div>
                          </Box>
                        </div>
                        {loadingUpload ? <></> : errorUpload ? <></> : <></>}
                      </Box>
                      <Box
                        className='drop-files'
                        sx={{ marginY: 2, width: "100%", borderRadius: "3px" }}
                      >
                        <div className='drop-wrapper'>
                          <Box
                            component='label'
                            htmlFor='imageFile'
                            sx={{ display: "flex" }}
                          >
                            <CropOriginalRoundedIcon sx={{ fontSize: 40 }} />
                            <div className='meta'>
                              <h5>Cover Image</h5>
                              <input
                                type='file'
                                id='imageFile'
                                onChange={(e) => {
                                  uploadFileHandler(e, false)
                                }}
                                style={{ width: "100%" }}
                              />
                            </div>
                          </Box>
                        </div>
                      </Box>
                    </Box>

                    <FormControl fullWidth>
                      <InputLabel id='categories'>Select Category</InputLabel>
                      <Select
                        labelId='categories'
                        id='category'
                        label='Select Category'
                      >
                        <MenuItem
                          value='Club'
                          onClick={() => {
                            setCategory("Club")
                          }}
                        >
                          Club
                        </MenuItem>
                        <MenuItem
                          value='Comedy'
                          onClick={() => {
                            setCategory("Comedy")
                          }}
                        >
                          Comedy
                        </MenuItem>
                        <MenuItem
                          value='Bar/Pub'
                          onClick={() => {
                            setCategory("Bar/Pub")
                          }}
                        >
                          Bar/Pub
                        </MenuItem>
                        <MenuItem
                          value='Awards'
                          onClick={() => {
                            setCategory("Awards")
                          }}
                        >
                          Awards
                        </MenuItem>
                      </Select>
                    </FormControl>

                    {/* Venue and Date Information */}

                    <Box className='head' sx={{ marginTop: 3 }}>
                      <h3 className='title'>Venue & Date</h3>
                    </Box>
                    <FormControl fullWidth sx={{ marginY: 2 }}>
                      <InputLabel id='venues'>Select Venue</InputLabel>
                      <Select labelId='venues' id='venues' label='Select Venue'>
                        {venues?.map((venue) => (
                          <MenuItem
                            key={venue._id}
                            value={venue.name}
                            onClick={() => {
                              setVenueId(venue._id)
                            }}
                          >
                            {venue.name}
                          </MenuItem>
                        ))}
                      </Select>
                      {loadingVenues ? (
                        <span>loading venues...</span>
                      ) : errorVenues ? (
                        <span>errorVenues</span>
                      ) : (
                        <></>
                      )}
                    </FormControl>

                    <Stack
                      spacing={2}
                      direction={{ xs: "column", md: "column" }}
                    >
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <DatePicker
                          label='Start Date'
                          views={["year", "month", "day"]}
                          sx={{ width: "100%" }}
                          onChange={(date) => {
                            setStartDate(date)
                          }}
                        />

                        <DatePicker
                          label='End Date'
                          views={["year", "month", "day"]}
                          sx={{ width: "100%" }}
                          onChange={(date) => {
                            setEndDate(date)
                          }}
                        />
                      </Box>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <MobileTimePicker
                          sx={{ width: "100%" }}
                          label='Start Time'
                          clearable
                          ampm={false}
                          value={startTime}
                          onChange={(time) => {
                            let t = new Date(time)
                            setStartTime(t.toLocaleTimeString())
                          }}
                        />

                        <MobileTimePicker
                          sx={{ width: "100%" }}
                          label='End Time'
                          clearable
                          ampm={false}
                          value={endTime}
                          onChange={(time) => {
                            let t = new Date(time)
                            setEndTime(t.toLocaleTimeString())
                          }}
                        />
                      </Box>
                      <MobileTimePicker
                        label='Last Entry'
                        clearable
                        ampm={false}
                        value={lastEntry}
                        onChange={(time) => {
                          let t = new Date(time)
                          setLastEntry(t.toLocaleTimeString())
                        }}
                      />
                    </Stack>
                    {/* Venue and Date Information */}
                    <Box
                      className='head'
                      sx={{
                        marginTop: 3,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h3 className='title'>Age 18+ Restrictions</h3>
                      <Switch
                        checked={restrictionsInput}
                        onChange={() => {
                          setRestrictionsInput(!restrictionsInput)
                        }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ textAlign: "end", marginTop: 5 }}>
                    <button type='submit' className='btn btn-main'>
                      Add Event
                    </button>
                    {loadingCreate ? (
                      <LoadingBox>Adding event...</LoadingBox>
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
        <Grid item xs={12} lg={6}>
          <Box className='event-preview'>
            {/* Banner and Image */}
            <Box sx={{ marginBottom: -12 }}>
              <Box
                className='cover-image'
                sx={{
                  maxHeight: 200,
                  overflow: "hidden",
                  marginBottom: 4,
                  borderRadius: 4,
                }}
              >
                <img
                  src={
                    cover ||
                    "https://agendabrussels.imgix.net/004a2b71108438b08b4c2d39af2e4173770c6408.jpg"
                  }
                  alt=''
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Paper
                sx={{
                  width: 120,
                  height: 120,
                  position: "relative",
                  bottom: 120,
                  left: 20,
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <img
                  className='event-image'
                  src={
                    thumbnail ||
                    "https://www.meydanfz.ae/wp-content/uploads/2021/10/Events.png"
                  }
                  alt=''
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Paper>
            </Box>
            {/* Basic Info */}
            <Box>
              <h2 style={{ marginBottom: "4px" }}>
                {name || "Event name here"}
              </h2>
              <p style={{ color: "var(--secondary-typo-color)" }}>
                {description ||
                  "Join us for an exciting and engaging event that will leave you inspired and motivated. This event brings together industry experts, thought leaders, and innovators to share their knowledge and experiences. Discover the latest trends, gain valuable insights, and network with like-minded individuals. ..."}
              </p>
            </Box>
            <hr />
            {/* Meta Info */}
            <Box container sx={{ marginTop: 2 }}>
              {/* Venue */}
              <Box
                sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
              >
                <LocationOnIcon color='secondary' />
                {activeVenue ? activeVenue.name : "No Venue Selected"}
              </Box>
              {/* Date information */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  marginBottom: 1,
                }}
              >
                {/* Start date */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  <DateRangeIcon color='secondary' />
                  Start:{" "}
                  {startDate
                    ? new Date(startDate).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "No date provided"}
                </Box>

                {/* End date */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                  <DateRangeIcon color='secondary' />
                  End:{" "}
                  {endDate
                    ? new Date(endDate).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "No date provided"}
                </Box>
              </Box>
              {/* Category */}
              {category ? (
                <Chip label={"Category - " + category} variant='outlined' />
              ) : (
                <span></span>
              )}
              {restrictionsInput ? (
                <Chip label='Age 18+' variant='outlined' />
              ) : (
                <></>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AddEvent
