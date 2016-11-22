import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions, setCurrentQuestion, startOver } from '../actions/index';
import { Link, browserHistory } from 'react-router';
import Question from '../components/question';
import Button from '../components/button';

class QuestionsContainer extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.startingOver = this.startingOver.bind(this);
	}

	componentWillMount() {
		this.props.fetchQuestions();
	}

	handleClick(order) {
		console.log('handling');
		// const nextQ = this.props.questions.filter(q => q.order === order);
		// this.props.setCurrentQuestion(order, nextQ);
	}

	startingOver(e) {
		e.preventDefault();
		this.props.startOver();
	}

	render() {
		// if (this.props.currentQuestion === []) {
		// 	return (
		// 	  <div>
		// 			<button onClick={this.handleClick(1)}>Start!</button>
		// 		</div>
		// 	)
		// } else {
			return (
			  <div>
					<p>I am a question</p>
				</div>
			)
		// 			<button	onClick={this.startingOver}>Start Over</button>
		// 		</div>
		// 	)
		// }
	}
}

function mapStateToProps(state) {
	return {
		questions: state.questions,
		currentQuestion: state.currentQuestion
	};
}

export default connect( mapStateToProps, { fetchQuestions, setCurrentQuestion, startOver } )(QuestionsContainer);
