import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions, getNextQuestion, setCurrentQuestion, startOver } from '../actions/index';
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

	handleClick(key) {
		const history = this.props.history;
		this.props.getNextQuestion(key, history);
	}

	startingOver(e) {
		e.preventDefault();
		this.props.startOver();
	}

	render() {
		if (this.props.history.length === 0) {
			return (
			  <div>
			  	<p>This tool is for transgender and non-binary Americans who need to change the gender on their passports. No matter where you are in your transition or what documents you have, we can help!</p>
			 	 	<button onClick={() => {this.handleClick('start')}}>Let's Get Started!</button>
					<button className="start-over" onClick={this.startingOver}>Start Over</button>
			 	</div>
			)
		} else {
			const question = this.props.currentQuestion;
			return(
				<div>
					<h2>{question.question_text}</h2>
					<h3>{question.subtitle}</h3>
					{ question.answers.map( (a, key) => {
						return (
						  <div key={key}>
						   	<button onClick={() => {this.handleClick(a.next_question_id)}}>{a.answer_text}</button>
						  </div>
						)
					})}
					<button className="start-over" onClick={this.startingOver}>Start Over</button>
				</div>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		questions: state.questions,
		history: state.history,
		currentQuestion: state.currentQuestion
	};
}

export default connect( mapStateToProps, { fetchQuestions, getNextQuestion, setCurrentQuestion, startOver } )(QuestionsContainer);
