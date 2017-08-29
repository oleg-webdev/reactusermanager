import React, { Component } from 'react'
import AppConst from '../app-const'

import '../../public/styles/partials/home.scss'

import { TweenMax, TimelineLite } from "gsap";

export default class Home extends Component {

	componentDidMount() {
		const tm = new TimelineLite()
		const container = this.homeContainer
		const headings = container.querySelectorAll('h1, h2, h3')
		const banner = container.querySelector('.banner > img')

		TweenMax.staggerFrom(headings, 1, { opacity: 0, x: 300 }, 0.3)
		tm.to(banner, 0, {y: -70})

		window.addEventListener('scroll', (event) => {
			let _TOP_OFFSET = document.documentElement.scrollTop || document.body.scrollTop,
				measure = _TOP_OFFSET * .5

			tm.to(banner, 0, { y: measure - 70 })
		})

	}

	render() {
		const imgSrc = `${AppConst.siteUrl}public/img/futuristic-spaceship.jpg`

		return (
			<div className="home-container">
				<div className="home-inner" ref={(cnt) => this.homeContainer = cnt}>
					<figure className="absolute-caption banner">
						<img className={'img-responsive'} src={imgSrc}/>
						<figcaption>
							<div className="am-wrap">
								<div>
									<h1>BWS React flow example</h1>
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
					<hr/>
					<div className="container">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore earum hic laboriosam nesciunt non numquam obcaecati rem! Aliquam aperiam aut commodi dignissimos ipsum iusto labore quae quia similique, sunt voluptatibus.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur at consectetur consequuntur cupiditate debitis delectus deleniti doloribus ducimus ea error eum eveniet ex excepturi, id inventore ipsam iste labore magnam magni nam neque nisi non odit, omnis placeat quae quaerat quam quia quis quod reiciendis sequi tempore totam vitae, voluptatem voluptatum! Dolore doloremque et nulla, numquam praesentium provident reiciendis sunt! Fugit ipsam odio quia vero. At, debitis dolor doloribus eius eos eum harum, illo illum inventore labore minima, modi natus necessitatibus nemo numquam perspiciatis placeat quis temporibus. Nemo, placeat.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi consequuntur dolore id molestiae neque nisi non quasi rerum. Blanditiis dignissimos et laboriosam magnam qui quos sint velit voluptatum!</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem impedit minima praesentium tempore vero vitae! Accusamus aperiam nesciunt, officia perspiciatis saepe veritatis vitae. Assumenda cupiditate dolorum itaque nobis tempore.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse pariatur, voluptatibus? Culpa debitis, dolor doloremque error fugiat inventore ipsa ipsam officiis quasi quis repellat tempora temporibus, voluptatibus? Asperiores delectus doloribus ducimus fuga sed? Aperiam consequatur dolores earum error est fugiat numquam odio possimus quaerat voluptas. Accusamus amet doloribus enim, error esse maiores! Animi asperiores illo iusto neque omnis sed similique sit voluptas. Animi culpa cumque ea exercitationem ipsam, laborum molestiae necessitatibus nemo neque quas quasi qui quisquam quo reiciendis reprehenderit ullam voluptate! Assumenda fugiat impedit laudantium perspiciatis similique soluta suscipit. Aut ea error exercitationem incidunt, inventore ipsa minima natus sapiente!</p>
					</div>
				</div>
			</div>
		)
	}

}
