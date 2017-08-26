import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import userReducer from './reducers/userReducer'
import authReducer from './reducers/authReducer'

// Middleware
const AppGuardian = (store) => (next) => (action) => {

	console.log("Logged action", action);

	next(action);

}

export default createStore(
	combineReducers({ userReducer, authReducer }), {},
	applyMiddleware(AppGuardian, thunk, promise())
)