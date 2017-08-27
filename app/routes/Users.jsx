import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

export default class Users extends Component {

	render() {
		return (
			<div className="users-container am-wrap component-container">
				<h3>Users router</h3>

				<div className="row">
					<div className="col-md-4">
						<List>
							<ListItem primaryText="Inbox" leftIcon={<ContentInbox/>}/>
							<ListItem primaryText="Starred" leftIcon={<ActionGrade/>}/>
							<ListItem primaryText="Sent mail" leftIcon={<ContentSend/>}/>
							<ListItem primaryText="Drafts" leftIcon={<ContentDrafts/>}/>
							<ListItem primaryText="Inbox" leftIcon={<ContentInbox/>}/>
						</List>
						<Divider/>
						<List>
							<ListItem primaryText="All mail" rightIcon={<ActionInfo/>}/>
							<ListItem primaryText="Trash" rightIcon={<ActionInfo/>}/>
							<ListItem primaryText="Spam" rightIcon={<ActionInfo/>}/>
							<ListItem primaryText="Follow up" rightIcon={<ActionInfo/>}/>
						</List>
					</div>

					<div className="col-md-8">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolor dolorem ea error quod! Ad, hic molestiae. Deserunt est, eveniet impedit, maxime odit quo quod quos similique sunt vitae voluptates.</p>
					</div>
				</div>

			</div>
		)
	}

}
