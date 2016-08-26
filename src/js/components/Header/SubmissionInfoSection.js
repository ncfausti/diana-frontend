import React from 'react';

export default class SubmissionInfoSection extends React.Component {
	constructor() {
		super()
		this.state = {
			details:{id:'0038c248-400d-4150-bcbb-ff6b8be10c3a'}
		}
	}
	render() {
		return (
			<div id="infoSection">
			<h2>113 bugs accepted <span class="light">from 200 submissions</span></h2>
			</div>
			);
	}
}