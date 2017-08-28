import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { RouteTransition } from 'react-router-transition';

import __ from '../app-const'

import '../../public/styles/styles.scss'

import Menu from '../components/header/Menu'
import Home from '../routes/Home'
import Search from '../routes/Search'
import Users from '../routes/Users'
import Login from '../routes/Login'

class App extends Component {

	render() {

		return (
			<div>
				<BrowserRouter>
					<Route render={({location, history, match}) => {
						return (
							<div>
								<Menu/>
								<RouteTransition
									className="app-route-transition"
									pathname={location.pathname}
									atEnter={{ translateY: 20, opacity: 0}}
									atLeave={{ translateY: 20, opacity: 0}}
									atActive={{ translateY: 0, opacity: 1}}
									mapStyles={styles => ({
										transform: `translateY(${styles.translateY}%)`,
										opacity: styles.opacity
									})}
								>
									<Switch key={location.key} location={location}>
										<Route exact path={`${__.pref}/`} component={Home}/>
										<Route path={`${__.pref}/users`} component={Users}/>
										<Route path={`${__.pref}/search`} component={Search}/>
										<Route path={`${__.pref}/sign_in`} component={Login}/>
										<Route path={`${__.pref}/sign_up`} component={Login}/>
									</Switch>
								</RouteTransition>
							</div>
						);
					}} />
				</BrowserRouter>


			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		user: state.userReducer
	}
}


export default connect(mapStateToProps)(App)
