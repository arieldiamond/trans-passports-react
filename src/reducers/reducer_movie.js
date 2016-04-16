import { FETCH_MOVIE } from '../actions/index';

export default function(state = null, action) {
	switch (action.type) {
		case FETCH_MOVIE:
			return action.payload.data.movie.tmdb_id;
	}
	return state;
}
