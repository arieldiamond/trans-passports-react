import React from 'react';
const ROOT_URL = 'https://image.tmdb.org/t/p/w185/';

export default ({
	tmdb_id,
	title,
	poster_path,
	overview,
	certification = 'No Rating',
	release_date,
	genre = []
}) => {
	const genres = genre.map(g => g[1]).join(', ');
	return (
		<div className="movie-single">
			{ tmdb_id ?
				[<div key={0}>
					<a href={'#' + tmdb_id}>
						<img src={ROOT_URL + poster_path} />
					</a>
				</div>,
				<div key={1}>
					<a href="#_" className="lightbox" id={tmdb_id}>
						<div className="movie-single-lb container">
							<img src={ROOT_URL + poster_path} />
							<h2>{title}</h2>
							<p>{overview}</p>
							<p>Rating: {certification}</p>
							<p>Genres: {genres}</p>
							<p>Year: {release_date}</p>
						</div>
					</a>
				</div>]
			: null }
		</div>
	);
};
