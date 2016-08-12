import React from 'react';

export default class TopNav extends React.Component {
	render() {
		var selected = {
			color:'lightblue',
			borderBottom:"3px solid lightblue",
		}
		return (
			<span>
			<ul>
				<li>Dashboard</li>
				<li style={selected}>Submissions</li>
				<li>Awards</li>
				<li>Hackers</li>
			</ul>
			</span>
		);
	}
}