import React from 'react';

export default class SubmissionInfoSection extends React.Component {
	constructor() {
		super()
		this.state = {
	//		details:{id:'0038c248-400d-4150-bcbb-ff6b8be10c3a'}
		}

	}
	render() {
		return (
			<div id="infoSection">
			<h2>113 bugs accepted <span class="light">from 200 submissions</span></h2>
			<span class="summary-text float-right">
			
			<span class="float-left summary-col"><strong>83 Bugs</strong><br></br><span>SQUASHED</span></span>			
			<span class="float-left summary-col"><strong>$300K</strong><br></br><span>SAVED ($5.2K AWARDED)</span></span>
			<span class="float-left summary-col"><strong>102 HOURS</strong><br></br><span>SAVED</span></span>
			</span>
			</div>
			);
	}
}