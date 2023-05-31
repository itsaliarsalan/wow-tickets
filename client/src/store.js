import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux"
import thunk from "redux-thunk"
import { eventDetailsReducer, eventListReducer } from "./reducers/eventReducers"
import { userSigninReducer } from "./reducers/userReducers"
import {
  categoryDetailsReducer,
  categoryListReducer,
} from "./reducers/categoryReducers"

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
  categoryList: categoryListReducer,
  categoryDetails: categoryDetailsReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)

export default store
