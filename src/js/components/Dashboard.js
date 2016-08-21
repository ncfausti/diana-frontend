// components/Dashboard.js
import React from 'react'
//import {BarChart} from 'react-d3'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import DashboardList from './DashboardList'
export default class Dashboard extends React.Component{
	constructor() {
		super()
		this.state = {
						data:[
						{name: 'January', Critical: 4000, High: 2400, Low:1000, amt: 2400},
						{name: 'February', Critical: 4000, High: 2400, Low:1000, amt: 2400},
						{name: 'March', Critical: 3000, High: 1398, Low:1000, amt: 2210},
						{name: 'April', Critical: 2000, High: 9800, Low:1000, amt: 2290},
						{name: 'May', Critical: 2780, High: 3908, Low:1000, amt: 2000},
						{name: 'June', Critical: 1890, High: 4800, Low:1000, amt: 2181},
						{name: 'July', Critical: 2390, High: 3800, Low:1000, amt: 2500},
						{name: 'August', Critical: 3490, High: 4300, Low:1000, amt: 2100},
						],
						submission_categories_by_month:[{"count":500,"vulnerability__category__name":"authorization","month":"2016-08-01T00:00:00Z"}].map(function(item){ return item.vulnerability__category__name }),
						submission_risk_by_month:[{"count":316,"risk_level__title":"Critical","month":"2016-08-01T00:00:00Z"},
													{"count":184,"risk_level__title":"Low","month":"2016-08-01T00:00:00Z"}].map(function(item){ return item.risk_level__title }),
						submission_taxonomies_by_month:[{"count":100,"vulnerability__taxonomies__name":"A1","month":"2016-08-01T00:00:00Z"},
														  {"count":104,"vulnerability__taxonomies__name":"A3","month":"2016-08-01T00:00:00Z"},
														  {"count":112,"vulnerability__taxonomies__name":"A8","month":"2016-08-01T00:00:00Z"},
														  {"count":100,"vulnerability__taxonomies__name":"S1","month":"2016-08-01T00:00:00Z"},
														  {"count":112,"vulnerability__taxonomies__name":"S12","month":"2016-08-01T00:00:00Z"},
														  {"count":104,"vulnerability__taxonomies__name":"S4","month":"2016-08-01T00:00:00Z"},
														  {"count":0,"vulnerability__taxonomies__name":null,"month":"2016-08-01T00:00:00Z"}].map(function(item){ return item.vulnerability__taxonomies__name }),
						colOneData:[],
						colTwoData:[],
						colThreeData:[],

  		}
  	}

  render() {
    return (
    	<div class="container">
    	<div class="row">
    	<div class="col-md-12">
		<BarChart width={1000} height={300} data={this.state.data}
            margin={{top: 20, right: 0, left: 0, bottom: 5}}>
       <Legend />

       <XAxis dataKey="name" tickLine={false} padding={{ bottom: 10 }}/>
       <YAxis tickLine={false} padding={{ left: 10 }}/>
       <CartesianGrid strokeDasharray="1  1"/>
       <Tooltip/>
       <Bar dataKey="Critical" stackId="a" fill="#CB181D" />
       <Bar dataKey="High" stackId="a" fill="#FCAE91" />
       <Bar dataKey="Low" stackId="a" fill="#FEE5D9" />
      </BarChart>
      </div>
      </div>
      <div class="row margin-left-90">
      <div class="col-md-3">
       
       <div class="simple-list-div">
       <h5>Risk Levels</h5>
       	<DashboardList list={this.state.submission_risk_by_month} />
       </div>
      </div>
      <div class="col-md-4" >
       <div class="simple-list-div">
       <h5>Categories</h5>
       	<DashboardList list={this.state.submission_categories_by_month} />
       </div>
      </div>
      <div class="col-md-3">
       <div class="simple-list-div">
       <h5>OWASP Top 10</h5>
       	<DashboardList list={this.state.submission_taxonomies_by_month} />
       </div>
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-4"></div>
      </div>
    </div>);
  }

}