export function setName(name) {
	// return dispatch => {
	// 	setTimeout(() => {
	// 		dispatch({
	// 			type: "SET_NAME",
	// 			payload: name
	// 		})
	// 	}, 2000)
	// }

	// should change to SET_NAME_FULFILLED
	// in app/reducers/userReducer.js
	// return {
	// 	type: "SET_NAME",
	// 	payload: new Promise((resolve, reject) => {
	// 		setTimeout(() => {
	// 			return resolve(name)
	// 		}, 2000)
	// 	})
	// }

	return {
		type: "SET_NAME",
		payload: name
	}
}

export function setAge(age) {
	return {
		type: "SET_AGE",
		payload: age
	}
}