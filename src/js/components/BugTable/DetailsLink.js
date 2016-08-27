import React from 'react';
import { Router, Link} from 'react-router';

export default class DetailsLink extends React.Component {
	
	render() {
		let rowID = this.props.params.data.id;

		return (
			// this.props.params.data comes from tableData in BugsTable
			<Link to={"/details/xyz/"}>hi</Link>
			)
	}
}
//value.substr(params.value.length - 4)