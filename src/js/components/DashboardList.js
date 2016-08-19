import React from 'react';

export default class DashboardList extends React.Component {
	render() {
      return (
        React.createElement("ul", null, this.props.list.map(function(listValue){
            	return React.createElement("li", null, listValue);
             })
            )
        )
	}
}