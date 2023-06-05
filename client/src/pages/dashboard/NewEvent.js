import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material"
import dayjs from "dayjs"
import Axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import LoadingBox from "../../components/LoadingBox"
import MessageBox from "../../components/MessageBox"
import { useDispatch, useSelector } from "react-redux"
import { listVenues } from "../../actions/venueActions"
import { createEvent } from "../../actions/eventActions"
import DashboardHeader from "../../components/DashboardHeader"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import { listCategories } from "../../actions/categoryActions"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { EVENT_ADD_RESET } from "../../constants/eventConstants"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"

function NewEvent() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const eventCreate = useSelector((state) => state.eventCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    event: createdEvent,
  } = eventCreate

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [cover, setCover] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [website, setWebsite] = useState("")
  const [restrictions, setRestrictions] = useState([])
  const [socialLinks, setSocialLinks] = useState([])
  const [price, setPrice] = useState(0)
  const [categoryId, setCategoryId] = useState(null)
  const [venueId, setVenueId] = useState(null)
  const [eventStatus, setEventStatus] = useState(true)

  const [userId, setUserId] = useState(null)
  const categoryList = useSelector((state) => state.categoryList)
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = categoryList

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
    setEventStatus(true)
    dispatch(
      createEvent({
        name,
        description,
        thumbnail,
        cover,
        startDate,
        endDate,
        website,
        restrictions,
        socialLinks,
        price,
        userId,
        categoryId,
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
      dispatch({ type: EVENT_ADD_RESET })
      navigate("/dashboard/manage-events")
    }
    dispatch(listCategories())
    dispatch(listVenues())
  }, [dispatch, successCreate])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ marginTop: "30px", marginBottom: "10px" }}>
        <DashboardHeader
          title='Create a new Event'
          links={[
            { name: "Home", route: "/" },
            { name: "New Events", route: "/" },
          ]}
        />
        <Box className='content new-event' sx={{ display: "flex" }}>
          <div className='categories'>
            <div className='card-primary'>
              <div className='head'>
                <h3 className='title'>Lets get your event set up</h3>
                <p className='description'>
                  We'd like to help you tailor your event - please choose
                  options accordingly.
                </p>
              </div>
              <section>
                <form
                  onSubmit={(e) => {
                    createHandler(e)
                  }}
                >
                  <Box>
                    <TextField
                      id='name'
                      label='Event name'
                      variant='outlined'
                      onChange={(e) => {
                        setName(e.target.value)
                      }}
                      fullWidth
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
                    <Box style={{ marginTop: "10px" }}>
                      <FormControl fullWidth>
                        <InputLabel id='categories'>Select Category</InputLabel>
                        <Select
                          labelId='categories'
                          id='categories'
                          label='Select Category'
                        >
                          {categories?.map((category) => (
                            <MenuItem
                              key={category._id}
                              value={category.name}
                              onClick={() => {
                                setCategoryId(category._id)
                              }}
                            >
                              {category.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                    <Box style={{ marginTop: "10px" }}>
                      <FormControl fullWidth>
                        <InputLabel id='categories'>Select Venue</InputLabel>
                        <Select
                          labelId='venues'
                          id='venues'
                          label='Select Venue'
                        >
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
                      </FormControl>
                    </Box>
                    <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
                      <DateCalendar
                        label='Start Date'
                        defaultValue={dayjs("2023-06-1")}
                        views={["year", "month", "day"]}
                        sx={{ width: "100%" }}
                        onChange={(date) => {
                          setStartDate(date)
                        }}
                      />
                      <DateCalendar
                        label='End Date'
                        views={["year", "month", "day"]}
                        defaultValue={dayjs("2023-06-1")}
                        sx={{ width: "100%" }}
                        onChange={(date) => {
                          setEndDate(date)
                        }}
                      />
                    </Stack>
                    {/*  */}
                    <div className='drop-files'>
                      <div className='drop-wrapper'>
                        <input
                          type='file'
                          id='imageFile'
                          label='Choose Thumbnail'
                          onChange={(e) => {
                            uploadFileHandler(e, true)
                          }}
                        ></input>
                        {loadingUpload && <LoadingBox></LoadingBox>}
                        {errorUpload && (
                          <MessageBox variant='danger'>
                            {errorUpload}
                          </MessageBox>
                        )}

                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                        >
                          <path d='M19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h7a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21ZM22.71,4.29l-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L18,4.41V10a1,1,0,0,0,2,0V4.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,22.71,4.29Z' />
                        </svg>
                        <div className='meta'>
                          <h5>Thumbnail Image</h5>
                          <p>Drop image here, or click to select file</p>
                        </div>
                      </div>
                    </div>
                    <div className='drop-files'>
                      <div className='drop-wrapper'>
                        <input
                          type='file'
                          id='imageFile'
                          label='Choose Cover'
                          onChange={(e) => {
                            uploadFileHandler(e, false)
                          }}
                        ></input>
                        {loadingUpload && <LoadingBox></LoadingBox>}
                        {errorUpload && (
                          <MessageBox variant='danger'>
                            {errorUpload}
                          </MessageBox>
                        )}

                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                        >
                          <path d='M19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h7a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21ZM22.71,4.29l-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L18,4.41V10a1,1,0,0,0,2,0V4.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,22.71,4.29Z' />
                        </svg>
                        <div className='meta'>
                          <h5>Cover Image</h5>
                          <p>Drop image here, or click to select file</p>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <TextField
                      id='website'
                      label='Event Website'
                      variant='outlined'
                      fullWidth
                      value={website}
                      onChange={(e) => {
                        setWebsite(e.target.value)
                      }}
                    />
                    <TextField
                      id='social'
                      label='Social Link'
                      variant='outlined'
                      fullWidth
                      value={socialLinks}
                      onChange={(e) => {
                        setSocialLinks([e.target.value])
                      }}
                    />
                    <TextField
                      id='restrictions'
                      label='Restrictions'
                      variant='outlined'
                      fullWidth
                      value={restrictions}
                      onChange={(e) => {
                        setRestrictions([e.target.value])
                      }}
                    />
                    <TextField
                      id='price'
                      label='Price'
                      variant='outlined'
                      type='number'
                      fullWidth
                      value={price}
                      onChange={(e) => {
                        setPrice(e.target.value)
                      }}
                    />
                  </Box>
                  <button type='submit' className='btn btn-main'>
                    Add Event
                  </button>
                </form>
              </section>
            </div>
          </div>
        </Box>
      </Box>
    </LocalizationProvider>
  )
}

export default NewEvent
