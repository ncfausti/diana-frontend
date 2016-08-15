import React from 'react';
import CheckFilter from '../../Filters/CheckFilter';
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
			<CheckFilter name="Verified" filterChecked={this.props.filterChecked} />
			<CheckFilter name="Not verified" filterChecked={this.props.filterChecked} />
			<CheckFilter name="Duplicate" filterChecked={this.props.filterChecked} />
			</div>
			<div class="filterColumnSection">
			<strong>Risk</strong>
			<CheckFilter name="Critical" filterChecked={this.props.filterChecked}  />
			<CheckFilter name="High" filterChecked={this.props.filterChecked} />
			<CheckFilter name="Medium" filterChecked={this.props.filterChecked} />
			<CheckFilter name="Low" filterChecked={this.props.filterChecked} />
			<CheckFilter name="Info" filterChecked={this.props.filterChecked} />
			</div>
			<div class="filterColumnSection">
			<strong>Type</strong>
			<CheckFilter name="SQL Injection" filterChecked={this.props.filterChecked} />
			<CheckFilter name="Cross-site Scripting" filterChecked={this.props.filterChecked} />
			<CheckFilter name="TLS v1.0 Enables" filterChecked={this.props.filterChecked} />
			<CheckFilter name="Clickjacking" filterChecked={this.props.filterChecked} />
			<CheckFilter name="Open Direction" filterChecked={this.props.filterChecked} />
			</div>
			</div>
		);
	}
}