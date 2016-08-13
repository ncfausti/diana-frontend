import React from 'react';
import CheckFilter from '../Filters/CheckFilter';
export default class FilterColumn extends React.Component {
	render() {
		// override materialize.css style
		var h3Style = {
  			fontSize:'1.2em',
  			fontWeight:100,
  			display:'inline-block'
		}
		return (
			<div>
			<div id="filter-header"><strong>Filters</strong></div>
			<div class="filterColumnSection">
			<CheckFilter name="Open" />
			<CheckFilter name="Accepted" />
			<CheckFilter name="Rejected" />
			<CheckFilter name="Awarded" />
			</div>
			<div class="filterColumnSection">
			<CheckFilter name="Open"  />
			<CheckFilter name="Accepted" checked=""/>
			<CheckFilter name="Rejected" />
			<CheckFilter name="Awarded" />
			</div>
			<div class="filterColumnSection">
			<CheckFilter name="Open"  />
			<CheckFilter name="Accepted" checked=""/>
			<CheckFilter name="Rejected" />
			<CheckFilter name="Awarded" />
			</div>
			</div>
		);
	}
}