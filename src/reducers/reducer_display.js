const INITIAL = 'QuestionCarousel';

export default function(state = INITIAL, action) {
	switch (action.type) {
		case 'MOVIES_LIST':
			return 'MoviesList';
		case 'PREFERENCES':
			return 'Preferences';
		case 'TOO_BAD':
			return 'TooBad';
		case 'QUESTIONS':
			return 'QuestionCarousel';
		default:
			return state;
	}
}
