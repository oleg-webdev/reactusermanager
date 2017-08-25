import React, { Component } from 'react'

export default class Search extends Component {

	constructor(props) {
		super(props)

		window.__history = props.history
	}

	render() {
		return (
			<div className="search-container">
				<h3>Search Route</h3>
			</div>
		)
	}

}
