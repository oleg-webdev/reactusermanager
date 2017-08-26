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

	render() {
		return (
			<div className="home-container">
				<h1>Home</h1>
				<button
					onClick={this.updateToken}
					type="button" className="btn btn-primary">Set token
				</button>
				<hr/>
				<pre>
					<code>
						{JSON.stringify(this.props.auth.authToken)}
					</code>
				</pre>
				<pre>
					<code>
					{JSON.stringify(this.isAuthenticated())}
				</code>
				</pre>
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
