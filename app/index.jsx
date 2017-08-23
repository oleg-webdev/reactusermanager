import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import App from './components/AppEntry'

const mathReducer = (state = { result: 0, lastValues: [] }, action) => {

	switch (action.type) {
		case "ADD" :
			state = {
				...state,
				result: state.result + action.payload,
				lastValues: [ ...state.lastValues, action.payload ]
			}
			break;
		case "SUBTRACT" :
			state = {
				...state,
				result: state.result - action.payload,
				lastValues: [ ...state.lastValues, action.payload ]
			}
			break;
	}

	return state;

}

const userReducer = (state = { name: "Oleg", age: 34 }, action) => {

	switch (action.type) {
		case "SET_NAME" :
			state = {
				...state,
				name: action.payload
			}
			break;
		case "SET_AGE" :
			state = {
				...state,
				age: action.payload
			}
			break;
	}

	return state;

}

const AppGuardian = (store) => (next) => (action) => {

	console.log("Logged action", action);

	next(action);
}

const store = createStore(
	combineReducers({ mathReducer, userReducer }), {},
	applyMiddleware(AppGuardian)
)

store.subscribe(() => {
	console.log("Store updated!", store.getState());
})


render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app'));