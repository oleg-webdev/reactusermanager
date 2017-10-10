let localStorage = typeof(window) !== 'undefined' ?
	window.localStorage : '' // usrAuthToken

export function setUserAuthToken(token) {
	// return {
	// 	type: "SET_AUTH_TOKEN",
	// 	payload: token
	// }

	return dispatch => {
		setTimeout(() => {

			if (typeof(window) !== 'undefined')
				localStorage.setItem('usrAuthToken', token)
			else
				localStorage = ''

			dispatch({
				type: "SET_AUTH_TOKEN",
				payload: token
			})
		}, 1000)
	}

}


