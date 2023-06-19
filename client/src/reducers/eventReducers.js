import {
  EVENT_LIST_REQUEST,
  EVENT_LIST_SUCCESS,
  EVENT_LIST_FAIL,
  EVENT_ADD_REQUEST,
  EVENT_ADD_SUCCESS,
  EVENT_ADD_FAIL,
  EVENT_DELETE_REQUEST,
  EVENT_DELETE_SUCCESS,
  EVENT_DELETE_FAIL,
  EVENT_DELETE_RESET,
  EVENT_ADD_RESET,
  EVENT_DETAILS_REQUEST,
  EVENT_DETAILS_SUCCESS,
  EVENT_DETAILS_FAIL,
} from "../constants/eventConstants"

export const eventListReducer = (
  state = { loading: true, events: [] },
  action
) => {
  switch (action.type) {
    case EVENT_LIST_REQUEST:
      return { loading: true }
    case EVENT_LIST_SUCCESS:
      return { loading: false, events: action.payload }
    case EVENT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const eventDetailsReducer = (
  state = { event: {}, loading: true },
  action
) => {
  switch (action.type) {
    case EVENT_DETAILS_REQUEST:
      return { loading: true }
    case EVENT_DETAILS_SUCCESS:
      return { loading: false, event: action.payload }
    case EVENT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const eventCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENT_ADD_REQUEST:
      return { loading: true }
    case EVENT_ADD_SUCCESS:
      return { loading: false, success: true, event: action.payload }
    case EVENT_ADD_FAIL:
      return { loading: false, error: action.payload }
    case EVENT_ADD_RESET:
      return {}
    default:
      return state
  }
}
export const eventDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENT_DELETE_REQUEST:
      return { loading: true }
    case EVENT_DELETE_SUCCESS:
      return { loading: false, success: true }
    case EVENT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    case EVENT_DELETE_RESET:
      return {}
    default:
      return state
  }
}
