import Axios from "axios"
import {
  EVENT_DETAILS_REQUEST,
  EVENT_DETAILS_SUCCESS,
  EVENT_DETAILS_FAIL,
  EVENT_LIST_FAIL,
  EVENT_LIST_REQUEST,
  EVENT_LIST_SUCCESS,
  EVENT_ADD_REQUEST,
  EVENT_ADD_SUCCESS,
  EVENT_ADD_FAIL,
  EVENT_UPDATE_REQUEST,
  EVENT_UPDATE_SUCCESS,
  EVENT_UPDATE_FAIL,
  EVENT_DELETE_REQUEST,
  EVENT_DELETE_SUCCESS,
  EVENT_DELETE_FAIL,
} from "../constants/eventConstants"

export const listEvents = () => async (dispatch) => {
  dispatch({
    type: EVENT_LIST_REQUEST,
  })
  try {
    const { data } = await Axios.get("/api/events")
    dispatch({
      type: EVENT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: EVENT_LIST_FAIL,
      payload: error,
    })
  }
}

export const detailsEvent = (eventId) => async (dispatch) => {
  dispatch({ type: EVENT_DETAILS_REQUEST, payload: eventId })
  try {
    const { data } = await Axios.get(`/api/events/${eventId}`)
    dispatch({ type: EVENT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: EVENT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createEvent =
  ({
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
    restrictions,
    userId,
    venueId,
    eventStatus,
  }) =>
  async (dispatch, getState) => {
    dispatch({ type: EVENT_ADD_REQUEST })
    const {
      userSignin: { userInfo },
    } = getState()
    try {
      const { data } = await Axios.post(
        "/api/events",
        {
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
          restrictions,
          userId,
          venueId,
          eventStatus,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      )
      dispatch({
        type: EVENT_ADD_SUCCESS,
        payload: data.event,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      dispatch({ type: EVENT_ADD_FAIL, payload: message })
    }
  }

export const deleteEvent = (eventId) => async (dispatch, getState) => {
  dispatch({ type: EVENT_DELETE_REQUEST, payload: eventId })

  const {
    userSignin: { userInfo },
  } = getState()

  try {
    const { data } = Axios.delete(`/api/events/${eventId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    })
    dispatch({ type: EVENT_DELETE_SUCCESS })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: EVENT_DELETE_FAIL, payload: message })
  }
}
 