import React from 'react';
import ReactDOM from 'react-dom';
import {AgGridReact} from 'ag-grid-react';
import RefData from '../RefData';
import RowDataFactory from '../RowDataFactory';
import ColDefFactory from '../ColDefFactory';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';

export default class BugTable extends React.Component {
	constructor() {
		super()

        this.state = {
            showGrid: true,
            showToolPanel: false,
            columnDefs: new ColDefFactory().createColDefs(),
            rowData: new RowDataFactory().createRowData(),
            icons: {
                columnRemoveFromGroup: '<i class="fa fa-remove"/>',
                filter: '<i class="fa fa-filter"/>',
                sortAscending: '<i class="fa fa-long-arrow-down"/>',
                sortDescending: '<i class="fa fa-long-arrow-up"/>',
                groupExpanded: '<i class="fa fa-minus-square-o"/>',
                groupContracted: '<i class="fa fa-plus-square-o"/>',
                columnGroupOpened: '<i class="fa fa-minus-square-o"/>',
                columnGroupClosed: '<i class="fa fa-plus-square-o"/>'
			}
		}	
	}

	componentDidMount() {
		let reqHeaders = new Headers({'Authorization':'token 398f9af5cd69cfb9488bd8f1fcc456bbff08db25'});
		let myInit = { method: 'GET',
               		   headers: reqHeaders,
               		   
               		   cache: 'default' };
        fetch('../../../data/status.json',myInit)
		.then(function(response) {
			return response;
		})
		.then(function(textResp) {
			console.log(textResp);
		})
		.catch(function(error) {
  			console.log('There has been a problem with your fetch operation: ' + error.message);
		});

  }

	componentWillUnmout() {
		;
	}


	onRowSelected(){ console.log('row selected'); }
	onCellClicked(){ console.log('cell clicked'); }

	render() {
		return (
			<div>
				<AgGridReact
		    // listen for events with React callbacks
		    onRowSelected={this.onRowSelected.bind(this)}
		    onCellClicked={this.onCellClicked.bind(this)}

		    // binding to properties within React State or Props
		    showToolPanel={this.state.showToolPanel}
		    quickFilterText={this.state.quickFilterText}
		    icons={this.state.icons}

		    // column definitions and row data are immutable, the grid
		    // will update when these lists change
		    columnDefs={this.state.columnDefs}
		    rowData={this.state.rowData}

		    // or provide props the old way with no binding
		    rowSelection="multiple"
		    enableSorting="true"
		    enableFilter="true"
		    rowHeight="32"
		    />
			</div>
		);
	}
}