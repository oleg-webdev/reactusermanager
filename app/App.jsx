// import React, {Component} from 'react';
// import { render } from 'react-dom';
// import Main from './components/Main'
// import User from './components/User'
//
// class App extends Component {
//
// 	state = {
// 		username: "Oleg"
// 	};
//
// 	changeUsername = (newName) => {
// 		this.setState({
// 			username: newName
// 		});
// 	}
//
// 	render() {
// 		return (
// 			<div className="container">
// 				<Main changeUsername={this.changeUsername}/>
// 				<User username={this.state.username}/>
// 			</div>
// 		)
// 	}
//
// }
//
// render(<App/>, document.getElementById('app'));

import { createStore, combineReducers } from 'redux'


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


const store = createStore(combineReducers({ mathReducer, userReducer }))

store.subscribe(() => {
	console.log("Store updated!", store.getState());
})

store.dispatch({
	type: "ADD",
	payload: 150
})
store.dispatch({
	type: "SUBTRACT",
	payload: 20
})

store.dispatch({
	type: "SET_AGE",
	payload: 20
})
