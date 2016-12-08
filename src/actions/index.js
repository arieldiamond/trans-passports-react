
// Set current question
export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';
export function setCurrentQuestion(order, nextQuestion) {
	return {
		type: SET_CURRENT_QUESTION,
		order,
		nextQuestion
	};
}

// Clears current question
export const START_OVER = 'START_OVER';
export function startOver() {
	return {
		type: START_OVER
	};
}
