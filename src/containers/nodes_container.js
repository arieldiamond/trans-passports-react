import React, { Component, PropTypes } from 'react';
import thunk from 'redux-thunk'
import { connect } from 'react-redux';
import { processNodes, setCurrentNode, addRecommendation, startOver } from '../actions/index';
import { Link, browserHistory } from 'react-router';
import transPassportsData from '!json!../data/trans_passports_data.json';
import Question from '../components/question';
import Description from '../components/description';
import Recommendation from '../components/recommendation';

class NodesContainer extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	constructor(props) {
		super(props);

		this.displayNext = this.displayNext.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.button = this.button.bind(this);
		this.deliverRecommendations = this.deliverRecommendations.bind(this);
		this.startingOver = this.startingOver.bind(this);
	}

	componentWillMount() {
		this.props.processNodes(transPassportsData)
		.then((nodes) => {
			this.props.setCurrentNode('intro:d:intro', this.props.nodes['intro:d:intro']);
		})
	}

	displayNext(node) {
		const next = JSON.parse(node.next);
		const buttons =	[]

		next.map(a => {
			if(a.next_on_complete) {
				this.deliverRecommendations();
			} else {
				buttons.push({node: this.props.nodes[a.key], label: a.label, key: a.key});
			}
		})

		if(buttons.length === 1) {
			const nextNode = buttons[0];
			const text = nextNode.label ? nextNode.label : 'Next!';
			return this.button(nextNode.key, nextNode.node, text);

		}	else if(buttons.length > 1) {
			return buttons.map((b, key) => {
				if (b.node && b.node.next) {
					const text = b.label ? b.label : b.node.text;
					const nextKey = b.node.next ? JSON.parse(b.node.next) : null;
					if (nextKey.length > 0) {
						const next = this.props.nodes[nextKey[0].key]
						return this.button(b.key, next, text);
					} else {
						if (this.props.recommendations.length > 0) {
	  					this.deliverRecommendations();
						} else {
							// return this.button(b.key, next, text);
						}
	  			}
	  		}
	  	})
		}	else {
			this.deliverRecommendations();
		}
	}

	handleClick(key, node) {
		this.props.addRecommendation(key, JSON.parse(this.props.currentNode.node.result));
		this.props.setCurrentNode(key, node);
	}

	button(key, nextNode, text) {
		return (<div key={key}><button onClick={() => this.handleClick(key, nextNode)}>{text}</button><br /></div>)
	}

	// TODO: finish
	deliverRecommendations() {
		const recNextNodes = JSON.parse(this.props.currentNode.node.next);
		if (recNextNodes.length === 1 && recNextNodes[0].resource) {
			return (<div><a className="link-box" href={recNextNodes[0].resource} target="_blank">{recNextNodes[0].label}</a><br /></div>)
		}
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
				  <h3>{this.props.currentNode.node.text}</h3>
				  {this.deliverRecommendations()}
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
		recommendations: state.recommendations
	};
}

export default connect( mapStateToProps, { processNodes, setCurrentNode, addRecommendation, startOver } )(NodesContainer);
