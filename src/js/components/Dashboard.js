// components/Dashboard.js
import React from 'react'
//import {BarChart} from 'react-d3'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
export default class Dashboard extends React.Component{
	constructor() {
		super()
		this.state = {
						data:[
						{name: 'January', Critical: 4000, High: 2400, amt: 2400},
						{name: 'February', Critical: 4000, High: 2400, amt: 2400},
						{name: 'March', Critical: 3000, High: 1398, amt: 2210},
						{name: 'April', Critical: 2000, High: 9800, amt: 2290},
						{name: 'May', Critical: 2780, High: 3908, amt: 2000},
						{name: 'June', Critical: 1890, High: 4800, amt: 2181},
						{name: 'July', Critical: 2390, High: 3800, amt: 2500},
						{name: 'August', Critical: 3490, High: 4300, amt: 2100},
						],
						submission_categories_by_month:[{"count":500,"vulnerability__category__name":"authorization","month":"2016-08-01T00:00:00Z"}],
						submission_risk_by_month:[{"count":316,"risk_level__title":"Critical","month":"2016-08-01T00:00:00Z"},
													{"count":184,"risk_level__title":"Low","month":"2016-08-01T00:00:00Z"}],
						submission_taxonomies_by_month:[{"count":100,"vulnerability__taxonomies__name":"A1","month":"2016-08-01T00:00:00Z"},
														  {"count":104,"vulnerability__taxonomies__name":"A3","month":"2016-08-01T00:00:00Z"},
														  {"count":112,"vulnerability__taxonomies__name":"A8","month":"2016-08-01T00:00:00Z"},
														  {"count":100,"vulnerability__taxonomies__name":"S1","month":"2016-08-01T00:00:00Z"},
														  {"count":112,"vulnerability__taxonomies__name":"S12","month":"2016-08-01T00:00:00Z"},
														  {"count":104,"vulnerability__taxonomies__name":"S4","month":"2016-08-01T00:00:00Z"},
														  {"count":0,"vulnerability__taxonomies__name":null,"month":"2016-08-01T00:00:00Z"}]
		/*
		  barData:[
		  			{ "name":"Series A",
			    	 "values": [
			      		{ "x": 0, "y":  75},
			      		{ "x": 1, "y":  74},
			      		{ "x": 2, "y":  30},
			      		{ "x": 3, "y":  74},
			      		{ "x": 4, "y":  60},
			      		{ "x": 5, "y":  84},
			      		{ "x": 6, "y":  20},
			      		{ "x": 7, "y":  11},
			      		{ "x": 8, "y":  20},
			      		{ "x": 9, "y":  45},
			      		{ "x": 10, "y":  30},
			      		{ "x": 11, "y":  30},

			     	 		   ]
			  		},
			  		{ "name":"Series B",
			    	  "values": [
			      		{ "x": 0, "y":  75},
			      		{ "x": 1, "y":  74},
			      		{ "x": 2, "y":  30},
			      		{ "x": 3, "y":  74},
			      		{ "x": 4, "y":  60},
			      		{ "x": 5, "y":  84},
			      		{ "x": 6, "y":  20},
			      		{ "x": 7, "y":  11},
			      		{ "x": 8, "y":  20},
			      		{ "x": 9, "y":  45},
			      		{ "x": 10, "y":  30},
			      		{ "x": 11, "y":  30},

			     	 		   ]
			  		},
			  		{ "name":"Series C",
			    	  "values": [
			      		{ "x": 0, "y":  75},
			      		{ "x": 1, "y":  74},
			      		{ "x": 2, "y":  30},
			      		{ "x": 3, "y":  74},
			      		{ "x": 4, "y":  60},
			      		{ "x": 5, "y":  84},
			      		{ "x": 6, "y":  20},
			      		{ "x": 7, "y":  11},
			      		{ "x": 8, "y":  20},
			      		{ "x": 9, "y":  45},
			      		{ "x": 10, "y":  30},
			      		{ "x": 11, "y":  30},
			     	 		   ]
			  		},

				  ]
				  */

  		}
  	}

  render() {
    return (<div>

		<BarChart width={1000} height={300} data={this.state.data}
            margin={{top: 20, right: 0, left: 0, bottom: 5}}>
       <Legend />

       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="1  1"/>
       <Tooltip/>
       <Bar dataKey="Critical" stackId="a" fill="#CB181D" />
       <Bar dataKey="High" stackId="a" fill="#FCAE91" />
      </BarChart>
    </div>);
  }

}