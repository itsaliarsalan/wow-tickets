import {
  STRIPECONNECT_ONBOARDING_REQUEST,
  STRIPECONNECT_ONBOARDING_SUCCESS,
  STRIPECONNECT_ONBOARDING_FAIL,
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
