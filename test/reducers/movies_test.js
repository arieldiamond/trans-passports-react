import { describe, it, beforeEach, afterEach } from 'mocha';
import { renderComponent , expect } from '../test_helper';
import ReducerMovies from '../../src/reducers/reducer_movies';
import { FETCH_MOVIE } from '../../src/actions/index';

describe('ReducerMovies', () => {
  const title = "Fight Club";
  const movie = { data: { movie: title } };

  it('adds a movie to state', () => {
    expect(ReducerMovies([], { type: FETCH_MOVIE, payload: movie })).to.deep.equal([title]);
  })
})

