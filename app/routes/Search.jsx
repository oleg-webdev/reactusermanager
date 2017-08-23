import React, { Component } from 'react'

export default class Search extends Component {

	state = {
		searchTerm: 'Debug statement...'
	}

	onUserSearch = (event) => {
		this.setState({ searchTerm: event.target.value })
	}

	render() {
		return (
			<div className="search">
				<h3>Search Route</h3>
			</div>
		)
	}

}
