import {
  PROCESS_NODES
} from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case PROCESS_NODES:
			return action.data;
		default:
			return state;
	}
}
