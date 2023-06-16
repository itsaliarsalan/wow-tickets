import {
  STRIPECONNECT_ONBOARDING_REQUEST,
  STRIPECONNECT_ONBOARDING_SUCCESS,
  STRIPECONNECT_ONBOARDING_FAIL,
  STRIPE_CLIENT_SECRET_REQUEST,
  STRIPE_CLIENT_SECRET_SUCCESS,
  STRIPE_CLIENT_SECRET_FAIL,
} from "../constants/stripeConstants"

export const stripeConnectOnboardingReducer = (state = {}, action) => {
  switch (action.type) {
    case STRIPECONNECT_ONBOARDING_REQUEST:
      return { loading: true }
    case STRIPECONNECT_ONBOARDING_SUCCESS:
      return { loading: false, success: true, url: action.payload }
    case STRIPECONNECT_ONBOARDING_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const stripCheckoutSessionReducer = (state = {}, action) => {
  switch (action.type) {
    case STRIPE_CLIENT_SECRET_REQUEST:
      return { loading: true }
    case STRIPE_CLIENT_SECRET_SUCCESS:
      return { loading: false, success: true, session: action.payload }
    case STRIPE_CLIENT_SECRET_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}