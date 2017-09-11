import React, { Component } from 'react'
import AppConst from '../app-const'

export default class Home extends Component {

	render() {
		const imgSrc = `${AppConst.siteUrl}public/img/futuristic-spaceship.jpg`

		return (
			<div className="home-container am-wrap component-container">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cupiditate deleniti dolorum eaque excepturi id impedit ipsum libero porro, provident quia quibusdam repellendus repudiandae tempore temporibus totam vel veritatis vitae?</p>
			</div>
		)
	}

}
