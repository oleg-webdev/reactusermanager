import React, { Component } from 'react'

const lStorage = window.localStorage;

export default class Home extends Component {

	state = {
		am__userAuthToken: lStorage.getItem('am__userAuthToken')
	}

	constructor(props) {
		super(props)

	}

	setSomeHistory = () => {
		lStorage.setItem('am__userAuthToken', 'zzz')
		this.setState({am__userAuthToken: lStorage.getItem('am__userAuthToken')})
	}

	render() {
		return (
			<div className="home-container">
				<h1>Home</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nemo odit quaerat. Debitis hic non reprehenderit repudiandae? Ab, atque consequatur cupiditate debitis dignissimos enim est in ipsum, maxime nemo, quo.</p>
				<button
					onClick={this.setSomeHistory}
					type="button" className="btn btn-primary">Primary</button>
				<hr/>
				{this.state.am__userAuthToken}
			</div>
		)
	}

}
