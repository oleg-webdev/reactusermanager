import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { RouteTransition } from 'react-router-transition';

import '../../public/styles/styles.scss'

import Menu from '../components/header/Menu'
import Home from '../routes/Home'
import Search from '../routes/Search'
import Users from '../routes/Users'

// <Route exact path="/" render={props => <Home {...props}/>}/>
// <Route path="/users" component={Users}/>
class App extends Component {

	render() {

		return (
			<div>
				{/*<BrowserRouter>*/}
					{/*<div>*/}
						{/*<Menu/>*/}
						{/*<div className="app container-fluid">*/}
							{/*<Switch>*/}
								{/*<Route exact path="/" component={Home}/>*/}
								{/*<Route path="/users" component={Users}/>*/}
								{/*<Route path="/search" component={Search}/>*/}
							{/*</Switch>*/}
						{/*</div>*/}
					{/*</div>*/}
				{/*</BrowserRouter>*/}
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
										<Route exact path="/" component={Home}/>
										<Route path="/users" component={Users}/>
										<Route path="/search" component={Search}/>
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
