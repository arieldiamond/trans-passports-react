import React, { Component } from 'react';

export default class Question extends Component {
	render() {
		const {props} = this;
		return (
			<div>
				<h2>{props.title}</h2>
			</div>
		);
	}
}
