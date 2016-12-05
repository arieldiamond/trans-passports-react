import {
  SET_CURRENT_QUESTION,
  GET_NEXT_QUESTION,
  START_OVER
} from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case SET_CURRENT_QUESTION:
			return action.nextQuestion;
		case GET_NEXT_QUESTION:
			if (action.payload.data.recommendation) {
				return action.payload.data.recommendation;
			} else {
				return action.payload.data.question_group;
			}
		case START_OVER:
			return [];
		default:
			return state;
	}
}
