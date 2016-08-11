import React from 'react';
import Footer from './Footer';
import Header from './Header';
import BugTable from './BugTable';
export default class Layout extends React.Component {
	constructor() {
		super();
				this.state = { 
					  title: "Project Diana",
					  name: "ebert", 
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
			<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
			<h1>webpack + babel <span class={this.state.colorClass}>
			{ this.state.name }</span> + react!</h1>
			<BugTable />
			<Footer />
			</div>
		);
	}
}