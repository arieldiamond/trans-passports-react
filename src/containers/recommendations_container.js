import React, { Component, PropTypes } from 'react';
import thunk from 'redux-thunk'
import { connect } from 'react-redux';
import { setCurrentNode, startOver } from '../actions/index';
import { Link, browserHistory } from 'react-router';

class RecommendationsContainer extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	constructor(props) {
		super(props);

		this.collectRecommendations = this.collectRecommendations.bind(this);
		this.startingOver = this.startingOver.bind(this);
	}

	collectRecommendations() {
		const recNextNodes = JSON.parse(this.props.currentNode.node.next);
		if (recNextNodes.length === 1 && recNextNodes[0].resource) {
			return (<div><a className="link-box" href={recNextNodes[0].resource} target="_blank">{recNextNodes[0].label}</a><br /></div>)
		} else {
			return this.props.recommendations;
		}
		this.props.recommendations.map( r => {
			console.log(r);
		})
	}

	startingOver(e) {
		e.preventDefault();
		this.props.startOver();
		this.props.setCurrentNode('intro:d:intro', this.props.nodes['intro:d:intro']);
		this.context.router.push('/');
	}

	render() {
		return (
		  <div>
		  	<h3>You made it!</h3>
		  	<p>If you follow these steps, you'll have a new passport in a few weeks.</p>
		  	<p>This is what you need to do:</p>
		  	<ol>
		  		<li>Fill out this form: </li>
		  		<li>Get your doctor to fill out their details and print it on their letterhead: </li>
		  		<li>Go get a photo here: </li>
		  	</ol>
		  	<button className='start-over' onClick={this.startingOver}>Start Over</button>
		  </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		nodes: state.nodes,
		currentNode: state.currentNode,
		history: state.history,
		recommendations: state.recommendations
	};
}

export default connect( mapStateToProps, { setCurrentNode, startOver } )(RecommendationsContainer);
