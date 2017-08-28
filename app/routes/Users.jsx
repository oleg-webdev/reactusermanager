import React, { Component } from 'react'
import axios from 'axios'
import _ from 'lodash'

import Avatar from 'material-ui/Avatar'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'
import CircularProgress from 'material-ui/CircularProgress'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

export default class Users extends Component {

	state = {
		users: [],
		newUser: "",
		open: false,
		snackMessage: '',
		progress: false
	}

	componentDidMount() {
		this.setState({ progress: true })
		axios.get('https://randomuser.me/api/?results=5').then(data => {
			const _users = data.data.results
			this.setState({ users: _users, progress: false })
		})
	}

	handleRequestClose = () => {
		this.setState({
			open: false,
			snackMessage: ''
		})
	}

	formatTitle(user) {
		return (
			<span>
				{`${_.upperFirst(user.name.first)} ${_.upperFirst(user.name.last)} | ${user.email}`}
			</span>
		)
	}

	formatUser = (user) => {
		return (
			<ListItem
				key={user.email}
				onClick={() => this.handleRemoveUser(user)}
				primaryText={this.formatTitle(user)}
				leftAvatar={<Avatar src={`${user.picture.thumbnail}`}/>}
				rightIcon={<CommunicationChatBubble/>}
			/>
		)
	}

	handleRemoveUser = (user) => {
		let users = this.state.users
		let index = _.findIndex(users, function(usr) {
			return usr.email === user.email
		})
		users.splice(index, 1)
		this.setState({users, open: true, snackMessage: 'User deleted'})
	}

	handleUserTyping = (event) => {
		this.setState({ newUser: event.target.value })
	}

	handleAddUser = (event) => {
		event.preventDefault()
		if (this.state.newUser.length < 1) {
			this.setState({ open: true, snackMessage: 'Name cannot be blank' })
			return
		}

		this.setState({ progress: true })
		axios.get('https://randomuser.me/api/').then(data => {
			let usr = data.data.results[ 0 ],
				users = this.state.users
			usr.name.first = this.state.newUser
			users.unshift(usr)
			this.setState({ users })
			this.setState({ newUser: '', progress: false, open: true, snackMessage: 'User added' })
		})
	}

	render() {
		const snackStyles = {
			position: 'absolute',
			left: 'auto',
			right: '0',
			top: '0',
			margin: '0!important'
		}
		return (
			<div className="users-container am-wrap component-container">
				<Snackbar
					open={this.state.open}
					message={this.state.snackMessage}
					autoHideDuration={4000}
					style={snackStyles}
					onRequestClose={this.handleRequestClose}
				/>

				<h3>Users</h3>

				<div className="row">
					<div className="col-md-4">
						<p>This page demonstrates work with async list of users</p>
						<p>Sort of "TODO" app</p>

						<form onSubmit={this.handleAddUser} className={'form-group'}>
							<TextField
								value={this.state.newUser}
								onChange={this.handleUserTyping}
								hintText="Some Hint Text"
								floatingLabelText="Set first name for new user"
							/>

							<RaisedButton type="submit" label="Add user" primary={true}/>
						</form>

						<p><em>
							<small>This is demo users info from https://randomuser.me/</small>
						</em></p>
						<p><em>
							<small>Any coincidences are accidental.</small>
						</em></p>
					</div>

					<div className="col-md-8">
						{
							this.state.progress &&
							<CircularProgress size={80} thickness={5}/>
						}
						<List>
							<Subheader>Recent users (click on any user to remove)</Subheader>
							{
								this.state.users.length > 0 &&
								this.state.users.map((theUser) => this.formatUser(theUser))
							}
						</List>
						<Divider/>
					</div>
				</div>

			</div>
		)
	}

}
