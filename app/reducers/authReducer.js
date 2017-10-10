let localStorage = typeof(window) !== 'undefined' ?
	window.localStorage : ''

export default (state = {
	authToken: typeof(window) !== 'undefined' ?
		localStorage.getItem('usrAuthToken') : '',
	// authToken: '',
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