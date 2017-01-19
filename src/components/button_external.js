import React, { Component } from 'react';

export default class Description extends Component {
	render() {
		const {props} = this;
		return (
			<div>
				<h4>{props.text}</h4>
				<a className="link-box" href={props.link} target="_blank">{props.button_text}</a>
					<br />
			</div>
		);
	}
}
