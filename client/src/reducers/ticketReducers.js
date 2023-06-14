import {
  TICKET_ADD_FAIL,
  TICKET_ADD_REQUEST,
  TICKET_ADD_RESET,
  TICKET_ADD_SUCCESS,
  TICKET_DETAILS_FAIL,
  TICKET_DETAILS_REQUEST,
  TICKET_DETAILS_SUCCESS,
  TICKET_LIST_FAIL,
  TICKET_LIST_REQUEST,
  TICKET_LIST_SUCCESS,
  TICKET_DELETE_REQUEST,
  TICKET_DELETE_SUCCESS,
  TICKET_DELETE_FAIL,
  TICKET_DELETE_RESET,
  TICKET_LIST_BY_EVENT_REQUEST,
  TICKET_LIST_BY_EVENT_SUCCESS,
  TICKET_LIST_BY_EVENT_FAIL,
} from "../constants/ticketConstants"

export const ticketListReducer = (
  state = { loading: true, tickets: [] },
  action
) => {
  switch (action.type) {
    case TICKET_LIST_REQUEST:
      return { loading: true }
    case TICKET_LIST_SUCCESS:
      return { loading: false, tickets: action.payload }
    case TICKET_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const ticketDetailsReducer = (
  state = { ticket: {}, loading: true },
  action
) => {
  switch (action.type) {
    case TICKET_DETAILS_REQUEST:
      return { loading: true }
    case TICKET_DETAILS_SUCCESS:
      return { loading: false, ticket: action.payload }
    case TICKET_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const ticketListByEventReducer = (
  state = { loading: true, tickets: [] },
  action
) => {
  switch (action.type) {
    case TICKET_LIST_BY_EVENT_REQUEST:
      return { loading: true }
    case TICKET_LIST_BY_EVENT_SUCCESS:
      return { loading: false, tickets: action.payload }
    case TICKET_LIST_BY_EVENT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


export const ticketCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case TICKET_ADD_REQUEST:
      return { loading: true }
    case TICKET_ADD_SUCCESS:
      return { loading: false, success: true, ticket: action.payload }
    case TICKET_ADD_FAIL:
      return { loading: false, error: action.payload }
    case TICKET_ADD_RESET:
      return {}
    default:
      return state
  }
}
export const ticketDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case TICKET_DELETE_REQUEST:
      return { loading: true }
    case TICKET_DELETE_SUCCESS:
      return { loading: false, success: true }
    case TICKET_DELETE_FAIL:
      return { loading: false, error: action.payload }
    case TICKET_DELETE_RESET:
      return {}
    default:
      return state
  }
}