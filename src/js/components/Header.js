import React from 'react';
import Title from './Header/Title';

export default class Header extends React.Component {
	handleChange(e) {
		const newTitle = e.target.value;
		this.props.changeTitle(newTitle);
	}
	render() {
		return (
			<header>
			<Title title={this.props.title} />
			</header>
		);
	}
}