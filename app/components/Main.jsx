import React, { Component } from 'react'

export default class Main extends Component {

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
							onClick={() => this.props.changeUsername('Anastasia')}>Change the Username</button>
					</div>
				</div>
			</div>
		)
	}

}
