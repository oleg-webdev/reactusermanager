import React, { Component } from 'react'

export default class Search extends Component {

	constructor(props) {
		super(props)

		window.__history = props.history
	}

	render() {
		return (
			<div className="search-container am-wrap component-container">
				<h3>Search Router</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, facilis suscipit! Adipisci alias aperiam commodi, culpa, debitis ducimus ex exercitationem in magni modi numquam perferendis quae ratione, reprehenderit vero vitae?</p>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid amet asperiores consequuntur doloremque inventore ipsam laboriosam nobis nostrum obcaecati, officiis pariatur quisquam quo rem repellat repudiandae rerum temporibus voluptas.</p>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at commodi consectetur debitis doloremque error eveniet ipsam labore magni odio officia provident quaerat, quibusdam quisquam recusandae repudiandae veniam voluptates. Accusamus.</p>
			</div>
		)
	}

}
