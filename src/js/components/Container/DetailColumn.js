import React from 'react';

export default class DetailColumn extends React.Component {
	render() {
		// override materialize.css style
		var h3Style = {
  			fontSize:'1.2em',
  			fontWeight:100,
  			display:'inline-block'
		};

		return (
			<div>
			<div class="detail-header sidebar-header">
			
			<div>
				<strong class="float-left">Details</strong>
				<strong class="float-right">Activity</strong>
			</div>
			</div>
			<div id="detail-body">
			<div><h5>Bug ID: <span class="blue">{2010}</span></h5></div>
			<br></br>
			<div class={"detail-risk-high"}>High Risk</div>
			<div class="threat-description">Description of vulnerability
			Description of vulnerability
			Description of vulnerability
			Description of vulnerability
			Description of vulnerability
			</div>
			
			<div class="btn btn-primary detail-btn">Accept</div>
			<div class="btn btn-danger detail-btn">Reject</div>

			<hr></hr>
			<div><strong>References</strong></div>

			<a href="http://wikipedia.org">Wikipedia</a>
			<br></br>
			<a href="http://owasp.org">OWASP</a>
			</div>

			</div>
		);
	}
}