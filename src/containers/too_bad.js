import { Component } from 'react';
import { connect } from 'react-redux';
import { changeDisplay, setQuestionText, clearMovies, clearRecMovies } from '../actions/index';

class TooBad extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(response) {
		if (response === 'fresh') {
			this.props.dispatch(clearMovies());
			this.props.dispatch(setQuestionText('FRESH'));
		} else {
			this.props.dispatch(setQuestionText('TRY_AGAIN'));
		}
		this.props.dispatch(clearRecMovies());
		this.props.dispatch(changeDisplay('QUESTIONS'));
	}

	render() {
		return (
			<div className="movie-container too_bad">
				<h3>No worries, let's try again!</h3>
				<button type="button" onClick={this.handleSubmit.bind(null, 'more')}>I'd like to score more movies</button>
				<button type="button" onClick={this.handleSubmit.bind(null, 'fresh')}>I think I'll start fresh</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const movies = state.movies;
	const goodMovies = state.good_movies;

	return {
		movies: movies || {},
		goodMovies
	};
}

export default connect( mapStateToProps )(TooBad);
