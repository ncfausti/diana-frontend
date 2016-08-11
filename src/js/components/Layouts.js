import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {
	getVal(val) {
		return 7**val;
	}
	constructor() {
		super()
		this.blah = "BLAH";
	}
	render() {
		const name = "nick"
		return (
			<div>
			<Header />
			<h1>webpack + babel { this.blah } + react!</h1>
			<Footer />
			</div>
		);
	}
}