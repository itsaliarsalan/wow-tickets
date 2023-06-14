import {
  VENUE_LIST_REQUEST,
  VENUE_LIST_SUCCESS,
  VENUE_LIST_FAIL,
  VENUE_ADD_REQUEST,
  VENUE_ADD_SUCCESS,
  VENUE_ADD_FAIL,
  VENUE_UPDATE_REQUEST,
  VENUE_UPDATE_SUCCESS,
  VENUE_UPDATE_FAIL,
  VENUE_UPDATE_RESET,
  VENUE_DELETE_REQUEST,
  VENUE_DELETE_SUCCESS,
  VENUE_DELETE_FAIL,
  VENUE_DELETE_RESET,
  VENUE_ADD_RESET,
} from "../constants/venueConstants"

export const venueListReducer = (
  state = { loading: true, venues: [] },
  action
) => {
  switch (action.type) {
    case VENUE_LIST_REQUEST:
      return { loading: true }
    case VENUE_LIST_SUCCESS:
      return { loading: false, venues: action.payload }
    case VENUE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const venueCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case VENUE_ADD_REQUEST:
      return { loading: true }
    case VENUE_ADD_SUCCESS:
      return { loading: false, success: true, venue: action.payload }
    case VENUE_ADD_FAIL:
      return { loading: false, error: action.payload }
    case VENUE_ADD_RESET:
      return {}
    default:
      return state
  }
}
export const venueUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case VENUE_UPDATE_REQUEST:
      return { loading: true }
    case VENUE_UPDATE_SUCCESS:
      return { loading: false, success: true }
    case VENUE_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case VENUE_UPDATE_RESET:
      return {}
    default:
      return state
  }
}
export const venueDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case VENUE_DELETE_REQUEST:
      return { loading: true }
    case VENUE_DELETE_SUCCESS:
      return { loading: false, success: true }
    case VENUE_DELETE_FAIL:
      return { loading: false, error: action.payload }
    case VENUE_DELETE_RESET:
      return {}
    default:
      return state
  }
}

