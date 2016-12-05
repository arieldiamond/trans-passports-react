import {
  GET_NEXT_QUESTION,
  START_OVER
} from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case GET_NEXT_QUESTION:
			return [...state,	action.payload.data.question_group];
		case START_OVER:
			return [];
		default:
			return state;
	}
}
