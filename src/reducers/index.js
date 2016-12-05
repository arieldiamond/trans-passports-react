import { combineReducers } from 'redux';
import QuestionsReducer from './reducer_questions';
import HistoryReducer from './reducer_history';
import CurrentQuestionReducer from './reducer_current_question';

const rootReducer = combineReducers({
	questions: QuestionsReducer,
	history: HistoryReducer,
	currentQuestion: CurrentQuestionReducer
});

export default rootReducer;
