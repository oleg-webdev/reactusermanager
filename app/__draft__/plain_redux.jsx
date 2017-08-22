import { createStore } from 'redux'

const initialState = {
	result: 0,
	lastValues: []
}

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case "ADD" :
			state = {
				...state,
				result: state.result + action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			break;
		case "SUBTRACT" :
			state = {
				...state,
				result: state.result - action.payload,
				lastValues: [...state.lastValues, action.payload]
			}
			break;
	}

	return state;

}


const store = createStore(reducer)

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