import { Component } from 'react';
import { connect } from 'react-redux';

import QuestionCarousel from '../containers/question_carousel';
import Preferences from '../containers/preferences';
import MoviesList from '../containers/movies_list';
import TooBad from '../containers/too_bad';

class App extends Component {
	constructor(props) {
		super(props);
		this.setDisplay = this.setDisplay.bind(this);
	}

	setDisplay() {
		const displays = {
			'MoviesList': <MoviesList/>,
			'Preferences': <Preferences />,
			'TooBad': <TooBad />
		};
		return displays[this.props.display] || <QuestionCarousel />;
	}

	render() {
		return (
		<div>
		{this.setDisplay()}
		</div>
		);
	}
}
function mapStateToProps(state) {
	const display = state.display;
	return { display };
}

export default connect( mapStateToProps )(App);
