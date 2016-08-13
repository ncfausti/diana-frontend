import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Container from './Container';
import '../../css/bootstrap.css';
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
			<Container />
			<Footer />
			</div>
		);
	}
}