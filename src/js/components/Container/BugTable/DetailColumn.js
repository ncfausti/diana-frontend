import React from 'react';
export default class DetailColumn extends React.Component {
	constructor() {
		super();	
	}

	render() {
		return (
			<div>
			<div class="detail-header sidebar-header">
			<div>
				<strong class="float-left active-item">Details</strong>
				<strong class="float-right">Activity</strong>
			</div>
			</div>
			<div id="detail-body">
			<div><h5>Bug ID: <span class="blue">{this.props.selectedRows.id}</span></h5></div>
			<br></br>
			<div class={"detail-risk-"+this.props.selectedRows.risk_level}>{this.props.selectedRows.risk_level} Risk</div>
			<div class="threat-description">
				<strong>{this.props.selectedRows.vulnerability}</strong>
				<br></br>
				{this.props.selectedRows.vulnerability_desc}
			</div>
			
			<div class="btn btn-primary detail-btn">Accept</div>
			<div class="btn btn-danger detail-btn">Reject</div>

			<hr></hr>
			<div><strong>References</strong></div>

			<a href="http://wikipedia.org" target="_blank">Wikipedia</a>
			<br></br>
			<a href="http://owasp.org" target="_blank">OWASP</a>
			</div>

			</div>
		);
	}
}