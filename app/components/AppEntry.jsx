import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './Main'
import User from './User'
import Search from '../routes/Search'

class App extends Component {

	render() {
		return (
			<div className="container">
				<Main/>
				<User/>

				<BrowserRouter>
					<div className="app">
						<Switch>
							<Route path="/search" component={Search}/>
						</Switch>
					</div>
				</BrowserRouter>

			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		user: state.userReducer,
		math: state.mathReducer
	}
}


export default connect(mapStateToProps)(App)
