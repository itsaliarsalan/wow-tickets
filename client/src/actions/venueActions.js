import Axios from "axios"
import {
  VENUE_LIST_REQUEST,
  VENUE_LIST_SUCCESS,
  VENUE_LIST_FAIL,
  VENUE_ADD_REQUEST,
  VENUE_ADD_SUCCESS,
  VENUE_ADD_FAIL,
  VENUE_UPDATE_REQUEST,
  VENUE_UPDATE_SUCCESS,
  VENUE_UPDATE_FAIL,
  VENUE_DELETE_REQUEST,
  VENUE_DELETE_SUCCESS,
  VENUE_DELETE_FAIL,
  VENUE_DETAILS_REQUEST,
  VENUE_DETAILS_SUCCESS,
  VENUE_DETAILS_FAIL,
} from "../constants/venueConstants"

export const listVenues =
  ({ seller = "" }) =>
  async (dispatch) => {
    dispatch({
      type: VENUE_LIST_REQUEST,
    })
    try {
      const { data } = await Axios.get(`/api/venues?seller=${seller}`)
      dispatch({
        type: VENUE_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: VENUE_LIST_FAIL,
        payload: error.message,
      })
    }
  }

export const createVenue =
  ({
    name,
    capacity,
    contact,
    address,
    city,
    state,
    postal,
    country,
    userId,
  }) =>
  async (dispatch, getState) => {
    dispatch({ type: VENUE_ADD_REQUEST })
    const {
      userSignin: { userInfo },
    } = getState()

    try {
      const { data } = await Axios.post(
        "/api/venues",
        {
          name,
          capacity,
          contact,
          address,
          city,
          state,
          postal,
          country,
          userId,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      )
      dispatch({
        type: VENUE_ADD_SUCCESS,
        payload: data.venue,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      dispatch({ type: VENUE_ADD_FAIL, payload: message })
    }
  }

export const updateVenue = (venue) => async (dispatch, getState) => {
  dispatch({ type: VENUE_UPDATE_REQUEST, payload: venue })

  const {
    userSignin: { userInfo },
  } = getState()

  try {
    const { data } = await Axios.put(`/api/venues/${venue._id}`, venue, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    })
    dispatch({ type: VENUE_UPDATE_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: VENUE_UPDATE_FAIL, error: message })
  }
}

export const deleteVenue = (venueId) => async (dispatch, getState) => {
  dispatch({ type: VENUE_DELETE_REQUEST, payload: venueId })

  const {
    userSignin: { userInfo },
  } = getState()

  try {
    const { data } = await Axios.delete(`/api/venues/${venueId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    })
    console.log("Venue Removed ::: ", data)
    dispatch({ type: VENUE_DELETE_SUCCESS })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: VENUE_DELETE_FAIL, payload: message })
  }
}

export const detailsVenue = (venueId) => async (dispatch) => {
  dispatch({ type: VENUE_DETAILS_REQUEST, payload: venueId })
  try {
    const { data } = await Axios.get(`/api/venues/${venueId}`)
    dispatch({ type: VENUE_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: VENUE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
