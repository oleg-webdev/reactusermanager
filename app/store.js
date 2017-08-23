import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import mathReducer from './reducers/mathReducer'
import userReducer from './reducers/userReducer'

// Middleware
const AppGuardian = (store) => (next) => (action) => {

	console.log("Logged action", action);

	next(action);

}

export default createStore(
	combineReducers({ mathReducer, userReducer }), {},
	applyMiddleware(AppGuardian, thunk, promise())
)