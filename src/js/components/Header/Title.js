import React from 'react';

export default class Title extends React.Component {
	render() {
		return (
			<h3>{this.props.title}</h3>
		);
	}
}