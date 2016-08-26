import React from 'react';
import Title from './Header/Title';
import TopNav from './Header/TopNav';
import SubmissionInfoSection from './Header/SubmissionInfoSection';

export default class Header extends React.Component {
	handleChange(e) {
		const newTitle = e.target.value;
		this.props.changeTitle(newTitle);
	}
	render() {
		return (
			<header>
			<span class="navHeaderSpan"></span>
			<Title title={this.props.title} />
			<TopNav />
			<SubmissionInfoSection />
			</header>
		);
	}
}