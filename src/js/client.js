import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layouts.js';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import Details from './components/Details.js';
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

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<Route path="/login" component={Login}/>
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/details/" component={Details} />\
		</Route>
	</Router>, document.getElementById('app'));