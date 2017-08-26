import React, { Component } from 'react'
import { connect } from 'react-redux'

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { Link, withRouter } from 'react-router-dom'
import { setUserAuthToken } from '../../actions/authActions'


class Menu extends Component {

	state = { open: false };

	handleToggle = () => this.setState({ open: !this.state.open });

	handleClose = () => this.setState({ open: false });

	iconsSet = {
		home: <FontIcon className="material-icons">home</FontIcon>,
		people: <FontIcon className="material-icons">people</FontIcon>,
		person: <FontIcon className="material-icons">person</FontIcon>,
		logout: <FontIcon className="material-icons">arrow_forward</FontIcon>,
		search: <FontIcon className="material-icons">search</FontIcon>,
	}

	navigateMe = (location) => {
		this.props.history.push(location)
		this.handleClose()
	}

	activeClass(className, routeName) {
		const currPath = this.props.history.location.pathname
		return currPath === routeName ? className : ''
	}

	isAuthenticated = () => {
		const token = this.props.auth.authToken
		return token !== null && token.length > 0
	}

	logoutAction = () => {
		this.props.setAuthToken('')
		this.handleClose()
		this.navigateMe('/sign_in')
	}

	render() {

		return (
			<header className="header-wrap">
				<div>
					<Drawer
						docked={false}
						width={250}
						open={this.state.open}
						onRequestChange={(open) => this.setState({ open })}
					>
						{/*<Link to={'/'} onClick={this.handleClose}>Home</Link>*/}
						{/*<Link to={'/search'} onClick={this.handleClose}>Search</Link>*/}

						<MenuItem
							onClick={(event) => this.navigateMe('/')}
							leftIcon={this.iconsSet.home}>Home</MenuItem>
						<MenuItem
							onClick={(event) => this.navigateMe('/users')}
							leftIcon={this.iconsSet.people}>Users</MenuItem>
						<MenuItem
							onClick={(event) => this.navigateMe('/search')}
							leftIcon={this.iconsSet.search}>Search</MenuItem>

						{
							this.isAuthenticated() ?
								<div>
									<MenuItem
										onClick={this.logoutAction}
										leftIcon={this.iconsSet.logout}>Logout</MenuItem>
								</div>
								: // else
								<div>
									<MenuItem
										onClick={(event) => this.navigateMe('/sign_in')}
										leftIcon={this.iconsSet.person}>Log In</MenuItem>
									<MenuItem
										onClick={(event) => this.navigateMe('/sign_up')}
										leftIcon={this.iconsSet.person}>Sign Up</MenuItem>
								</div>
						}


					</Drawer>
				</div>

				<nav className="navbar navbar-expand-md app-navbar">
					<a className="navbar-brand" href="#">Navbar</a>

					<ul className="nav desktop-navbar">
						<li className="nav-item">
							<a className={'nav-link' + this.activeClass(' active', '/')}
							   onClick={() => this.navigateMe('/')}>Home</a>
						</li>
						<li className="nav-item">
							<a className={'nav-link' + this.activeClass(' active', '/users')}
							   onClick={() => this.navigateMe('/users')}>Users</a>
						</li>
						<li className="nav-item">
							<a className={'nav-link' + this.activeClass(' active', '/search')}
							   onClick={() => this.navigateMe('/search')}>Search</a>
						</li>

						{
							this.isAuthenticated() && (
								<li className="nav-item">
									<a className={'nav-link' + this.activeClass(' active', '/logout')}
									   onClick={this.logoutAction}>Logout</a>
								</li>
							)
						}

						{
							!this.isAuthenticated() && (
								<li className="nav-item">
									<a className={'nav-link' + this.activeClass(' active', '/sign_in')}
									   onClick={() => this.navigateMe('/sign_in')}>Log In</a>
								</li>
							)
						}
						{
							!this.isAuthenticated() && (
								<li className="nav-item">
									<a className={'nav-link' + this.activeClass(' active', '/sign_up')}
									   onClick={() => this.navigateMe('/sign_up')}>Register</a>
								</li>
							)
						}


					</ul>

					<IconButton
						label="Open Drawer"
						onClick={this.handleToggle}>
						<FontIcon className="material-icons">menu</FontIcon>
					</IconButton>
				</nav>
			</header>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		auth: state.authReducer
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setAuthToken: (token) => {
			dispatch(setUserAuthToken(token))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu))