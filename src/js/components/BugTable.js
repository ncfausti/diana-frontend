import React from 'react';
import ReactDOM from 'react-dom';
import {AgGridReact} from 'ag-grid-react';
import APIRequest from '../APIRequest';
import ColDefFactory from '../ColDefFactory';
import FilterColumn from './BugTable/FilterColumn';
import DetailColumn from './BugTable/DetailColumn';
import DetailsLink from './BugTable/DetailsLink.js';

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
      api:{},
			filters:new Set([]),
      details:{
            "id":"","status": "","creator": "",
            "client": "","risk_level": {},"created": "","modified": "","payout": "","comment":"","confidence_score":"","payload": "","calculated_payout": "0.00","client_decision": "open","triage_decision": "open","tags": [],"comments": [],"requests": [],"screenshots": [],"vulnerability": {
            "impact": "","category": "","risk_level": "","description": "","title": "","references": [],"recommendation": "","taxonomies": "",
            }
    }

  }

}

componentWillUpdate() {
}
componentDidUpdate() {
}

setDetails(val) {
  this.setState({details:val});
}

rowSelected(row) {
    this.setState({selectedRows:row});

    if (row.id in this.state.rowDetailCache) {
      //console.log('FROM CACHE');
      let id = row.id;
      this.setState( { details:this.state.rowDetailCache[id] } );
      this.setState( { selectedRowVulnerability:this.state.rowDetailCache[id].vuln_info } );
   //   console.log(this.state.details)

    }
    else 
    {
        // console.log('not in cache');
        let tempRowDetailCache = this.state.rowDetailCache;
        let tempDetailData = {};
          
        // make api call here then this.setState({objReturenedFromApiCall} and) add objReturnedFromApiCall to tempRowDetailCache to 
        let details = {};
        var p1 = new Promise(
          function(resolve, reject)
              {
                new APIRequest().makeCorsRequest({},'GET','api/status/' + row.id +'/',
                      function(data) {
                            let detailsResponse = JSON.parse(data);
                            tempRowDetailCache[detailsResponse.id] = detailsResponse;
                  
                            for (var key in detailsResponse) {
                              tempDetailData[key] = detailsResponse[key];
                            }
                            resolve(detailsResponse );
                      });
                
              }
        )

        let self = this;

        p1.then(
          function(val) {
           self.setState({details:val});
           console.log('this.state')
           console.log(self.state.details);
          }
        )
        .catch(function(reason) {
          console.log(reason)
        });
          this.setState({rowDetailCache:tempRowDetailCache});
    }
  }

	onRowSelected(event) {
        var rows = this.state.api.getSelectedRows();

        // Call onRowSelected that has flowed down from Layouts.js
        this.rowSelected(rows[0]);

    }

	onCellClicked(){  }


	onGridReady(params) {
        this.state.api = params.api;
        this.state.columnApi = params.columnApi;
   //     console.log("API");
        let gridApi = this.state.api;
        let self = this;
        new APIRequest().makeCorsRequest({},'GET','api/submission/table/',
        	function(data) {
    			let rowData = [];
                let items = JSON.parse(data);
                  if (items[0].detail == "Invalid token.") {
                    // TODO
                    // Get new token and resend request
                  }

                  for (let i = 0; i < items.length; i++) {
                      let item = items[i];
                      rowData.push({
                          id:item.id,
                          status:item.client_decision,
                          vulnerability:item.vulnerability,
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
                  self.setState({rowData:rowData});

    		}
        )
        this.state.api.sizeColumnsToFit();

    }


    isExternalFilterPresent() {
    //	console.log('isExtFilterPresent')
    	return this.state.filters.size > 0;
    }

   	doesExternalFilterPass(node) {
    	
    	const risks = new Set(['Critical','High','Medium','Low','Info']);
    	const statuses = new Set(['Verified','Not verified', 'Duplicate']);
    	const types = new Set(['SQL Injection','Cross-site Scripting','TLS v1.0 Enables','Clickjacking','Open Direction']);

    	let filters = this.state.filters;

    	if (filters.has(node.data.risk_level) || filters.has(node.data.status) || 
    		filters.has(node.data.vulnerability)) {
    		return true;
    	}

    	return false;
    }
	

	changeFilter(filterName) {
		var tempFilters = this.state.filters;
		
		if (tempFilters.has(filterName))
			tempFilters.delete(filterName);
		else tempFilters.add(filterName);
		
		this.setState({filters:tempFilters});	    
	    this.state.api.onFilterChanged();
	}

  handleSubmission(decision, amount) {
    let submissionRowIndex = -1;

    for(var i in this.state.rowData){
      if (this.state.rowData[i].id === this.state.selectedRows.id)
        submissionRowIndex = i;
      }

    let tempRowData  = this.state.rowData;
    let submissionID = this.state.selectedRows.id;

    if (submissionRowIndex > -1) { tempRowData.splice(submissionRowIndex, 1); }


    this.setState({"details":{
            "id":"",
            "status": "",
            "creator": "",
            "client": "",
            "risk_level": {},
            "created": "",
            "modified": "",
            "payout": "",
            "comment":"",
            "confidence_score":"",
            "payload": "",
            "calculated_payout": "0.00",
            "client_decision": "open",
            "triage_decision": "open",
            "tags": [],
            "comments": [],
            "requests": [],
            "screenshots": [],
            "vulnerability": {
              "impact": "",
              "category": "",
              "risk_level": "",
              "description": "",
              "title": "",
              "references": [],
              "recommendation": "",
              "taxonomies": "",
            }}})
    
//    this.state.api.setRowData(tempRowData);

    ///////// api call for accept/reject///////////////

    var p1 = new Promise(
      function(resolve, reject)
          {
            new APIRequest().makeCorsRequest({decision:decision, submission:submissionID},'POST','api/user_submission_decisions/',
                  function(data) {
                        let detailsResponse = JSON.parse(data);
                        resolve(detailsResponse);
                  });
          }
    )

    let self = this;

    p1.then(
      function(val) {
       console.log(val)
      }
    )
    .catch(function(reason) {
    //  console.log(reason)
    });

  /*

  //////////// api call for how much /////////////////
  var p2 = new Promise(
      function(resolve, reject)
          {
            console.log("AMOUNT")
            console.log(amount);
            new APIRequest().makeCorsRequest({amount:amount, submission:submissionID},'POST','api/submission_payouts/',
                  function(data) {
                        let detailsResponse = JSON.parse(data);
                        resolve(detailsResponse);
                  });
          }
    )

    let me = this;

    p1.then(
      function(val) {

       console.log(val)
      }
    )
    .catch(function(reason) {
      console.log(reason)
    });
*/

  } 

   // /end handleDecision


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

			 <DetailColumn 
          id={this.state.details.id}
          risk_number={this.state.details.risk_level.number_level}
          risk_level = {this.state.details.risk_level.title}
          vuln_title={this.state.details.vulnerability.category}
          vuln_desc={this.state.details.vulnerability.description}
          tags = {this.state.details.tags}
          comments = {this.state.details.comments}  //array
          requests = {this.state.details.requests}  //array
          screenshots = {this.state.selectedRowScreenShots}  //array
          payout = {this.state.details.calculated_payout}
          handleSubmission = {this.handleSubmission.bind(this)}
      />
			</div>
			
			</div>
			//Detail column />
		);
	}
}