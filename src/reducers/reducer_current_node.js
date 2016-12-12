import {
	SET_CURRENT_NODE,
  START_OVER
} from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case SET_CURRENT_NODE:
			return { key: action.key, node: action.node};
		case START_OVER:
			return [];
		default:
			return state;
	}
}
