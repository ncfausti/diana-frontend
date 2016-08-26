import React from 'react';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';
import APIRequest from '../../APIRequest';

export default class Tags extends React.Component {
	constructor() {
		super()
		this.state = {tags: []}
	}
	
	componentWillMount() {
		let tags = this.props.params.data.tags.map(function(tag){
		             return {id:tag.id, name:tag.name, text:tag.name}
		             });
		this.setState({tags});
	}

	handleDelete(i) {
		let tags = this.state.tags;
		let tag = tags[i];
		tags.splice(i, 1);
		this.setState({tags: tags});

		let self = this;

		var p1 = new Promise(
      	function(resolve, reject) {
      		let path = 'api/tags/' + tag.id + '/?submission=' + self.props.params.data.id;

            new APIRequest().makeCorsRequest({submission:self.props.params.data.id, name:tag.name},'DELETE',path,
                  function(data) {
                        let detailsResponse = JSON.parse(data);
                        resolve(detailsResponse);
                  });
          		}
         	);

	    p1.then(
	      function(val) {
	    //   console.log(val)
	      }
	    )
	    .catch(function(reason) {
	    //  console.log(reason)
	    });

	}

	handleAddition(tag) {
		let tags = this.state.tags;
		tags.push({id: tags.length + 1,
		text: tag
		});
		this.setState({tags:tags});
		//console.log(this.props.params.data)
		// POST /api/tags/
		// headers auth token
		// body {submission:id, name:<tagText>}
		// POST 104.197.191.63/api/tags/?submission=02e349b0-0751-4693-8e7e-45a255dc96ef

	    let self = this;
		var p1 = new Promise(
      	function(resolve, reject) {
            new APIRequest().makeCorsRequest({submission:self.props.params.data.id, name:tag},'POST','api/tags/?submission='+self.props.params.data.id,
                  function(data) {
                        let detailsResponse = JSON.parse(data);
                        resolve(detailsResponse);
                  });
          		}
         	);

	    p1.then(
	      function(val) {
	       console.log(val)
	      }
	    )
	    .catch(function(reason) {
	      console.log(reason)
	    });


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
				<ReactTags tags={this.state.tags}  //.map(span id=id name=tag )
					handleDelete={this.handleDelete.bind(this)}
					handleAddition={this.handleAddition.bind(this)}
					handleDrag={this.handleDrag.bind(this)}
					classNames={{tag: 'tag-span'}}
					placeholder={'Add'} />
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

