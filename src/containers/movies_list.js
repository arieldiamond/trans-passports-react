import { Component } from 'react';
import { connect } from 'react-redux';
import SingleMovie from '../components/single_movie';
import Loading from '../components/loading';
import { changeDisplay } from '../actions/index';

class MoviesList extends Component {
	constructor(props) {
		super(props);
		this.renderMovies = this.renderMovies.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	renderMovies() {
		if (this.props.movies.length === 0 ) {
			return <Loading />;
		} else {
			const rec = this.props.movies.map(movie => {
				return <SingleMovie key={movie.tmdb_id} tmdb_id={movie.tmdb_id} title={movie.title} poster_path={movie.poster_path} overview={movie.overview} certification={movie.certification} genre={movie.genre} release_date={movie.release_date} />;
			});

			return (
				<div>
					<h3>I sure hope you like these movies!</h3>
					{rec}
					<button type="button" onClick={this.handleSubmit.bind(null, 'no')}>I don't love these.</button>
				</div>
			);
		}
	}

	handleSubmit() {
		this.props.dispatch(changeDisplay('TOO_BAD'));
	}

	render() {
		return (
			<div className="movie-container recommended">
				{this.renderMovies()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const movies = state.recommended;
	const question = state.question;
	const movie = state.movies.filter(m => m.tmdb_id === state.current_movie_id);

	return {
		movies: movies || {},
		question,
		movie
	};
}

export default connect(mapStateToProps)(MoviesList);
