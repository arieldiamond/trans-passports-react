import React, { Component } from 'react';

export default class Question extends Component {
	render() {
		const {props} = this;
		return (
			<div>
				<h3>{props.node.text}</h3>
			</div>
		);
	}
}
