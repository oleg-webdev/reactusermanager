import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import AppEntry from './components/AppEntry'

render(
	<BrowserRouter>
		<AppEntry/>
	</BrowserRouter>, document.getElementById('app')
);
