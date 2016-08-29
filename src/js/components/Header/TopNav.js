import React from 'react';
import { Link } from 'react-router';
import { MenuItem, DropdownButton } from 'react-bootstrap';

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
			<span class="logout-span float-right">

			 <DropdownButton bsStyle={'link'} title={localStorage.email.split('+')[0]} key={0} id={`dropdown-basic-${0}`}>
		      <MenuItem eventKey="1">Profile</MenuItem>
		      <MenuItem eventKey="2">Settings</MenuItem>
		      <MenuItem eventKey="3"><Link to="/logout" id="logout-link">Log out</Link></MenuItem>
		    </DropdownButton>

			 </span>


			</span>
		);
	}
}