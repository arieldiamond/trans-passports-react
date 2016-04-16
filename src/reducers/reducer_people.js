import { FETCH_MOVIE, GET_PEOPLE } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_MOVIE:
			const array = action.payload.data.movie.actors.concat(action.payload.data.movie.director, action.payload.data.movie.producer, action.payload.data.movie.screenwriter);
			const unique = array.filter(function (e, i) {
				return array.lastIndexOf(e) === i;
			});
			return state.concat(unique);
		case GET_PEOPLE:
			return action.payload.data.people;
	}
	return state;
}
