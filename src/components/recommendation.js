import React, { Component } from 'react';

export default class Recommendation extends Component {
	render() {
		const {props} = this;
		return (
			<div>
				Recommendation
				<h3>{props.node.text}</h3>

			</div>
		);
	}
}
