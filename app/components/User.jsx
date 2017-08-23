import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {



	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-12">
						<h1>The User Page</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<p>User Name: {this.props.user.name}...</p>
					</div>
				</div>
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

export default connect(mapStateToProps)(User)