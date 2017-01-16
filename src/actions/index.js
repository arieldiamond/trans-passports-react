// Import JSON into nodes
export const PROCESS_NODES = 'PROCESS_NODES';
export function processNodes(data) {
	return (dispatch, getState) => {
		dispatch({
			type: PROCESS_NODES,
			data
		});
		return new Promise(resolve => getState().nodes);
	};
}

// Import JSON into recommendations
export const PROCESS_RECOMMENDATIONS = 'PROCESS_RECOMMENDATIONS';
export function processRecommendations(data) {
	return (dispatch, getState) => {
		dispatch({
			type: PROCESS_RECOMMENDATIONS,
			data
		});
		return new Promise(resolve => getState().recommendations);
	};
}

export const SET_CURRENT_NODE = 'SET_CURRENT_NODE';
export function setCurrentNode(key, node) {
	return {
		type: SET_CURRENT_NODE,
		key,
		node
	};
}

export const ADD_RESULT = 'ADD_RESULT';
export function addResult(key, result) {
	return {
		type: ADD_RESULT,
		key,
		result
	};
}

export const DELIVER_RESULTS = 'DELIVER_RESULTS';
export function deliverResults(node) {
	return {
		type: DELIVER_RESULTS,
		node
	};
}

// Clears current question
export const START_OVER = 'START_OVER';
export function startOver() {
	return {
		type: START_OVER
	};
}
