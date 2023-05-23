import Axios from "axios"
import {
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
