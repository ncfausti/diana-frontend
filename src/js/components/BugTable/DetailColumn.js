import React from 'react';
export default class DetailColumn extends React.Component {
	constructor() {
		super();
	}

	strip(html)
	{
	   var tmp = document.createElement("DIV");
	   tmp.innerHTML = html;
	   return tmp.textContent || tmp.innerText || "";
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
			<div><h5>Bug ID: <span class="blue">{this.props.details['id']}</span></h5></div>
			<br></br>
			<div class={"detail-risk-"+this.props.vulnerability.risk_level}>Risk level: 
			{this.props.vulnerability.risk_level} </div>
			<div class="threat-description">
				<strong>{this.props.vulnerability.title}</strong>
				<br></br>
				{this.strip(this.props.vulnerability.description)}
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