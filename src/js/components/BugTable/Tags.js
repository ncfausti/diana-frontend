import React from 'react';
import ReactDOM from 'react-dom';
import Tag from './Tags'
import { WithContext as ReactTags } from 'react-tag-input';

export default class Tags extends React.Component {
	constructor() {
		super()
		this.state = {tags: []}
	}
	
	componentWillMount() {
		let tagID = 0;
		let tags = this.props.params.data.tags.map(function(tag,){
		             return {id:tagID++, text:tag}
		             });
		this.setState({tags});
	}

	handleDelete(i) {
		let tags = this.state.tags;
		tags.splice(i, 1);
		this.setState({tags: tags});
	}

	handleAddition(tag) {
		let tags = this.state.tags;
		tags.push({id: tags.length + 1,
		text: tag
		});
		this.setState({tags:tags});
	}

	handleDrag(tag, currPos, newPos) {
		let tags = this.state.tags;

		tags.splice(currPos, 1);
		tags.splice(newPos, 0, tag);

		this.setState({tags:tags});
	}
	render() {


		return (
			<div>
				<ReactTags tags={this.state.tags}
					handleDelete={this.handleDelete.bind(this)}
					handleAddition={this.handleAddition.bind(this)}
					handleDrag={this.handleDrag.bind(this)} />
			</div>
			)
	}
/* old render
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
*/
}

