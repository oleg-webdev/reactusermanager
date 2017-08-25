import React, { Component } from 'react'


export default class Home extends Component {

	constructor(props) {
		super(props)

		window.__history = props.history
	}

	render() {
		return (
			<div className="home-container">
				<h1>Home</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nemo odit quaerat. Debitis hic non reprehenderit repudiandae? Ab, atque consequatur cupiditate debitis dignissimos enim est in ipsum, maxime nemo, quo.</p>
			</div>
		)
	}

}
