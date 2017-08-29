const localStorage = window.localStorage // usrAuthToken

export function setUserAuthToken(token) {
	// return {
	// 	type: "SET_AUTH_TOKEN",
	// 	payload: token
	// }

	return dispatch => {
		setTimeout(() => {

			localStorage.setItem('usrAuthToken', token)

			dispatch({
				type: "SET_AUTH_TOKEN",
				payload: token
			})
		}, 500)
	}

}


