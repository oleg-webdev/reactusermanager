import React, {Component} from 'react';
import { render } from 'react-dom';
import Main from './components/Main'
import User from './components/User'

class App extends Component {

	state = {
		username: "Oleg"
	};

	changeUsername = (newName) => {
		this.setState({
			username: newName
		});
	}

	render() {
		return (
			<div className="container">

				<Main changeUsername={this.changeUsername}/>
				<User username={this.state.username}/>

			</div>
		)
	}

}

render(<App/>, document.getElementById('app'));
