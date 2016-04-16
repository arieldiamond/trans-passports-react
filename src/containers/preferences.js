import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, changeDisplay, clearRecMovies } from '../actions/index';
import SingleMovie from '../components/single_movie';
import Question from '../components/question';

class Preferences extends Component {
	constructor(props) {
		super(props);
		this.renderMovies = this.renderMovies.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.pickedGenres = this.pickedGenres.bind(this);
	}

	pickedGenres(loved) {
		// collect genre
		const lovedGenres = [];
		loved.map( movie =>
			movie.genre.map(g => lovedGenres.push(g[1]))
		);
		// count duplicates
		const counts = {};
		for (let i = 0; i < lovedGenres.length; i++)
			counts[lovedGenres[i]] = (counts[lovedGenres[i]] + 1) || 1;
			// sort by value
		const sorted = Object.keys(counts).sort(function(a, b){
			return counts[b]-counts[a];
		});
		// return first 2
		return sorted.slice(0, 2).join(' and ');
	}

	renderMovies() {
		return this.props.loved.map(movie => {
			return <SingleMovie key={movie.tmdb_id} tmdb_id={movie.tmdb_id} title={movie.title} poster_path={movie.poster_path} overview={movie.overview} certification={movie.certification} genre={movie.genre} release_date={movie.release_date} />;
		});
	}

	handleSubmit(response) {
		if (response === 'yes') {
			this.props.dispatch(changeDisplay('MOVIES_LIST'));
			this.props.dispatch(fetchMovies(this.props.loved.map(m => m.tmdb_id)));
		} else {
			this.props.dispatch(changeDisplay('TOO_BAD'));
			this.props.dispatch(clearRecMovies());
		}
	}

	render() {
		return (
			<div className="movie-container preferences">
				<Question text={this.props.question + ' ' + this.pickedGenres(this.props.loved) + '. Does that sound right?'} />
				{this.renderMovies(this.props.loved)}
				<br />
				<button type="button" onClick={this.handleSubmit.bind(null, 'yes')}>Sure does!</button>
				<button type="button" onClick={this.handleSubmit.bind(null, 'no')}>Sorry, that's not me.</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const peopleIds = state.people.map(p => p.tmdb_id);
	const movies = state.movies;
	const love = state.opinions.love;
	const hate = state.opinions.hate;
	const question = state.question;
	const peopleNames = state.people.map(p => p.name);

	return {
		peopleIds,
		movies: movies || {},
		loved: love || [],
		hated: hate || [],
		question,
		peopleNames
	};
}

export default connect( mapStateToProps )(Preferences);
