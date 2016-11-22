import {
  SET_CURRENT_QUESTION,
  START_OVER
} from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case SET_CURRENT_QUESTION:
			return action.nextQuestion;
		case START_OVER:
			return [];
		default:
			return state;
	}
}
