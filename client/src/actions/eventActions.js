import Axios from "axios"
import {
  EVENT_DETAILS_REQUEST,
  EVENT_DETAILS_SUCCESS,
  EVENT_DETAILS_FAIL,
  EVENT_LIST_FAIL,
  EVENT_LIST_REQUEST,
  EVENT_LIST_SUCCESS,
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
      payload: error.message,
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
