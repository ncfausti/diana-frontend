import React from 'react';

export default class TopNav extends React.Component {
	render() {
		return (
			<span>
			<ul>
				<li>Dashboard</li>
				<li class="active-item">Submissions</li>
				<li>Awards</li>
				<li>Hackers</li>
			</ul>
			</span>
		);
	}
}