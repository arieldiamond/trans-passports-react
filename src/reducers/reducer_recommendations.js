import {
	PROCESS_RECOMMENDATIONS
} from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case PROCESS_RECOMMENDATIONS:
			return action.data;
		default:
			return state;
	}
}
