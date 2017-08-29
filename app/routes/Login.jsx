import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUserAuthToken } from '../actions/authActions'

class Login extends Component {

	updateToken = () => {
		this.props.setAuthToken('simulate_login_token')
		// this.props.history.push('/')
	}

	logoutAction = () => {
		this.props.setAuthToken('')
	}

	isAuthenticated = () => {
		const token = this.props.auth.authToken
		return token !== null && token.length > 0
	}

	render() {
		return (
			<div className="search-container am-wrap component-container">

				<div className="text-center">
					<hr/>
					<p><em>This is just login emulation without actual backend login. Only for menu state management purpose. Aside menu items affected also</em></p>
					<p><em>You can check dev tools console for callback details</em></p>
					<hr/>

					{
						!this.isAuthenticated() &&
							<div>
								<button
									onClick={this.updateToken}
									type="button" className="btn btn-primary">Simulate Login
								</button>
							</div>
					}

					{this.isAuthenticated() && (
						<div>
							<p>You're authenticated</p>
							<p>Check your local storage for "usrAuthToken"</p>

							<button
								onClick={this.logoutAction}
								type="button" className="btn btn-primary">Simulate Logout
							</button>
						</div>

					)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)