import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux"
import thunk from "redux-thunk"
import { eventListReducer } from "./reducers/eventReducers"

const initialState = {}
const reducer = combineReducers({
  eventList: eventListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)

export default store
