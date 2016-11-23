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
		const nextQ = this.props.questions.filter(q => q.order === order);
		this.props.setCurrentQuestion(order, nextQ);
	}

	startingOver(e) {
		e.preventDefault();
		this.props.startOver();
	}

	render() {
		if (this.props.currentQuestion.length === 0) {
			return <button onClick={() => {this.handleClick(1)}}>Let's Get Started!</button>
		} else {
			const question = this.props.currentQuestion[0];
			return(
				<div>
					<h2>{question.topic}</h2>
					{ question.answers.map( (a, key) => {
						return <div key={key}><button onClick={() => {this.handleClick(a.next_question_id)}}>{a.answer_text}</button></div>
					})}
					<button onClick={this.startingOver}>Start Over</button>
				</div>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		questions: state.questions,
		currentQuestion: state.currentQuestion
	};
}

export default connect( mapStateToProps, { fetchQuestions, setCurrentQuestion, startOver } )(QuestionsContainer);
