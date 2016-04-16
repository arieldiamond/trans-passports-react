import { FETCH_MOVIE, CLEAR_MOVIES } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_MOVIE:
			return [...state, action.payload.data.movie];
		case CLEAR_MOVIES:
			state.splice(0, state.length);
			return state;
	}
	return state;
}
