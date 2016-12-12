import React, { Component } from 'react';

export default class Description extends Component {
	render() {
		const {props} = this;
		return (
			<div>
				Description
				<h3>{props.node.text}</h3>
			</div>
		);
	}
}
