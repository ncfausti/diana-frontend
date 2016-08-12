import React from 'react';

export default class CheckFilter extends React.Component {
	render() {
		// override materialize.css style
		let name = 'Open';
		let count = 12;

		var style = {
			fontSize:'.8em',
			color:'#333',
		};
		return (
			<div>
			<input type="checkbox" checked={this.props.checked} name={this.props.name}></input><label style={style} htmlFor={this.props.name}>{this.props.name}</label><span>{count}</span>
			</div>
		);
	}
}