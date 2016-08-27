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
			<CheckFilter name="open" changeFilter={this.props.changeFilter} />
			<CheckFilter name="approved" changeFilter={this.props.changeFilter} />
			<CheckFilter name="rejected" changeFilter={this.props.changeFilter} />
			</div>
			<div class="filterColumnSection">
			<strong>Risk</strong>
			<CheckFilter name="Critical" changeFilter={this.props.changeFilter}  />
			<CheckFilter name="High" changeFilter={this.props.changeFilter} />
			<CheckFilter name="Medium" changeFilter={this.props.changeFilter} />
			<CheckFilter name="Low" changeFilter={this.props.changeFilter} />
			<CheckFilter name="Info" changeFilter={this.props.changeFilter} />
			</div>
			<div class="filterColumnSection">
			<strong>Type</strong>
			<CheckFilter name="SQL Injection" changeFilter={this.props.changeFilter} />
			<CheckFilter name="Cross Site Scripting" changeFilter={this.props.changeFilter} />
			<CheckFilter name="TLS v1.0 Enabled" changeFilter={this.props.changeFilter} />
			<CheckFilter name="DOM-Based XSS" changeFilter={this.props.changeFilter} />
			<CheckFilter name="Weak TLS Ciphers" changeFilter={this.props.changeFilter} />
			<CheckFilter name="SSL Cipher" changeFilter={this.props.changeFilter} />
			</div>
			</div>
		);
	}
}