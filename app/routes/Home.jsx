import React, { Component } from 'react'
import AppConst from '../app-const'

import '../../public/styles/partials/home.scss'

export default class Home extends Component {

	render() {
		const imgSrc = `${AppConst.siteUrl}public/img/futuristic-spaceship.jpg`

		return (
			<div className="home-container">
				<figure>
					<img className={'img-responsive'} src={imgSrc}/>
				</figure>
			</div>
		)
	}

}
