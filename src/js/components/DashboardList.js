import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area} from 'recharts'

export default class DashboardList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			riskChartData:[
                  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
                  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
                  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
                  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
                  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
                  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
                  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
            ],
		  chartData:Object.keys(props.list).map(
        	function(k) { return { name:k,count:props.list[k] } }),
		  cssCount: (function(){
		  	let high = 0;
		  	for (var i in props.list) { 
		  		if (props.list[i] > high)
		  			high = props.list[i] 
		  	}
		  	return high;
		  })(),
    }
    console.log('chartdata')
	  console.log(this.state.chartData)
  }
	render() {
		let self = this;
    // height should be based off of number of items
      return (
      	<div>
        {
        	React.createElement("ul", null, Object.keys(self.props.list).map(function(k){
           	return React.createElement("li", null, (
           		<span><span class="dash-list-name" style={self.divStyle}>{k.replace('_',' ')}</span><span class="dash-list-val">{self.props.list[k]}</span></span>
           		));
             
             }))}
        </div>

        )
	}
}

/*

<div class="recharts-list-container">
        <BarChart width={300} height={300} data={this.state.chartData} barGap={0} barSize={30} layout="vertical">
	       <YAxis type="category" dataKey="name" interval={0} tickLine={false} axisLine={false} />
	       <XAxis dataKey="count" type="number" hide= {true} />
         <Bar dataKey='count' fill='#dedede'/>
        </BarChart>
        </div>
        
 */