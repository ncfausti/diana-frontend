import React from 'react';
import CheckFilter from '../Filters/CheckFilter';
export default class FilterColumn extends React.Component {
	render() {
		return (
			<div>
			<div id="filter-header" class="sidebar-header">
				<div>
				<strong class="float-left active-item">Filters</strong>
				<strong class="float-right">Columns</strong>
				</div>
			</div>
			<div class="filterColumnSection">
			<strong>Status</strong>
			<CheckFilter name="Verified" setFilter={this.props.setFilter} />
			<CheckFilter name="Not verified" setFilter={this.props.setFilter} />
			<CheckFilter name="Duplicate" setFilter={this.props.setFilter} />
			</div>
			<div class="filterColumnSection">
			<strong>Risk</strong>
			<CheckFilter name="Critical" setFilter={this.props.setFilter}  />
			<CheckFilter name="High" setFilter={this.props.setFilter} />
			<CheckFilter name="Medium" setFilter={this.props.setFilter} />
			<CheckFilter name="Low" setFilter={this.props.setFilter} />
			<CheckFilter name="Info" setFilter={this.props.setFilter} />
			</div>
			<div class="filterColumnSection">
			<strong>Type</strong>
			<CheckFilter name="SQL Injection" setFilter={this.props.setFilter} />
			<CheckFilter name="Cross-site Scripting" setFilter={this.props.setFilter} />
			<CheckFilter name="TLS v1.0 Enables" setFilter={this.props.setFilter} />
			<CheckFilter name="Clickjacking" setFilter={this.props.setFilter} />
			<CheckFilter name="Open Direction" setFilter={this.props.setFilter} />
			</div>
			</div>
		);
	}
}