import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import userReducer from './reducers/userReducer'
import authReducer from './reducers/authReducer'
import logger from 'redux-logger'

// Middleware
const AppGuardian = (store) => (next) => (action) => {

	// Middleware

	next(action);
}

export default createStore(
	combineReducers({ userReducer, authReducer }), {},
	applyMiddleware(AppGuardian, thunk, promise(), logger)
)