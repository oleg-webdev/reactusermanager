import React, { Component } from 'react'
import axios from 'axios'
import _ from 'lodash'

import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'

import CircularProgress from 'material-ui/CircularProgress';


export default class Users extends Component {

	state = {
		users: []
	}

	componentDidMount() {
		const that = this
		axios.get('https://randomuser.me/api/?results=10').then(data => {
			const _users = data.data.results
			that.setState({users: _users})
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
				primaryText={this.formatTitle(user)}
				leftAvatar={<Avatar src={`${user.picture.thumbnail}`} />}
				rightIcon={<CommunicationChatBubble />}
			/>
		)
	}

	render() {
		return (
			<div className="users-container am-wrap component-container">
				<h3>Users</h3>

				<div className="row">
					<div className="col-md-4">
						<p>This page demonstrates work with async list of users</p>
						<p>Sort of "TODO" app</p>
						<p><em><small>This is demo users info from https://randomuser.me/ </small></em></p>
						<p><em><small>Any coincidences are accidental.</small></em></p>
					</div>

					<div className="col-md-8">
						<List>
							<Subheader>Recent chats</Subheader>
							{
								this.state.users.length > 0 ?
								this.state.users.map((theUser) => this.formatUser(theUser)) :
									<CircularProgress size={80} thickness={5} />
							}
						</List>
						<Divider />
					</div>
				</div>

			</div>
		)
	}

}
