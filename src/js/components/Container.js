import React from 'react';
import Center from './Container/Center';
import DetailColumn from './Container/DetailColumn';
import FilterColumn from './Container/FilterColumn';


export default class Container extends React.Component {
	handleChange(e) {
		const newTitle = e.target.value;
		this.props.changeTitle(newTitle);
	}
	render() {
		return (
			<div class="row">
			<div id="filterColumn" class="col-md-2">
			 <FilterColumn />
			</div>
			<div id="centerColumn" class="col-md-8">
			 <Center rowData={this.props.rowData} 
			 		 columnDefs={this.props.columnDefs} 
			 		 onRowSelected={this.props.onRowSelected} />
			</div>
			<div id="detailColumn" class="col-md-2">
			
			 <DetailColumn selectedRows={this.props.selectedRows} />
			}
			</div>
			</div>
		);
	}
}