import React, { Component } from 'react'
import AppConst from '../app-const'

import '../../public/styles/partials/home.scss'

import { TweenMax, Power2, TimelineLite } from "gsap";

export default class Home extends Component {

	runOpacity = () => {

	}

	componentDidMount() {
		const tm = new TimelineLite()
		const container = this.homeContainer
		const headings = container.querySelectorAll('h1, h2, h3')
		const banner = container.querySelector('.banner > img')

		TweenMax.staggerFrom(headings, 1, {opacity: 0, x: 300}, 0.3)

		window.addEventListener('scroll', (event) => {
		  let _TOP_OFFSET = document.documentElement.scrollTop || document.body.scrollTop,
			  measure = _TOP_OFFSET * .5

		  tm.to(banner, 0, {y: - measure})
		})

	}

	render() {
		const imgSrc = `${AppConst.siteUrl}public/img/futuristic-spaceship.jpg`
		const reactSrc = `${AppConst.siteUrl}public/img/react.png`
		const reduxSrc = `${AppConst.siteUrl}public/img/redux_logo_2.png`
		const materialSrc = `${AppConst.siteUrl}public/img/material-ui-logo.png`

		return (
			<div className="home-container">
				<div className="home-inner" ref={(cnt) => this.homeContainer = cnt }>
					<figure className="absolute-caption banner">
						<img className={'img-responsive'} src={imgSrc}/>
						<figcaption>
							<div className="am-wrap">
								<div>
									<h1>React</h1>
									<div>
										<h2>Redux state management</h2>
									</div>
									<div><h2>React Router</h2></div>
									<div><h2>Material Ui</h2></div>
									<div><h2>Router Transitions</h2></div>
									<div><h2>GSAP Animations</h2></div>
								</div>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
		)
	}

}
