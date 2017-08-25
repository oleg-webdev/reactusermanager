import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
				<BrowserRouter>
					<div>
						<Menu/>
						<div className="container-fluid">
							<div className="app">
								<Switch>
									<Route exact path="/" component={Home}/>
									<Route path="/users" component={Users}/>
									<Route path="/search" component={Search}/>
								</Switch>
							</div>
						</div>
					</div>
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
