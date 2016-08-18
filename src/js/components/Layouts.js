import React from 'react';
import Footer from './Footer';
import Header from './Header';
import BugTable from './BugTable';
import '../../css/bootstrap.css';
import '../../css/app.css';
import '../../css/roboto.css';
import '../../css/material-icons.css';


export default class Layout extends React.Component {
	render() {
		return (
			<div>
			<Header />
			<BugTable />
			<Footer />
			</div>
		);
	}
}