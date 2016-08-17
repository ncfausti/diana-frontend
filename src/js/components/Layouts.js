import React from 'react';
import Footer from './Footer';
import Header from './Header';
import RefData from '../RefData';
import RowDataFactory from '../RowDataFactory';
import ColDefFactory from '../ColDefFactory';
import BugTable from './BugTable';
import '../../css/bootstrap.css';
import '../../css/app.css';
import '../../css/roboto.css';
import '../../css/material-icons.css';


export default class Layout extends React.Component {
	constructor() {
		super();
				this.state = { 
					  columnDefs: new ColDefFactory().createColDefs(),
            		  rowData: [],
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
				}
	}

	rowSelected(rows) {
		//for (var i in rows) console.log(i);
		this.setState({selectedRows:rows});
	//	for (var i in this.state.selectedRows) console.log(i);

	}

	render() {
		return (
			<div>
			<Header />
			<BugTable  
				rowData={this.state.rowData} 
				columnDefs={this.state.columnDefs} 
				onRowSelected={this.rowSelected.bind(this)} 
				selectedRows={this.state.selectedRows}
				filters={this.state.filters}
			 />
			<Footer />
			</div>
		);
	}
}