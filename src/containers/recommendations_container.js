import React, { Component, PropTypes } from 'react';
import thunk from 'redux-thunk'
import { connect } from 'react-redux';
import { setCurrentNode, startOver } from '../actions/index';
import { Link, browserHistory } from 'react-router';
import ExternalButton from '../components/button_external';

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
		const recs = this.props.recommendations;
		const results = this.props.results;
		const myRecs = []

		if (results.eligible) {
			myRecs.push(recs.ds_11)
		}

		return myRecs;
	}

	startingOver(e) {
		e.preventDefault();
		this.props.startOver();
		this.props.setCurrentNode('intro:d:intro', this.props.nodes['intro:d:intro']);
		this.context.router.push('/');
	}

	render() {
		const myRecs = this.collectRecommendations();
		const recs = this.props.recommendations;
		const results = this.props.results;
		if (results.eligible && results.change_gender) {
			return (
				<div>
					<h3>You made it!</h3>
					<p>If you follow these steps, you'll have a new passport in a few weeks.</p>
					<p>This is what you need to do:</p>
					<ol>
						{ myRecs.map( (r, key) => {
							return (
								<li key={key}><ExternalButton text={r.text} link={r.resource} button_text={r.button_text} /></li>
							)
						})}
					</ol>
					<button className='start-over' onClick={this.startingOver}>Start Over</button>
				</div>
			);
		} else if (results.no_change) {
			return (
				<div>
					<ExternalButton text={recs.no_change.text} link={recs.no_change.resource} button_text={recs.no_change.button_text} />
					<button className='start-over' onClick={this.startingOver}>Start Over</button>
				</div>
			)
		} else if (!results.citizen) {
			return (
			  <div>
			  	<ExternalButton text={recs.apply_citizen.text} link={recs.apply_citizen.resource} button_text={recs.apply_citizen.button_text} />
					<button className='start-over' onClick={this.startingOver}>Start Over</button>
				</div>
			)
		} else {
			return (<div>boop <button className='start-over' onClick={this.startingOver}>Start Over</button></div>)
		}
	}
}

function mapStateToProps(state) {
	return {
		nodes: state.nodes,
		currentNode: state.currentNode,
		history: state.history,
		results: state.results,
		recommendations: state.recommendations
	};
}

export default connect( mapStateToProps, { setCurrentNode, startOver } )(RecommendationsContainer);
