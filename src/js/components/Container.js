import React from 'react';
import Center from './Container/Center';
import DetailColumn from './Container/DetailColumn';
import FilterColumn from './Container/FilterColumn';
import RefData from '../RefData';

export default class Container extends React.Component {
	handleChange(e) {
		const newTitle = e.target.value;
		this.props.changeTitle(newTitle);
	}
	render() {
		return (
			<div class="row">
			<div id="filterColumn" class="col-md-2"><FilterColumn /></div>
			<div id="centerColumn" class="col-md-8"><Center /></div>
			<div id="detailColumn" class="col-md-2"
				 details={RefData.DETAILS.id}
			><DetailColumn /></div>
			</div>
		);
	}
}