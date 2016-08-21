import React from 'react';
import ReactDOM from 'react-dom';
import {AgGridReact} from 'ag-grid-react';
import APIRequest from '../APIRequest';
import ColDefFactory from '../ColDefFactory';
import FilterColumn from './BugTable/FilterColumn';
import DetailColumn from './BugTable/DetailColumn';

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
			},
      columnDefs: new ColDefFactory().createColDefs(),
      rowData:[],
      selectedRows:[
                  {
              "id": "",
              "status": "",
              "creator": "",
              "vulnerability": "",
              "vulnerability_desc":"",
              "client": "",
              "risk_level": "",
              "risk_level_num":"",
              "created": "",
              "modified": "",
              "payout": "",
              "confidence_score": "",
              "calculated_payout": "",
              "client_decision": "",
              "triage_decision": "",
              "tags": [
                "",
                "",
                ""
              ]
            }],
      rowDetailCache: {},
      selectedRowDetails:{},
      api:{},

			filters:new Set([]),
  }

}

componentWillUpdate() {
}
componentDidUpdate() {
}

rowSelected(row) {
    this.setState({selectedRows:row});
    
  // if id in rowDetailCache, set selectedRowDetails to rowDetailCache[id]
  // else make api call to /api/status/<id> and set selectedRowDetails[<id> 
  // and rowDetailCache[<id>] = obj
    if (row.id in this.state.rowDetailCache) {
      console.log('FROM CACHE');
      let id = row.id;
      this.setState({selectedRowDetails:this.state.rowDetailCache[id]});

    }
    else {
      console.log('not in cache');
      let tempRowDetailCache = this.state.rowDetailCache;
      let tempDetailData = {};
      
      // make api call here then this.setState({objReturenedFromApiCall} and) add objReturnedFromApiCall to tempRowDetailCache to 
      
      new APIRequest().makeCorsRequest("","",'GET','api/status/' + row.id +'/',
          function(data) {
                let detailsResponse = JSON.parse(data);
                  console.log("RESPONSE TEXT")
                 // if (items[0].detail == "Invalid token.") {
                    // TODO
                    // Get new token and resend request
                  //}
                  tempRowDetailCache[detailsResponse.id] = detailsResponse;
                  console.log(data);
                  for (var key in detailsResponse) {
                    tempDetailData[key] = detailsResponse[key];
                  }

                  /*
                  detailData['id'] = detailsResponse.id;
                  detailData['status'] = detailsResponse.status;
                  detailData['creator'] = detailsResponse.creator
                  detailData['vulnerability'] = detailsResponse.vulnerability;
                  detailData['client'] = detailsResponse.client;
                  detailData['created'] = detailsResponse.created;
                  detailData['modified'] = detailsResponse.modified;
                  detailData['payout'] = detailsResponse.payout;
                  detailData['comment'] = detailsResponse.comment;
                  detailData['created'] = detailsResponse.created;

  */

                  /*
                  for (let i = 0; i < items.length; i++) {
                      let item = items[i];
                      rowData.push({
                          id:item.id,
                          status:item.client_decision,
                          vulnerability:item.vulnerability,
                          vulnerability_desc:item.vulnerability['description'],
                          risk_level:item.risk_level,
                          age: (function() {
                                  let created = item.created;
                                  let time_created = new Date(created);
                                  let now = new Date();
                                  return Math.floor( (now - time_created) / 1000 / 60 / 60 / 24);})(),
                          confidence:item.confidence_score,
                          payout:item.calculated_payout,
                          tags:item.tags
                      });
                  }
                  */

        }
        );
      this.setState({selectedRowDetails:tempDetailData});
      this.setState({rowDetailCache:tempRowDetailCache});

    }
  }

	onRowSelected(event) {
  //      console.log('onRowSelected: ' + event.node.selected);
        var rows = this.state.api.getSelectedRows();

        // Call onRowSelected that has flowed down from Layouts.js
        this.rowSelected(rows[0]);

    }

	onCellClicked(){  }
	

	onGridReady(params) {
        this.state.api = params.api;
        this.state.columnApi = params.columnApi;
        console.log("API");
        let gridApi = this.state.api;
        new APIRequest().makeCorsRequest("","",'GET','api/submission/table/',
        	function(data) {
    			let rowData = [];
                let items = JSON.parse(data);
                  console.log("RESPONSE TEXT")
                  
                  if (items[0].detail == "Invalid token.") {
                    // TODO
                    // Get new token and resend request
                  }

                  console.log(data);
                  for (let i = 0; i < items.length; i++) {
                      let item = items[i];
                      rowData.push({
                          id:item.id,
                          status:item.client_decision,
                          vulnerability:item.vulnerability,
                          vulnerability_desc:item.vulnerability['description'],
                          risk_level:item.risk_level,
                          age: (function() {
                                  let created = item.created;
                                  let time_created = new Date(created);
                                  let now = new Date();
                                  return Math.floor( (now - time_created) / 1000 / 60 / 60 / 24);})(),
                          confidence:item.confidence_score,
                          payout:item.calculated_payout,
                          tags:item.tags
                      });
                  }
                  gridApi.setRowData(rowData);
    		}
        )
        this.state.api.sizeColumnsToFit();

    }


    isExternalFilterPresent() {
    	console.log('isExtFilterPresent')
    	return this.state.filters.size > 0;
    }

   	doesExternalFilterPass(node) {
    	console.log('doesExtFilterPass')
    	
    	const risks = new Set(['Critical','High','Medium','Low','Info']);
    	const statuses = new Set(['Verified','Not verified', 'Duplicate']);
    	const types = new Set(['SQL Injection','Cross-site Scripting','TLS v1.0 Enables','Clickjacking','Open Direction']);

    //	for (var i in this.state.filters) {
    //		let item = this.state.filters[i];
    //		console.log('ITEMS:' + item)

    //		if (risks.has(item)) return node.data.risk_level === item;
    //		if (statuses.has(item)) return node.data.status === item;
    //		if (types.has(item)) return node.data.vulnerability === item;
    //	}
    	let filters = this.state.filters;
    	console.log('FILTERS:' + filters);
    	if (filters.has(node.data.risk_level) || filters.has(node.data.status) || 
    		filters.has(node.data.vulnerability)) {
    		return true;
    	}

    	return false;

    	/*node.data.risk_level
    	node.data.status
    	node.data.vulnerability
   		switch(this.state.currentFilter){
   			case 'Critical': return node.data.risk_level === "Critical";
   			case 'Verified': return node.data.status === "Verified";
   			default: return true;
   		}
   		*/
    }
	
	changeFilter(filterName) {
		var tempFilters = this.state.filters;
		
		if (tempFilters.has(filterName))
			tempFilters.delete(filterName);
		else tempFilters.add(filterName);
		
		this.setState({filters:tempFilters});	    
	    this.state.api.onFilterChanged();
	}

	render() {
		return (
			<div class="row">
			
			<div id="filterColumn" class="col-md-2">
			 <FilterColumn changeFilter={this.changeFilter.bind(this)} />
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
			    icons={this.state.icons}

			    // column definitions and row data are immutable, the grid
			    // will update when these lists change
			    columnDefs={this.state.columnDefs}

			    // or provide props the old way with no binding
			    rowSelection="single"
			    enableSorting="true"
			    enableFilter="true"
			    rowHeight="48"
			    enableColResize="true"
			    sizeColumnsToFit="true"

			    />
			</div>
			</div>
			
			<div id="detailColumn" class="col-md-2">
			 <DetailColumn details={this.state.selectedRowDetails} />
			</div>
			
			</div>
			//Detail column />
		);
	}
}