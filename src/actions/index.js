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

export const SET_CURRENT_NODE = 'SET_CURRENT_NODE';
export function setCurrentNode(key, node) {
	return {
		type: SET_CURRENT_NODE,
		key,
		node
	};
}

export const ADD_RECOMMENDATION = 'ADD_RECOMMENDATION';
export function addRecommendation(key, result) {
	return {
		type: ADD_RECOMMENDATION,
		key
	};
}

export const DELIVER_RECOMMENDATIONS = 'DELIVER_RECOMMENDATIONS';
export function deliverRecommendations(node) {
	return {
		type: DELIVER_RECOMMENDATIONS,
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
