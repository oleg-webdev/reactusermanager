import React, { Component } from 'react'
import { connect } from 'react-redux'

import Main from './components/Main'
import User from './components/User'

class App extends Component {

	render() {
		return (
			<div className="container">
				<Main/>
				<User username={this.props.user.name}/>
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		user: state.userReducer,
		math: state.mathReducer
	}
}


export default connect(mapStateToProps)(App)
