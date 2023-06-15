import Axios from "axios"
import {
  STRIPECONNECT_CREATE_REQUEST,
  STRIPECONNECT_CREATE_SUCCESS,
  STRIPECONNECT_CREATE_FAIL,
} from "../constants/stripeConstants"

export const createStripeConnectedAccount =
  ({ email }) =>
  async (dispatch) => {
    dispatch({ type: STRIPECONNECT_CREATE_REQUEST })
    try {
      const stripe_acc_id = await Axios.post("/api/stripe/create", {
        email,
      })
      dispatch({
        type: STRIPECONNECT_CREATE_SUCCESS,
        payload: stripe_acc_id,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      dispatch({ type: STRIPECONNECT_CREATE_FAIL, payload: message })
    }
  }
