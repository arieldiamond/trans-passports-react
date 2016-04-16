const questions = {
	FIRST: 'Hey, what do you think about this movie?',
	LOVE: 'Yay, me too! Now, how about this movie?',
	LOTS_LOVE: 'Awesome! We\'re almost there.',
	NEVER: 'No worries, I hope you\'ve seen this one! What do you think?',
	MEH: 'Well, I hope you have stronger feelings about this one.',

	TOO_MEH: 'I hope you love this next one!',
	TOO_TOO_MUCH_MEH: 'Hopefully you\'ll love this one!',
	HATE: 'Right? That movie is terrible. Hopefully you\'ll like this one more.',
	TOO_HATE: 'Um, that is a lot of hate. Are you feeling okay? Do you want to talk about it?',
	TOO_TOO_MUCH_HATE: 'So I need you to like something... anything.',
	PREFS: 'It looks like you really like',
	AGAIN: 'Okay, let\'s try this again. What do you think about this movie?',
	FRESH: 'Alright, let\'s start fresh. What do you think about this movie?'
};

export default function(state = questions['FIRST'], action) {
	switch (action.type) {
		case 'LOVE_MOVIE':
			return questions['LOVE'];
		case 'HATE_MOVIE':
			return questions['HATE'];
		case 'MEH_MOVIE':
			return questions['MEH'];
		case 'NEVER_MOVIE':
			return questions['NEVER'];
		case 'LOTS_LOVE':
			return questions['LOTS_LOVE'];
		case 'TOO_MUCH_MEH':
			return questions['TOO_MEH'];
		case 'TOO_MUCH_HATE':
			return questions['TOO_HATE'];
		case 'TOO_TOO_MUCH_HATE':
			return questions['TOO_TOO_MUCH_HATE'];
		case 'TOO_TOO_MUCH_MEH':
			return questions['TOO_TOO_MUCH_MEH'];
		case 'PREFERENCES':
			return questions['PREFS'];
		case 'TRY_AGAIN':
			return questions['AGAIN'];
		case 'FRESH':
			return questions['FRESH'];
		default:
			return state;
	}
}
