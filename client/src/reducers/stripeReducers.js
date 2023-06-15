import {
  STRIPECONNECT_CREATE_FAIL,
  STRIPECONNECT_CREATE_REQUEST,
  STRIPECONNECT_CREATE_RESET,
  STRIPECONNECT_CREATE_SUCCESS,
} from "../constants/stripeConstants"

export const stripeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case STRIPECONNECT_CREATE_REQUEST:
      return { loading: true }
    case STRIPECONNECT_CREATE_SUCCESS:
      return { loading: false, success: true, stripe_acc_id: action.payload }
    case STRIPECONNECT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case STRIPECONNECT_CREATE_RESET:
      return {}
    default:
      return state
  }
}
