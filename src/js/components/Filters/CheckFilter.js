import React from 'react';

export default class CheckFilter extends React.Component {
	constructor() {
		super()
		this.state = {
			filterDict: {
				'Cross Site Scripting':'Stored Cross-Site Scripting (XSS)',
				'SSL Cipher':'SSL Medium Strength Cipher Suites Supported',
				'TLS v1.0 Enabled':'TLSv1.0 Protocol Enabled',
				'DOM-Based XSS':'DOM-Based Cross-Site Scripting (XSS)',
				'Weak TLS Ciphers':'Weak TLS Ciphers Supported',
				'SQL Injection':'SQL Injection',
			}
		}
	}

	handleClick(e){
		if (e.target.name in this.state.filterDict)
			this.props.changeFilter(this.state.filterDict[e.target.name]);
		else
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
			name={this.props.name}></input><span class="checkbox-material"><span class="check"></span></span> <span class="span-filter-label">{this.props.name}</span>
			</label>
			<span class="filter-count-span"> {count} </span>
			</div>
		);
	}
}