import TestUtils from 'react-addons-test-utils';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { renderComponent , expect } from '../test_helper';
import QuestionCarousel from '../../src/containers/question_carousel';
import Question from '../../src/components/question';
import SingleMovie from '../../src/components/single_movie';
import React from 'react';


describe('QuestionCarousel', () => {
  const renderer = TestUtils.createRenderer();

  it('should render question', function() {
    const text = "Question text";
    renderer.render(<Question text={text} />);
    const output = renderer.getRenderOutput();

    expect(output).to.include.elementOfType('h3').with.text('Question text');
  });

  it('should render Single Movie', function() {
    const tmdb_id = 550;
    const title = "Fight Club";
    const poster_path = "/811DjJTon9gD6hZ8nCjSitaIXFQ.jpg"
    const overview = "Overview";
    const certification = "R";
    const release_date = 1999;
    const genre = [18, "Drama"];
    renderer.render(<SingleMovie key={tmdb_id} tmdb_id={tmdb_id} title={title} poster_path={poster_path} overview={overview} certification={certification} genre={genre} release_date={release_date} />);
    const output = renderer.getRenderOutput();
    expect(output.props.className).to.equal('movie-single');
    expect(output).to.include.elementOfType('a')
  });

  it('should render buttons',  () => {
    // renderer.render(<QuestionCarousel />)

  })

  it('should call onClick', () => {

  })

});