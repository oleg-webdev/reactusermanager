import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { RouteTransition } from 'react-router-transition';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Menu from '../components/header/Menu'
import Home from '../routes/Home'
import Search from '../routes/Search'
import Users from '../routes/Users'
import Login from '../routes/Login'

const App = () => (
	<Provider store={store}>
		<MuiThemeProvider>
			<Route render={({location, history, match}) => (
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
							<Route path="/sign_in" component={Login}/>
							<Route path="/sign_up" component={Login}/>
						</Switch>
					</RouteTransition>
				</div>
				)
			} />
		</MuiThemeProvider>
	</Provider>
)


export default App
