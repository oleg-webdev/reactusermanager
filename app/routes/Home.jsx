import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { setUserAuthToken } from '../actions/authActions'

class Home extends Component {

	updateToken = () => {
		this.props.setAuthToken('new token 3')
	}

	isAuthenticated = () => {
		const token = this.props.auth.authToken
		return token !== null && token.length > 0
	}

	// this.props.auth.authToken
	// this.isAuthenticated()

	render() {

		return (
			<div>
				<div>
					<img className={'img-responsive'} src="./public/img/futuristic-spaceship.jpg"/>
				</div>
			</div>


		)
	}

}


const mapStateToProps = (state) => {
	return {
		auth: state.authReducer
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setAuthToken: (token) => {
			dispatch(setUserAuthToken(token))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
