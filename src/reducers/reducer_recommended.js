import { FETCH_MOVIES, CLEAR_REC_MOVIES } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_MOVIES:
			return action.payload.data.movies;
		case CLEAR_REC_MOVIES:
			state.splice(0, state.length);
			return state;
		default:
			return state;
	}
}
