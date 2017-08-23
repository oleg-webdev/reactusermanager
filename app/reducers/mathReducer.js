export default (state = { result: 0, lastValues: [] }, action) => {

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