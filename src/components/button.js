import { Link } from 'react-router';

export default props => {
	return (
		<div className={props.className}>
			<button to={props.link}>{props.text}</button>
		</div>
	);
};
