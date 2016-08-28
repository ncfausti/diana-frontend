// components/Dashboard.js
import React from 'react'
import RefData from '../RefData'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area} from 'recharts'
import DashboardList from './DashboardList'
export default class Dashboard extends React.Component{
	constructor() {
		super()

		this.state = {
            numCritical:0,
            numHigh:0,
            numMedium:0,
            numLow:0,
            numInfo:0,

						data:[
						{name: 'January', Critical: 4000, High: 2400, Low:1000,},
						{name: 'February', Critical: 4000, High: 2400, Low:1000, amt: 2400},
						{name: 'March', Critical: 3000, High: 1398, Low:1000, amt: 2210},
						{name: 'April', Critical: 2000, High: 9800, Low:1000, amt: 2290},
						{name: 'May', Critical: 2780, High: 3908, Low:1000, amt: 2000},
						{name: 'June', Critical: 1890, High: 4800, Low:1000, amt: 2181},
						{name: 'July', Critical: 2390, High: 3800, Low:1000, amt: 2500},
						{name: 'August', Critical: 3490, High: 4300, Low:1000, amt: 2100},
						],
            hackerData:[
                  {name: 'January', uv: 4000, pv: 2400, amt: 2400},
                  {name: 'February', uv: 3000, pv: 1398, amt: 2210},
                  {name: 'March', uv: 2000, pv: 9800, amt: 2290},
                  {name: 'April', uv: 2780, pv: 3908, amt: 2000},
                  {name: 'May', uv: 1890, pv: 4800, amt: 2181},
                  {name: 'June', uv: 2390, pv: 3800, amt: 2500},
                  {name: 'July', uv: 3490, pv: 4300, amt: 2100},
                  {name: 'August', uv: 3490, pv: 4300, amt: 2100},
                  {name: 'September', uv: 3490, pv: 4300, amt: 2100},
                  {name: 'October', uv: 2390, pv: 3800, amt: 2500},
                  {name: 'November', uv: 3490, pv: 4300, amt: 2100},
                  {name: 'December', uv: 3490, pv: 4300, amt: 2100},

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
                "date":0,"client":0,"num_critical":0,"num_high":0,"num_medium":0,"num_low":0,"num_info":0,
                "num_sans_1":0,"num_sans_2":0,"num_sans_3":0,"num_sans_4":0,"num_sans_5":0,"num_sans_6":0,"num_sans_7":0,"num_sans_8":0,"num_sans_9":0,"num_sans_10":0,
                "num_sans_11":0,"num_sans_12":0,"num_sans_13":0,"num_sans_14":0,"num_sans_15":0,"num_sans_16":0,"num_sans_17":0,"num_sans_18":0,"num_sans_19":0,"num_sans_20":0,
                "num_sans_21":0,"num_sans_22":0,"num_sans_23":0,"num_sans_24":0,"num_sans_25":0,"num_owasp_1":0,"num_owasp_2":0,"num_owasp_3":0,"num_owasp_4":0,"num_owasp_5":0,
                "num_owasp_6":0,"num_owasp_7":0,"num_owasp_8":0,"num_owasp_9":0,"num_owasp_10":0,"num_configuration_management":0,"num_data_confidentiality":0,"num_error_handling":0,
                "num_session_management":0,"num_data_validation":0,"num_authorization":0,"num_authentication":0,"num_input_validation":0,"num_auditing_and_logging":0,
                "num_architecture":0,"num_other_category":0,
            },
            riskCounts:{},
            typeCounts:{},
            secCounts:{},
            //dateCounts: {jan:0,feb:0,mar:0,apr:0,may:0,jun:0,jul:0,aug:0,sep:0,oct:0,nov:0,dec:0,}
          //  dateCounts: [0,0,0,0,0,0,0,0,0,0,0,0],  // index 0 = jan, index 1 = feb, ... index 11=dec
            // index 0 = jan, index 1 = feb, ... index 11=dec, --> objects of num_critical, num_high, etc for each month
            dateCounts: [{name:"January","num_critical":0,"num_high":0,"num_medium":0,"num_low":0,"num_info":0},{name:"February","num_critical":0,"num_high":0,"num_medium":0,"num_low":0,"num_info":0},{name:"March","num_critical":0,"num_high":0,"num_medium":0,"num_low":0,"num_info":0},
              {name:"April","num_critical":0,"num_high":0,"num_medium":0,"num_low":0,"num_info":0},{name:"May","num_critical":0,"num_high":0,"num_medium":0,"num_low":0,"num_info":0},{name:"June","num_critical":0,"num_high":0,"num_medium":0,"num_low":0,"num_info":0},
              {name:"July","num_critical":0,"num_high":0,"num_medium":0,"num_low":0,"num_info":0},{name:"August","num_critical":0,"num_high":0,"num_medium":0,"num_low":0,"num_info":0},{name:"September","num_critical":0,"num_high":0,"num_medium":0,"num_low":0,"num_info":0},
              {name:"October","num_critical":0,"num_high":0,"num_medium":0,"num_low":0,"num_info":0},{name:"November","num_critical":0,"num_high":0,"num_medium":0,"num_low":0,"num_info":0},{name:"December","num_critical":0,"num_high":0,"num_medium":0,"num_low":0,"num_info":0},],  

  		}  // /this.state 

      console.log("SUMS")
      console.log(this.state.dashboardSums);
      let dataArray = RefData.DASHBOARD;
      let ignore = new Set(["date",
              "client",
   //           "num_critical",
   //           "num_high",
   //           "num_medium",
   //           "num_low",
   //           "num_info"
   ]);

      let data = RefData.DASHBOARD;
      let tempCounts = { "num_critical":0,
          "num_high":0,"num_medium":0,"num_low":0,"num_info":0,"num_sans_1":0,"num_sans_2":0,"num_sans_3":0,"num_sans_4":0,"num_sans_5":0,"num_sans_6":0,"num_sans_7":0,"num_sans_8":0,"num_sans_9":0,
          "num_sans_10":0,"num_sans_11":0,"num_sans_12":0,"num_sans_13":0,"num_sans_14":0,"num_sans_15":0,"num_sans_16":0,"num_sans_17":0,"num_sans_18":0,"num_sans_19":0,"num_sans_20":0,"num_sans_21":0,
          "num_sans_22":0,"num_sans_23":0,"num_sans_24":0,"num_sans_25":0,"num_owasp_1":0,"num_owasp_2":0,"num_owasp_3":0,"num_owasp_4":0,"num_owasp_5":0,"num_owasp_6":0,
          "num_owasp_7":0,"num_owasp_8":0,"num_owasp_9":0,"num_owasp_10":0,"num_configuration_management":0,"num_data_confidentiality":0,"num_error_handling":0,"num_session_management":0,
          "num_data_validation":0,"num_authorization":0,"num_authentication":0,"num_input_validation":0,"num_auditing_and_logging":0,"num_architecture":0,"num_other_category":0,
      };

      let dateMap = {}

      // objs in response array
      for (var i in data) {
        let obj = data[i];
        // item in obj
        for(var k in obj) {
          if (!ignore.has(k)) { //if not client, num_critical, etc. add sum
             tempCounts[k] += data[i][k];
          }
          else if (k === "date") {
            // increment that months critical, high, medium, low, info counts 
            this.state.dateCounts[ new Date( data[i][k] ).getMonth() ]["num_critical"] += data[i]["num_critical"];
            this.state.dateCounts[ new Date( data[i][k] ).getMonth() ]["num_high"] += data[i]["num_high"];
            this.state.dateCounts[ new Date( data[i][k] ).getMonth() ]["num_medium"] += data[i]["num_medium"];
            this.state.dateCounts[ new Date( data[i][k] ).getMonth() ]["num_low"] += data[i]["num_low"];
            this.state.dateCounts[ new Date( data[i][k] ).getMonth() ]["num_info"] += data[i]["num_info"];
          }

        }
      }
      console.log("DateCounts")
      console.log(this.state.dateCounts);
 //     tempCounts['date'] = this.state.dashboardSums.date;
 //     tempCounts['client'] = this.state.dashboardSums.client;

    // loop through obj array returned from api
    // if not client or date, sum values and store in temp object for
    // this.state.dashboardSums and increment each item by amount in current object
    // at

    // use dashboardSums for values in each section under the grid

    // create seperate timeline for num_critical/high/med etc to show those 
    // counts over time in bar graph
    // link to actual api call instead of refData
    // where hackers num coming from?
    // use numbers to display in horizontal bar charts?
      this.state.dashboardSums = tempCounts;

      for (var o in tempCounts) {
        if (o.indexOf("num_critical") > -1) {this.state.riskCounts[o] = tempCounts[o];}
        else if (o.indexOf("num_high") > -1) {this.state.riskCounts[o] = tempCounts[o];}
        else if (o.indexOf("num_medium") > -1) {this.state.riskCounts[o] = tempCounts[o];}
        else if (o.indexOf("num_low") > -1) {this.state.riskCounts[o] = tempCounts[o];}
        else if (o.indexOf("num_info") > -1) {this.state.riskCounts[o] = tempCounts[o];}
        
        else if (o.indexOf("sans") > -1 || o.indexOf("owasp") > -1) {this.state.secCounts[o] = tempCounts[o];}
        else {
            this.state.typeCounts[o] = tempCounts[o];
        }
     }
  }

  render() {
    return (
    	<div class="container">
    	<div class="row">
    	<div class="col-md-12">
		   <BarChart width={1000} height={300} data={this.state.dateCounts}
            margin={{top: 20, right: 0, left: 0, bottom: 5}}>
       <Legend />

       <XAxis dataKey="name" tickLine={false} padding={{ bottom: 10 }}/>
       <YAxis tickLine={false} padding={{ left: 10 }}/>
       <CartesianGrid strokeDasharray="1  1"/>
       <Tooltip/>
       <Bar dataKey="num_critical" stackId="a" fill="#CB181D" />
       <Bar dataKey="num_high" stackId="a" fill="#FCAE91" />
       <Bar dataKey="num_medium" stackId="a" fill="#FEE5D9" />
       <Bar dataKey="num_low" stackId="a" fill="#FEE5D9" />
       <Bar dataKey="num_info" stackId="a" fill="#FEE5D9" />
      </BarChart>
     <div class="simple-area">
      <AreaChart width={940} height={60} data={this.state.hackerData}
            margin={{top: 5, right: 0, left: 0, bottom: 5}}>
        <Area type='monotone' dataKey='uv' stroke='#ECECEC' fill='#CCC' />
      </AreaChart>
    </div>
      </div>
      </div>

      <div class="row margin-left-90">
      <div class="col-md-3">
       
       <div class="simple-list-div">
       <h5>Risk Levels</h5>
       	<DashboardList list={this.state.riskCounts} />
       </div>
      </div>
      <div class="col-md-4" >
       <div class="simple-list-div">
       <h5>Categories</h5>
       	<DashboardList list={this.state.typeCounts} />
       </div>
      </div>
      <div class="col-md-3">
       <div class="simple-list-div">
       <h5>OWASP Top 10</h5>
       	<DashboardList list={this.state.secCounts} />
       </div>
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-4"></div>
      </div>
    </div>);
  }

}