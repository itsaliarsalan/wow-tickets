import {
	applyMiddleware,
	combineReducers,
	compose,
	legacy_createStore as createStore,
} from 'redux'
import thunk from 'redux-thunk'
import {
  eventCreateReducer,
  eventDeleteReducer,
  eventDetailsReducer,
  eventListReducer,
} from "./reducers/eventReducers"
import {
  ticketCreateReducer,
  ticketDeleteReducer,
  ticketDetailsReducer,
  ticketListByEventReducer,
  ticketListReducer,
} from "./reducers/ticketReducers"
import {
  venueListReducer,
  venueDeleteReducer,
  venueUpdateReducer,
  venueCreateReducer,
  venueDetailsReducer,
} from "./reducers/venueReducers"

import { stripeCreateReducer } from "./reducers/stripeReducers"
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducers"

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
}

const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  eventList: eventListReducer,
  eventDetails: eventDetailsReducer,
  eventCreate: eventCreateReducer,
  eventDelete: eventDeleteReducer,
  ticketList: ticketListReducer,
  ticketListByEvent: ticketListByEventReducer,
  ticketDetails: ticketDetailsReducer,
  ticketCreate: ticketCreateReducer,
  ticketDelete: ticketDeleteReducer,
  venueList: venueListReducer,
  venueDetails: venueDetailsReducer,
  venueDelete: venueDeleteReducer,
  venueUpdate: venueUpdateReducer,
  venueCreate: venueCreateReducer,
  stripeCreate: stripeCreateReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk))
)

export default store
