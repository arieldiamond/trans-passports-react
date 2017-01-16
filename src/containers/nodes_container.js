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

	displayNext(node) {
		const next = JSON.parse(node.next);
		const buttons =	[]

		next.map(a => {
			if(a.next_on_complete) {
				this.pushToRecommendations();
			} else {
				buttons.push({node: this.props.nodes[a.key], label: a.label, key: a.key});
			}
		})

		if(buttons.length === 1) {
			const nextNode = buttons[0];
			const text = nextNode.label ? nextNode.label : 'Next!';
			return this.answerButton(nextNode.key, nextNode.node, text);

		}	else if(buttons.length > 1) {
			return buttons.map((b, key) => {
				if (b.node && b.node.next) {
					const text = b.label ? b.label : b.node.text;
					const nextKey = b.node.next ? JSON.parse(b.node.next) : null;
					if (nextKey.length > 0) {
						const next = this.props.nodes[nextKey[0].key]
						return this.answerButton(b.key, next, text);
					} else {
						if (this.props.recommendations.length > 0) {
	  					this.pushToRecommendations();
						} else {
							// return this.answerButton(b.key, next, text);
						}
	  			}
	  		}
	  	})
		}	else {
			this.pushToRecommendations();
		}
	}

	handleClick(key, node) {
		this.props.addResult(key, JSON.parse(this.props.currentNode.node.result));
		this.props.setCurrentNode(key, node);
	}

	answerButton(key, nextNode, text) {
		return (<div key={key}><button onClick={() => this.handleClick(key, nextNode)}>{text}</button><br /></div>)
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
		if(this.props.currentNode.node.next_on_complete) {
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
					{this.displayNext(this.props.currentNode.node)}
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
