import React from 'react';

export default class DetailColumn extends React.Component {
	render() {
		// override materialize.css style
		var h3Style = {
  			fontSize:'1.2em',
  			fontWeight:100,
  			display:'inline-block'
		};
		return (
			<div>
			<div class="detail-header">
			<strong>Details</strong>
			</div>
			</div>
		);
	}
}