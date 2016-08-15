import React from 'react';
import ReactDOM from 'react-dom';
import {AgGridReact} from 'ag-grid-react';
import FilterColumn from './Container/FilterColumn';
import DetailColumn from './Container/DetailColumn';

import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-material.css';

export default class BugTable extends React.Component {
	constructor() {
		super()
        this.state = {
            showGrid: true,
            showToolPanel: false,

            icons: {
                columnRemoveFromGroup: '<i class="fa fa-remove"/>',
                filter: '<i class="fa fa-filter"/>',
                sortAscending: '<i class="fa fa-long-arrow-down"/>',
                sortDescending: '<i class="fa fa-long-arrow-up"/>',
                groupExpanded: '<i class="fa fa-minus-square-o"/>',
                groupContracted: '<i class="fa fa-plus-square-o"/>',
                columnGroupOpened: '<i class="fa fa-minus-square-o"/>',
                columnGroupClosed: '<i class="fa fa-plus-square-o"/>',
                checkboxChecked: '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMTQzMkY1NDIyMjhFNjExQkVGOEFCQUI5MzdBNjFEMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMzBBQkU2ODI4MjQxMUU2QjlDRUZCNUFDREJGRTVDMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMzBBQkU2NzI4MjQxMUU2QjlDRUZCNUFDREJGRTVDMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE0NDMyRjU0MjIyOEU2MTFCRUY4QUJBQjkzN0E2MUQxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjExNDMyRjU0MjIyOEU2MTFCRUY4QUJBQjkzN0E2MUQxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+O+zv0gAAAQ1JREFUeNpilJvw35OBgWEuEEsyEAeeA3EyI1DjMxI0wTUzkaEJBCSZiFVpJcvAsDqEgUFVCMInSqOeOAPDLG8GBjNpBoZCCyI1KggwMCzwZ2DgZWdgOPWUgaF4F5pGDxWgqT4MDPzsSB7hYWBYHMDAIMzJwHDjDQND0mYGhu9/0DT6qTEwuCszMOyIZmAwkoTYALJJjp+B4cEHBoaEjQwMn38iDAVFx38wA4gzTBgYSiwhEi++MDDI8DEwvP3OwBC0CqIZGcBtBOmefoaBIXQNA8PvfxBNf4B03AZMTVgD5xwwXcQDFX/8wcAw+RQDw5VX2AMN7lRSARM07ZEKXoA0poAYJGh6CkrkAAEGAKNeQxaS7i+xAAAAAElFTkSuQmCC"/>'
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


	onRowSelected(event) {
        console.log('onRowSelected: ' + event.node.selected);
        var rows = this.api.getSelectedRows();

        // Call onRowSelected that has flowed down from Layouts.js
        this.props.onRowSelected(rows[0]);

    }

	onCellClicked(){ console.log('cell clicked'); }
	

	onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
        console.log(this.props.filters.Critical)

    }

    checkFilterSaysHi() {
    	this.api.onFilterChanged();
    }

    isExternalFilterPresent() {
    	// If setNewFilter is at default string state, pass all
    	return this.props.setNewFilter != "";
    }

   	doesExternalFilterPass(node) {
   		switch(this.props.setNewFilter){
   			case 'Critical': return node.data.risk_level === "Critical";
   			case 'Verified': return node.data.status === "Verified";
   			default: return true;
   		}
    }

    filterChecked() {
    	console.log('here');
    }

	render() {
		return (
			<div class="row">
			
			<div id="filterColumn" class="col-md-2">
			 <FilterColumn filterChecked={this.props.filterChecked}/>
			</div>
			<div id="centerColumn" class="col-md-8">
			<div class="ag-material">
				<AgGridReact
			    // listen for events with React callbacks
			    onRowSelected={this.onRowSelected.bind(this)}
			    onCellClicked={this.onCellClicked.bind(this)}

			    // grid is ready to use api now
			    onGridReady={this.onGridReady.bind(this)}

			    isExternalFilterPresent={this.isExternalFilterPresent.bind(this)}
			    doesExternalFilterPass={this.doesExternalFilterPass.bind(this)}

			    // binding to properties within React State or Props
			    showToolPanel={this.state.showToolPanel}
			    quickFilterText={this.state.quickFilterText}
			    icons={this.state.icons}

			    // column definitions and row data are immutable, the grid
			    // will update when these lists change
			    columnDefs={this.props.columnDefs}
			    rowData={this.props.rowData}

			    // or provide props the old way with no binding
			    rowSelection="single"
			    enableSorting="true"
			    enableFilter="true"
			    rowHeight="48"
			    enableColResize="true"
			    />
			</div>
			</div>
			
			<div id="detailColumn" class="col-md-2">
			 <DetailColumn selectedRows={this.props.selectedRows} />
			</div>
			
			</div>
			//Detail column />
		);
	}
}