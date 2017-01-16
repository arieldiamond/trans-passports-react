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
		const recs = this.props.recommendations;
		const results = this.props.results;
		const myRecommendations = []

		for (var key in recs) {
			myRecommendations.push(recs[key]);
		}

		myRecommendations.map( r => {

		})

		return myRecommendations;
	}

	startingOver(e) {
		e.preventDefault();
		this.props.startOver();
		this.props.setCurrentNode('intro:d:intro', this.props.nodes['intro:d:intro']);
		this.context.router.push('/');
	}

	render() {
		const myRecommendations = this.collectRecommendations();
		const results = this.props.results;
		if (results.eligible && results.change_gender) {
			return (
				<div>
					<h3>You made it!</h3>
					<p>If you follow these steps, you'll have a new passport in a few weeks.</p>
					<p>This is what you need to do:</p>
					<ol>
						{ myRecommendations.map( (r, key) => {
							return (
								<li key={key}>{r.text} <button onClick={this.startingOver}>{r.button_text}</button></li>
							)
						})}
					</ol>
					<button className='start-over' onClick={this.startingOver}>Start Over</button>
				</div>
			);
		} else if (results.no_change) {
			return (
				<div>
					Sorry about that<br />
					<button className='start-over' onClick={this.startingOver}>Start Over</button>
				</div>
			)
		} else {
			return (<div>boop<br />
					<button className='start-over' onClick={this.startingOver}>Start Over</button>
			</div>)
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
