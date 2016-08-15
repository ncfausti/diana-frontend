import React from 'react';
import DetailColumn from './Container/DetailColumn';
import BugTable from './BugTable';


export default class Container extends React.Component {
	render() {
		return (
			<div class="row">
			<BugTable 
				rowData={this.props.rowData} 
				columnDefs={this.props.columnDefs} 
				onRowSelected={this.props.onRowSelected}
				selectedRows={this.props.selectedRows}
				filters={this.props.filters} 
			/>
			</div>
		);
	}
}