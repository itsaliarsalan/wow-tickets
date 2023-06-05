import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux"
import thunk from "redux-thunk"
import {
  eventCreateReducer,
  eventDetailsReducer,
  eventListReducer,
} from "./reducers/eventReducers"
import { userSigninReducer } from "./reducers/userReducers"
import {
  categoryCreateReducer,
  categoryDeleteReducer,
  categoryListReducer,
  categoryUpdateReducer,
} from "./reducers/categoryReducers"

import {
  venueListReducer,
  venueDeleteReducer,
  venueUpdateReducer,
  venueCreateReducer,
} from "./reducers/venueReducers"

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
}

const reducer = combineReducers({
  userSignin: userSigninReducer,
  eventList: eventListReducer,
  eventDetails: eventDetailsReducer,
  eventCreate: eventCreateReducer,
  categoryList: categoryListReducer,
  categoryDelete: categoryDeleteReducer,
  categoryUpdate: categoryUpdateReducer,
  categoryCreate: categoryCreateReducer,
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
