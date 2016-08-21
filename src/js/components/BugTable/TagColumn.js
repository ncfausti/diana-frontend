import React from 'react';
import Tags from './Tags';
export default class TagColumn extends React.Component {
	handleClick(e){
	//	this.props.changeFilter(e.target.name);
	// delete tag, DEL, id
	}

	// onHover () { show X div }
	render() {

		return (
			<Tags tagList={this.props.params.value} />			
			);
	}
}