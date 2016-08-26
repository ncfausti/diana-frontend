import React from 'react';
import {Modal, Popover, Tooltip, OverlayTrigger, Button} from 'react-bootstrap';

export default class DetailColumn extends React.Component {
	constructor() {
		super();
		this.state = {showModal: false}
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

	 close() {
    	this.setState({ showModal: false });
	 }

	 open() {
	    this.setState({ showModal: true });
	  }


	render() {
		const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );
		let displayNone = {display:'none'};
		// if no details set, display some message
		if (!this.props.id)
			return(<div class="null-detail">No Details</div>);

		return (
			<div>
			<div class="detail-header sidebar-header">
			<div>
				<strong class="float-left active-item">Details</strong>
				<strong class="float-right" style={displayNone}>Activity</strong>
			</div>
			</div>
			<div id="detail-body">
			<div><h5>Bug ID: <span class="blue">{this.props.id.substr(this.props.id.length - 4)}</span></h5></div>
			<br></br>
			<div class={"detail-risk-"+this.props.risk_level}>{this.props.risk_level} Risk Level</div>
			
			<div class="threat-description">
				<strong>{this.props.vuln_title}</strong>
				<br></br>
				{this.strip(this.props.vuln_desc)}
			</div>
			
			<button class="btn btn-primary detail-btn" value="approved" onClick={this.decisionClicked.bind(this)}>Accept</button>
			<button class="btn btn-danger detail-btn" value="rejected" onClick={this.decisionClicked.bind(this)}>Reject</button>
			<hr></hr>
			<div><strong>Screenshots</strong></div>
			<div class="text-align-center screenshot-section">

			<a onClick={this.open.bind(this)}><img src="http://usabilitygeek.com/wp-content/uploads/2013/06/recommended-wordpress-security.jpg" height="150" width="150" class="details-screenshot"></img></a>
			{this.props.screenshots}
			</div>
			<hr></hr>
			<div><strong>References</strong></div>
			<br></br>

			<a href="http://wikipedia.org" target="_blank">Wikipedia</a>
			<br></br>
			<a href="http://owasp.org" target="_blank">OWASP</a>
			</div>

			<Modal show={this.state.showModal} onHide={this.close}>
	          <Modal.Body>
	            <hr />
				<img src="http://usabilitygeek.com/wp-content/uploads/2013/06/recommended-wordpress-security.jpg"></img>
	          </Modal.Body>
	          <Modal.Footer>
	            <Button onClick={this.close.bind(this)}>Close</Button>
	          </Modal.Footer>
        	</Modal>



			</div>
		);
	}
}