/* global API_URL */
import axios from 'axios';

// Import questions
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export function fetchQuestions() {
	// TODO: figure out why this const isn't working
	// const url = `${API_URL}/questions`;
	const url = 'http://localhost:3000/api/v1/questions';
	const request = axios.get(url);
	return {
		type: FETCH_QUESTIONS,
		payload: request
	};
}

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
