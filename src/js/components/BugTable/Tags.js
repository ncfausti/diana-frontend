import React from 'react';
import Tag from './Tags'
export default class Tags extends React.Component {
	handleClick(e){
	//	this.props.changeFilter(e.target.name);
	// delete tag, DEL, id
	}

	// onHover () { show X div }
	render() {
		console.log(this.props);
		return (
				<div>
				{	
					this.props.params.data.tags.map(function(tag){
						return React.createElement("span",{className:'tag-span ' + tag, onClick:console.log('hi')}, null, tag);
		             
		             }) 
		   		 }
			   </div>
			   )
	}
}

