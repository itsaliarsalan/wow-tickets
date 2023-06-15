import Axios from "axios"
import {
  STRIPECONNECT_ONBOARDING_REQUEST,
  STRIPECONNECT_ONBOARDING_SUCCESS,
  STRIPECONNECT_ONBOARDING_FAIL,
} from "../constants/stripeConstants"

export const stripeOnboarding = (stripe_acc_id) => async (dispatch) => {
  dispatch({
    type: STRIPECONNECT_ONBOARDING_REQUEST,
    payload: { stripe_acc_id },
  })
  try {
    const { url } = await Axios.post("/api/stripe/onboard", { stripe_acc_id })
    dispatch({ type: STRIPECONNECT_ONBOARDING_SUCCESS, payload: url })
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
