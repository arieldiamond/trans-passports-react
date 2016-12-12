import {
	ADD_RECOMMENDATION,
  START_OVER
} from '../actions/index';



export default function(state = [], action) {
	switch (action.type) {
		case ADD_RECOMMENDATION:

			if (action.result === '{}') {
				return state;
			} else {
				return [...state, { key: action.key, result: action.result }];
			}
		case START_OVER:
			return {};
		default:
			return state;
	}
}
