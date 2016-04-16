import axios from 'axios';
const ROOT_URL = 'http://localhost:3000/api/v1';

// Display ten recommended movies
export const FETCH_MOVIES = 'FETCH_MOVIES';
export function fetchMovies(movie_id) {
	const url = `${ROOT_URL}/movies/results?movie_id=${movie_id}`;
	const request = axios.get(url);
	return {
		type: FETCH_MOVIES,
		payload: request
	};
}

// Display one movie
export const FETCH_MOVIE = 'FETCH_MOVIE';
export function fetchMovie(movie_id) {
	const url = `${ROOT_URL}/movies/${movie_id}`;
	const request = axios.get(url);
	return {
		type: FETCH_MOVIE,
		payload: request
	};
}

// Get person's name
export const GET_PEOPLE = 'GET_PEOPLE';
export function fetchPeople(people_id) {
	const url = `${ROOT_URL}/people/list?id=${people_id}`;
	const request = axios.get(url);
	return {
		type: GET_PEOPLE,
		payload: request
	};
}

// Record Opinion
export const SET_OPINION = 'SET_OPINION';
export function setOpinion(movie, opinion) {
	return {
		type: SET_OPINION,
		movie,
		opinion
	};
}

// Change Question Text
export function setQuestionText(opinion) {
	return {
		type: opinion
	};
}

// Change rendered element
export function changeDisplay(display) {
	return {
		type: display
	};
}

export const REMOVE_FROM_GOOD_MOVIES = 'REMOVE_FROM_GOOD_MOVIES';
export function removeFromGoodMovies(movie_id) {
	return {
		type: REMOVE_FROM_GOOD_MOVIES,
		movie_id
	};
}

export const CLEAR_MOVIES = 'CLEAR_MOVIES';
export function clearMovies() {
	return {
		type: CLEAR_MOVIES
	};
}

export const CLEAR_REC_MOVIES = 'CLEAR_REC_MOVIES';
export function clearRecMovies() {
	return {
		type: CLEAR_REC_MOVIES
	};
}
