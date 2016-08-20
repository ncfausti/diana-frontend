import React from 'react';

export default class Tag extends React.Component {
	handleClick(e){
	//	this.props.changeFilter(e.target.name);
	// delete tag, DEL, id
	}

	// onHover () { show X div }
	render() {
		// override materialize.css style
		let name = 'Open';
		let count = 12;

		var style = {
			fontSize:'.8em',
			color:'#333',
		};
		var tagList = this.props.params.value.map(function(tag) { 
			return "<span>"+tag+"</span>";
		});

		return (
			React.createElement("div", null, this.props.params.value.map(function(tag){
            	return React.createElement("span",{className:'tag-span'}, null, tag);
             })
            )
		);
	}
}