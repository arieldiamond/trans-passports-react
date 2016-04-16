import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie, setOpinion, removeFromGoodMovies, setQuestionText, changeDisplay } from '../actions/index';
import SingleMovie from '../components/single_movie';
import Question from '../components/question';
import defer from 'lodash/defer';


class QuestionCarousel extends Component {
	constructor(props) {
		super(props);

		this.selectMovieId = this.selectMovieId.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		this.selectMovieId();
	}

	selectMovieId() {
		const goodMovies = this.props.goodMovies;
		const num = Math.floor((Math.random() * goodMovies.length));
		this.props.dispatch(fetchMovie(goodMovies[num]));
	}

	setThisOpinion(opinion) {
		this.props.dispatch(setOpinion(this.props.movie, opinion));
	}

	setQuestion(opinion) {
		(this.props.hated.length === 1 && opinion === 'hate' ? opinion = 'too_hate' : opinion);
		(this.props.meh.length === 1 && opinion === 'meh' ? opinion = 'too_meh' : opinion);
		(this.props.loved.length === 2 && opinion === 'love' ? opinion = 'lots_love' : opinion);
		(this.props.meh.length === 2 && opinion === 'meh' ? opinion = 'too_much_meh' : opinion);
		(this.props.hated.length === 2 && opinion === 'hate' ? opinion = 'too_much_hate' : opinion);

		const questions = {
			love: 'LOVE_MOVIE',
			hate: 'HATE_MOVIE',
			meh: 'MEH_MOVIE',
			never: 'NEVER_MOVIE',
			lots_love: 'LOTS_LOVE',
			too_hate: 'TOO_MUCH_HATE',
			too_much_hate: 'TOO_TOO_MUCH_HATE',
			too_much_meh: 'TOO_TOO_MUCH_MEH',
			too_meh: 'TOO_MUCH_MEH',

			preferences: 'PREFERENCES'
		};

		this.props.dispatch(setQuestionText(questions[opinion]));
	}

	setDisplay(opinion) {
		if (this.props.hated.length === 4 || this.props.meh.length === 4 && opinion !== 'love') {
			this.props.dispatch(changeDisplay('TOO_BAD'));
		} else {
			if (this.props.loved.length <= 2) {
				defer(this.selectMovieId);
			} else {
				this.props.dispatch(changeDisplay('PREFERENCES'));
				this.props.dispatch(setQuestionText('PREFERENCES'));
			}
		}
	}

	handleSubmit(opinion) {
		this.setQuestion(opinion);
		this.setThisOpinion(opinion);
		this.props.dispatch(removeFromGoodMovies(this.props.movie.tmdb_id));
		this.setDisplay(opinion);
	}

	render() {
		const {
		tmdb_id,
		title,
		poster_path,
		overview,
		certification,
		release_date,
		genre
		} = this.props.movie;
		return(
			<div>
				<div className="movie-container questions">
					<div>
						<Question text={this.props.question} />
						<SingleMovie key={tmdb_id} tmdb_id={tmdb_id} title={title} poster_path={poster_path} overview={overview} certification={certification} genre={genre} release_date={release_date} />
					</div>
					<div className="buttons">
						<button type="button" onClick={this.handleSubmit.bind(null, 'love')}>I love it!</button><br />
						<button type="button" onClick={this.handleSubmit.bind(null, 'meh')}>It's fine, I guess.</button><br />
						<button type="button" onClick={this.handleSubmit.bind(null, 'hate')}>Ugh, I hate it.</button><br />
						<button type="button" onClick={this.handleSubmit.bind(null, 'never')}>Never seen it!</button><br />
						<p>(ps. You can click on the poster for more details.)</p>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const movies = state.movies;
	const movie = state.movies.filter(m => m.tmdb_id === state.current_movie_id);
	const goodMovies = state.good_movies;
	const love = state.opinions.love;
	const hate = state.opinions.hate;
	const meh = state.opinions.meh;
	const question = state.question;
	const people = state.people;

	return {
		movie: movie[0] || {},
		movies: movies || {},
		goodMovies,
		loved: love || [],
		hated: hate || [],
		meh: meh || [],
		question,
		people
	};
}

export default connect( mapStateToProps )( QuestionCarousel );
