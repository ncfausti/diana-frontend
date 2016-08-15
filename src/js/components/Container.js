import React from 'react';
import BugTable from './Container/BugTable';


export default class Container extends React.Component {
	render() {
		return (
			<BugTable 
				rowData={this.props.rowData} 
				columnDefs={this.props.columnDefs} 
				onRowSelected={this.props.onRowSelected}
				selectedRows={this.props.selectedRows}
				filters={this.props.filters} 
			/>
		);
	}
}