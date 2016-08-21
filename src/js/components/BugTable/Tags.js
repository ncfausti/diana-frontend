import React from 'react';

export default class Tags extends React.Component {
	handleClick(e){
	//	this.props.changeFilter(e.target.name);
	// delete tag, DEL, id
	}

	// onHover () { show X div }
	render() {

		return (
			
			React.createElement("div", null, this.props.params.value.map(function(tag){
            	return React.createElement("span",{className:'tag-span ' + tag}, null, tag);
             }))
			
			);
	}
}