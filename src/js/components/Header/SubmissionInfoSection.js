import React from 'react';

export default class SubmissionInfoSection extends React.Component {
	render() {
		let bugID = 2010;
		var sectionStyle = {
			backgroundColor:'#fff',
		}
		var spanStyle = {
			color:'#111',
		}
		return (
			<div id="infoSection" style={sectionStyle}>
			<h2>113 bugs accepted</h2><i class="material-icons md-36">chevron_right</i>
			<span style={spanStyle}>Bug ID: {bugID}</span>
			</div>
		);
	}
}