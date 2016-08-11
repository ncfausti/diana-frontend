import React from 'react';
import Footer from './Footer';
import Header from './Header';
import {AgGridReact} from 'ag-grid-react';
export default class Layout extends React.Component {
	constructor() {
		super()
		this.state = { 
					  title: "Project Diana",
					  name: "ebert", 
					  colorClass:'white',
					  columnDefs: ['name','days since', 'threat-level'],
					  rowData: [
					  	['anthrax', 3, 'high'],
					  	['anthrax', 3, 'high'],
					  	['anthrax', 3, 'high'],
					  	['anthrax', 3, 'high'],
					  	['anthrax', 3, 'high'],
					  	['anthrax', 3, 'high'],
					  	['anthrax', 3, 'high'],
					  	['anthrax', 3, 'high'],
					  ],

					 };
	}

	changeTitle(title) {
		this.setState({title});
	}

	onRowSelected(){ console.log('row selected'); }
	onCellClicked(){ console.log('cell clicked'); }



	render() {
		setTimeout(() => {
			this.setState({colorClass:"blue"});
		}, 1000)
		const name = "nick"
		return (
			<div>
			<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
			
			<h1>webpack + babel <span class={this.state.colorClass}>
			{ this.state.name }</span> + react!</h1>
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
			<Footer />
			</div>
		);
	}
}