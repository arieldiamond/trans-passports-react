import React, { Component, PropTypes } from 'react';
import thunk from 'redux-thunk'
import { connect } from 'react-redux';
import { processNodes, setCurrentNode, addRecommendation, startOver } from '../actions/index';
import { Link, browserHistory } from 'react-router';
import transPassportsData from '!json!../data/trans_passports_data.json';
import Question from '../components/question';
import Description from '../components/description';
import Recommendation from '../components/recommendation';
import Button from '../components/button';

class NodesContainer extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	constructor(props) {
		super(props);

		this.setDisplayType = this.setDisplayType.bind(this);
		this.displayNext = this.displayNext.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.deliverRecommendations = this.deliverRecommendations.bind(this);
		this.startingOver = this.startingOver.bind(this);
	}

	componentWillMount() {
		this.props.processNodes(transPassportsData)
		.then((nodes) => {
			this.props.setCurrentNode(this.props.nodes['intro:d:intro']);
		})
	}

	setDisplayType(currentNode) {
		let displays = {
			'question': <Question node={currentNode} />,
			'description': <Description node={currentNode} />,
			'recommendation': <Recommendation node={currentNode} />
		};
		return displays[currentNode.type] || <Description />;
	}

	displayNext(node) {
		const next = JSON.parse(node.next);
		const buttons =	[]
		next.map(a => {
			buttons.push({node: this.props.nodes[a.key], label: a.label, key: a.key});
		})
		if(buttons.length === 1) {
			const nextNode = buttons[0];
			console.log('i have one next option', nextNode);
			const text = nextNode.label ? nextNode.label : 'Next!';
			return (<div><button onClick={() => this.handleClick(nextNode.key, nextNode.node)}>{text}</button>
				<br /></div>)
		}	else if(buttons.length > 1) {
			console.log('i have more than one next option');
			return buttons.map((b, key) => {
				if (b.node && b.node.next) {
					const text = b.label ? b.label : b.node.text;
					const nextKey = b.node.next ? JSON.parse(b.node.next) : null;
					if (nextKey.length > 0) {
						console.log('I have more than one next next option');
						const next = this.props.nodes[nextKey[0].key]
						return (<div key={key}><button onClick={() => this.handleClick(b.key, next)}>{text}</button>
							<br /></div>)
					} else {
						console.log('i have more than one next but no next next');
						if (this.props.recommendations.length > 0) {
	  					this.deliverRecommendations();
						} else {
							return (<div key={key}><button onClick={() => this.handleClick(b.key, next)}>{text}</button><br /></div>)
						}
	  			}
	  		}
	  	})
		}	else {
			console.log('i have no next option');
			this.deliverRecommendations();
		}
	}

	handleClick(key, node) {
		console.log(this.props.currentNode.node.result);
		this.props.addRecommendation(key, this.props.currentNode.node.result);
		this.props.setCurrentNode(key, node);
	}

	deliverRecommendations() {
		if (this.props.recommendations) {
			this.props.recommendations.map( r => {
				console.log('RECOMMENDATION', r);
			})
		} else {
			console.log('no recommendations');
		}
	}

	startingOver(e) {
		e.preventDefault();
		this.props.startOver();
		this.props.setCurrentNode('intro:d:intro', this.props.nodes['intro:d:intro']);
	}

	render() {
		return (
			<div>
				{this.setDisplayType(this.props.currentNode.node)}
				{this.displayNext(this.props.currentNode.node)}
				<button className='start-over' onClick={this.startingOver}>Start Over</button>
			</div>
		)
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
