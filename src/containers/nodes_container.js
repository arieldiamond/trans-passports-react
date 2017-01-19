import React, { Component, PropTypes } from 'react';
import thunk from 'redux-thunk'
import { connect } from 'react-redux';
import { processNodes, processRecommendations, setCurrentNode, addResult, startOver } from '../actions/index';
import { Link, browserHistory } from 'react-router';
import transPassportsData from '!json!../data/trans_passports_data.json';
import recommendationsData from '!json!../data/recommendations_data.json';

class NodesContainer extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	constructor(props) {
		super(props);

		this.displayNext = this.displayNext.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.answerButton = this.answerButton.bind(this);
		this.pushToRecommendations = this.pushToRecommendations.bind(this);
		this.startingOver = this.startingOver.bind(this);
	}

	componentWillMount() {
		this.props.processNodes(transPassportsData)
		.then((nodes) => {
			this.props.setCurrentNode('intro:d:intro', this.props.nodes['intro:d:intro']);
		})
		this.props.processRecommendations(recommendationsData);
	}

	displayNext(type, next) {
		const parsed = JSON.parse(next);
		const nextSteps =	[]

		parsed.map( n => {
			nextSteps.push({node: this.props.nodes[n.key], label: n.label, key: n.key});
		})

		if(type === 'description' || type === 'recommendation') {
			const text = nextSteps[0].label || 'Next!';
			return this.answerButton(nextSteps[0].key, nextSteps[0].node, text);
		} else if(type === 'question') {
			return nextSteps.map( n => {
				const text = n.label || n.node.text;
				return this.answerButton(n.key, n.node, text);
			})
		} else if(type === 'answer') {
			this.handleClick(nextSteps[0].key, nextSteps[0].node);
		}
	}

	answerButton(nextKey, nextNode, text) {
		return (<div key={nextKey}><button onClick={() => this.handleClick(nextKey, nextNode)}>{text}</button><br /></div>)
	}

	handleClick(nextKey, nextNode) {
		if (this.props.nodes[nextKey].result) {
			this.props.addResult(nextKey, JSON.parse(this.props.nodes[nextKey].result));
		}
		this.props.setCurrentNode(nextKey, nextNode);
	}

	pushToRecommendations() {
		const router = this.context.router;
		router.push('/recommendations');
	}

	startingOver(e) {
		e.preventDefault();
		this.props.startOver();
		this.props.setCurrentNode('intro:d:intro', this.props.nodes['intro:d:intro']);
	}

	render() {
		if(this.props.currentNode.node.next_on_complete || !this.props.currentNode.node.next) {
			return (
			  <div>
				  <h3>You're all done!</h3>
				  <button onClick={this.pushToRecommendations}>Get my to do list!</button>
				  <button className='start-over' onClick={this.startingOver}>Start Over</button>
				</div>
			)
		} else {
			return (
				<div>
					<h3>{this.props.currentNode.node.text}</h3>
					{this.displayNext(this.props.currentNode.node.type, this.props.currentNode.node.next)}
					<button className='start-over' onClick={this.startingOver}>Start Over</button>
				</div>
			)
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

export default connect( mapStateToProps, { processNodes, processRecommendations, setCurrentNode, addResult, startOver } )(NodesContainer);
