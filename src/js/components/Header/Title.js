import React from 'react';

export default class Title extends React.Component {
	componentWillMount() {
	}
	render() {
		// override materialize.css style
		var h3Style = {
  			fontSize:'1em',
  			fontWeight:300,
  			display:'inline-block'
		};
		console.log("INFO Section")
		//console.log(this.props.location)
		return (
			<span>
			<h3 style={h3Style}>Project Diana</h3>
			{
			//	<i class="material-icons md-18 md-light">expand_more</i>
			}
			</span>
		);
	}
}