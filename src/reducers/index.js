import { combineReducers } from 'redux';
import QuestionsReducer from './reducer_questions';
import CurrentQuestionReducer from './reducer_current_question';

const rootReducer = combineReducers({
	questions: QuestionsReducer,
	currentQuestion: CurrentQuestionReducer
});

export default rootReducer;
