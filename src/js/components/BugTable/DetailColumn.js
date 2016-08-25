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

	decisionClicked(e) {
		const decision = e.target.value
		this.props.handleSubmission(decision);
	}

	render() {
		let displayNone = {display:'none'};
		// if no details set, display some message
		if (!this.props.details.id)
			return(<div class="null-detail">No details to display</div>);

		return (
			<div>
			<div class="detail-header sidebar-header">
			<div>
				<strong class="float-left active-item">Details</strong>
				<strong class="float-right" style={displayNone}>Activity</strong>
			</div>
			</div>
			<div id="detail-body">
			<div><h5>Bug ID: <span class="blue">{this.props.details['id']}</span></h5></div>
			<br></br>
			<div class={"detail-risk-"+this.props.vulnerability.risk_level}>Risk level: {this.props.vulnerability.risk_level} </div>
			<div class="threat-description">
				<strong>{this.props.vulnerability.title}</strong>
				<br></br>
				{this.strip(this.props.vulnerability.description)}
			</div>
			
			<button class="btn btn-primary detail-btn" value="approved" onClick={this.decisionClicked.bind(this)}>Accept</button>
			<button class="btn btn-danger detail-btn" value="rejected" onClick={this.decisionClicked.bind(this)}>Reject</button>

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