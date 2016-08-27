// components/Dashboard.js
import React from 'react'
import RefData from '../RefData'
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
            dashboardSums:{         // array of these
              "date":0,
              "client":0,
              "num_critical":0,
              "num_high":0,
              "num_medium":0,
              "num_low":0,
              "num_info":0,
              "num_sans_1":0,
              "num_sans_2":0,
              "num_sans_3":0,
              "num_sans_4":0,
              "num_sans_5":0,
              "num_sans_6":0,
              "num_sans_7":0,
              "num_sans_8":0,
              "num_sans_9":0,
              "num_sans_10":0,
              "num_sans_11":0,
              "num_sans_12":0,
              "num_sans_13":0,
              "num_sans_14":0,
              "num_sans_15":0,
              "num_sans_16":0,
              "num_sans_17":0,
              "num_sans_18":0,
              "num_sans_19":0,
              "num_sans_20":0,
              "num_sans_21":0,
              "num_sans_22":0,
              "num_sans_23":0,
              "num_sans_24":0,
              "num_sans_25":0,
              "num_owasp_1":0,
              "num_owasp_2":0,
              "num_owasp_3":0,
              "num_owasp_4":0,
              "num_owasp_5":0,
              "num_owasp_6":0,
              "num_owasp_7":0,
              "num_owasp_8":0,
              "num_owasp_9":0,
              "num_owasp_10":0,
              "num_configuration_management":0,
              "num_data_confidentiality":0,
              "num_error_handling":0,
              "num_session_management":0,
              "num_data_validation":0,
              "num_authorization":0,
              "num_authentication":0,
              "num_input_validation":0,
              "num_auditing_and_logging":0,
              "num_architecture":0,
              "num_other_category":0,
            },
  		}
      console.log("SUMS")
      console.log(this.state.dashboardSums);
      let dataArray = RefData.DASHBOARD;
      let ignore = new Set(["date",
              "client",
              "num_critical",
              "num_high",
              "num_medium",
              "num_low",
              "num_info"]);

      /*
      for (var i in data) {
        let obj = data[i];

        for(var key in Object.keys(obj)) {
          if (!ignore.has(key)) { //if not client, num_critical, etc. add sum
            
          }
        }
      }
      */
  }

  componenetWillMount() {
    
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