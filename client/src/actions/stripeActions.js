import Axios from "axios"
import {
  STRIPECONNECT_ONBOARDING_REQUEST,
  STRIPECONNECT_ONBOARDING_SUCCESS,
  STRIPECONNECT_ONBOARDING_FAIL,
  STRIPE_CLIENT_SECRET_REQUEST,
  STRIPE_CLIENT_SECRET_FAIL,
  STRIPE_CLIENT_SECRET_SUCCESS,
} from "../constants/stripeConstants"

export const stripeOnboarding = (stripe_acc_id) => async (dispatch) => {
  dispatch({
    type: STRIPECONNECT_ONBOARDING_REQUEST,
    payload: { stripe_acc_id },
  })
  try {
    const url = await Axios.post("/api/stripe/onboard", { stripe_acc_id })
    dispatch({ type: STRIPECONNECT_ONBOARDING_SUCCESS, payload: url })
    console.log(url)
  } catch (error) {
    dispatch({
      type: STRIPECONNECT_ONBOARDING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createStripeClientSecret =
  (price, qty, stripe_acc_id) => async (dispatch) => {
    dispatch({
      type: STRIPE_CLIENT_SECRET_REQUEST,
      payload: { price, qty, stripe_acc_id },
    })

    try {
      const response = await Axios.post("/api/stripe/secret", {
        price,
        qty,
        stripe_acc_id,
      })
      const { client_secret: clientSecret } = await response.json()

      dispatch({ type: STRIPE_CLIENT_SECRET_SUCCESS, payload: clientSecret })
    } catch (error) {
      dispatch({
        type: STRIPE_CLIENT_SECRET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
  