import {
	PROCESS_RECOMMENDATIONS,
  START_OVER
} from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case PROCESS_RECOMMENDATIONS:
			return action.data;
		case START_OVER:
			return [];
		default:
			return state;
	}
}
