import { combineReducers } from 'redux';
import MoviesReducer from './reducer_movies';
import MovieReducer from './reducer_movie';
import OpinionsReducer from './reducer_opinions';
import RecommendedReducer from './reducer_recommended';
import GoodMovieReducer from './reducer_good_movies';
import QuestionReducer from './reducer_question';
import DisplayReducer from './reducer_display';
import PeopleReducer from './reducer_people';

const rootReducer = combineReducers({
	good_movies: GoodMovieReducer,
	movies: MoviesReducer,
	current_movie_id: MovieReducer,
	opinions: OpinionsReducer,
	recommended: RecommendedReducer,
	question: QuestionReducer,
	people: PeopleReducer,
	display: DisplayReducer
});

export default rootReducer;
