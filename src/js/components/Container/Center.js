import React from 'react';
import BugTable from '../BugTable';

export default class Title extends React.Component {
	render() {
		// override materialize.css style
		var h3Style = {
  			fontSize:'1.2em',
  			fontWeight:100,
  			display:'inline-block'
		};
		return (
			<div>
			<BugTable />
			</div>
		);
	}
}