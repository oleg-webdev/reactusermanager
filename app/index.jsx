import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/AppEntry'
import store from './store'

store.subscribe(() => {

	// console.log("Store updated: ", store.getState());

})

render(
	<Provider store={store}>
		<MuiThemeProvider>
			<App/>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('app'));