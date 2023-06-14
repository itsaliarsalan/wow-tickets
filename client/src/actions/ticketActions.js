import Axios from "axios"
import {
  TICKET_DETAILS_REQUEST,
  TICKET_DETAILS_SUCCESS,
  TICKET_DETAILS_FAIL,
  TICKET_LIST_FAIL,
  TICKET_LIST_REQUEST,
  TICKET_LIST_SUCCESS,
  TICKET_ADD_REQUEST,
  TICKET_ADD_SUCCESS,
  TICKET_ADD_FAIL,
} from "../constants/ticketConstants"

export const listEvents = () => async (dispatch) => {
  dispatch({
    type: TICKET_LIST_REQUEST,
  })
  try {
    const { data } = await Axios.get("/api/tickets")
    dispatch({
      type: TICKET_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TICKET_LIST_FAIL,
      payload: error.message,
    })
  }
}

export const detailsEvent = (ticketId) => async (dispatch) => {
  dispatch({ type: TICKET_DETAILS_REQUEST, payload: ticketId })
  try {
    const { data } = await Axios.get(`/api/tickets/${ticketId}`)
    dispatch({ type: TICKET_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: TICKET_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createTicket =
  ({ name, description, price, allocation, userId, eventId, ticketStatus }) =>
  async (dispatch, getState) => {
    dispatch({ type: TICKET_ADD_REQUEST })
    const {
      userSignin: { userInfo },
    } = getState()
    try {
      const { data } = await Axios.post(
        "/api/tickets",
        {
          name,
          description,
          price,
          allocation,
          userId,
          eventId,
          ticketStatus,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      )
      dispatch({
        type: TICKET_ADD_SUCCESS,
        payload: data.ticket,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      dispatch({ type: TICKET_ADD_FAIL, payload: message })
    }
  }