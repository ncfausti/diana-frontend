import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layouts.js';
//import injectTapEventPlugin from 'react-tap-event-plugin';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin();

/*
const App = () => (
		<Layout />
	);
*/


ReactDOM.render(<Router history={hashHistory}>
	<Route path="/" component={Layout}>

	</Route>
</Router>, document.getElementById('app'));