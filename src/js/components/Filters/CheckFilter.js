import React from 'react';

export default class CheckFilter extends React.Component {
	handleClick(e){
		this.props.changeFilter(e.target.name);
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
			<div class="checkbox">
			<label>
			<input type="checkbox" 
			onClick={this.handleClick.bind(this)} 
			name={this.props.name}></input><span class="checkbox-material"><span class="check"></span></span> {this.props.name}
			</label>
			<span class="filter-count-span"> {count} </span>
			</div>
		);
	}
}