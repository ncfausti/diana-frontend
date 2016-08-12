import React from 'react';

export default class Title extends React.Component {
	render() {
		// override materialize.css style
		var h3Style = {
  			fontSize:'1.2em',
  			fontWeight:100,
  			display:'inline-block'
		};
		return (
			<span>
			<h3 style={h3Style}>Project Diana</h3><i class="material-icons md-18 md-light">expand_more</i>
			</span>
		);
	}
}