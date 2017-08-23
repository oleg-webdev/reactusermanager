import React, { Component } from 'react'
import { connect } from 'react-redux'
// Actions
import { setName } from '../actions/userActions'

class Main extends Component {

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-12">
						<h1>The Main Page</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<button
							className="btn btn-primary"
							onClick={() => this.props.setName('Alicelf')}>Change the Username
						</button>
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
const mapDispatchToProps = (dispatch) => {
	return {
		setName: (name) => {
			dispatch(setName(name))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
