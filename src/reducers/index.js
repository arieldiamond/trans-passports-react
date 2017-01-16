import { combineReducers } from 'redux';
import NodesReducer from './reducer_nodes';
import HistoryReducer from './reducer_history';
import CurrentNodeReducer from './reducer_current_node';
import ResultsReducer from './reducer_results';
import RecommendationsReducer from './reducer_recommendations';

const rootReducer = combineReducers({
	nodes: NodesReducer,
	currentNode: CurrentNodeReducer,
	history: HistoryReducer,
	results: ResultsReducer,
	recommendations: RecommendationsReducer
});

export default rootReducer;
