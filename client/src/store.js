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
  ticketListReducer,
} from "./reducers/ticketReducers"
import {
  venueListReducer,
  venueDeleteReducer,
  venueUpdateReducer,
  venueCreateReducer,
} from "./reducers/venueReducers"
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
  ticketDetails: ticketDetailsReducer,
  ticketCreate: ticketCreateReducer,
  ticketDelete: ticketDeleteReducer,
  venueList: venueListReducer,
  venueDelete: venueDeleteReducer,
  venueUpdate: venueUpdateReducer,
  venueCreate: venueCreateReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk))
)

export default store
