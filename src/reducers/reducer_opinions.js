import { SET_OPINION, CLEAR_MOVIES } from '../actions/index';


export default function(state = {}, action) {
	switch (action.type) {
		case SET_OPINION:
			return Object.assign({}, state, {
				[action.opinion]: [...state[action.opinion] || [], action.movie ]
			});
		case CLEAR_MOVIES:
			return {};
	}
	return state;
}
