import React from 'react';
import Center from './Container/Center';
import DetailColumn from './Container/DetailColumn';
import FilterColumn from './Container/FilterColumn';


export default class Container extends React.Component {
	render() {
		return (
			<div class="row">
			<div id="filterColumn" class="col-md-2">
			 <FilterColumn filterChecked={this.props.filterChecked}/>
			</div>
			<div id="centerColumn" class="col-md-8">
			 <Center rowData={this.props.rowData} 
			 		 columnDefs={this.props.columnDefs} 
			 		 onRowSelected={this.props.onRowSelected}
			 		 filters={this.props.filters}
			 		 setNewFilter={this.props.setNewFilter}
			 		  />
			</div>
			<div id="detailColumn" class="col-md-2">

			 <DetailColumn selectedRows={this.props.selectedRows} />
			}
			</div>
			</div>
		);
	}
}