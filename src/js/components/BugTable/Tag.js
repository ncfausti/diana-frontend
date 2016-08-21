import React from 'react';

export default class Tag extends React.Component {
	handleClick(e){
	//	this.props.changeFilter(e.target.name);
	// delete tag, DEL, id
	}

	// onHover () { show X div }
	render() {

		return (
				<span class="tag-span">{this.props.tagText.tag}</span>
            //	return React.createElement("span",{className:'tag-span ' + tag}, null, tag);
             )
	
	}
}