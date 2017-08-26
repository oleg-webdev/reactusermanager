const localStorage = window.localStorage

export default (state = {
	authToken: localStorage.getItem('usrAuthToken'),
	user: {}
}, action) => {

	switch (action.type) {
		// {...}_FULFILLED
		case "SET_AUTH_TOKEN" :
			state = {
				...state,
				authToken: action.payload
			}
			break;

		case "SET_USER_INFO" :
			state = {
				...state,
				user: action.payload
			}
			break;
	}

	return state;

}