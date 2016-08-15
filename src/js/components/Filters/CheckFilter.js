import React from 'react';

export default class CheckFilter extends React.Component {
	handleClick(e){
		this.props.filterChecked(e.target.name);
	}
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
			<input type="checkbox" 
			checked={this.props.checked} 
			onClick={this.handleClick.bind(this)} 
			name={this.props.name}></input> <label style={style} htmlFor={this.props.name}>{this.props.name}</label><span>{count}</span>
			</div>
		);
	}
}