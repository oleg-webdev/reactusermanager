import React, { Component } from 'react'

export default class Search extends Component {

	constructor(props) {
		super(props)

		window.__history = props.history
	}

	render() {
		return (
			<div className="search-container am-wrap component-container">
				<h3>Search Route</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, facilis suscipit! Adipisci alias aperiam commodi, culpa, debitis ducimus ex exercitationem in magni modi numquam perferendis quae ratione, reprehenderit vero vitae?</p>
			</div>
		)
	}

}
