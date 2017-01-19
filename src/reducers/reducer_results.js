import {
	ADD_RESULT,
  START_OVER
} from '../actions/index';

export default function(state = {}, action) {
	switch (action.type) {
		case ADD_RESULT:
			if ( action.result == null || Object.keys(action.result).length === 0 ) {
				return state;
			} else {
				return Object.assign({}, state, action.result);
			}
		case START_OVER:
			return {};
		default:
			return state;
	}
}
