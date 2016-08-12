import React from 'react';
import Footer from './Footer';
import Header from './Header';
import BugTable from './BugTable';
import '../../css/app.css';

export default class Layout extends React.Component {
	constructor() {
		super();
				this.state = { 
					  title: "Project Diana",
					  colorClass:'white',
					}
	}
	changeTitle(title) {
		this.setState({title});
	}

	render() {
		setTimeout(() => {
			this.setState({colorClass:"blue"});
		}, 1000)
		const name = "nick"
		return (
			<div>
			<Header />
			<BugTable />
			<Footer />
			</div>
		);
	}
}