import React from 'react';
import { Link } from 'react-router';

export default class TopNav extends React.Component {
	render() {
		return (
			<span>
			<ul>
				<li><Link to="/dashboard" activeClassName="active-item">Dashboard</Link></li>
				<li><Link to="/submissions" activeClassName="active-item">Submissions</Link></li>
				<li><Link to="/awards">Awards</Link></li>
				<li><Link to="/hackers">Researchers</Link></li>
			</ul>
			<span class="float-right"><Link to="/logout">Log out</Link></span>
			</span>
		);
	}
}