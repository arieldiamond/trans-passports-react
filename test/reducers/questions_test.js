import { describe, it, beforeEach, afterEach } from 'mocha';
import { renderComponent , expect } from '../test_helper';
import ReducerQuestion from '../../src/reducers/reducer_question';
import { LOVE_MOVIE, HATE_MOVIE, MEH_MOVIE, PREFERENCES, TRY_AGAIN, TOO_MUCH_MEH, TOO_MUCH_HATE } from '../../src/actions/index';

describe('ReducerQuestion', () => {
  const FIRST_QUESTION = "Hey, what do you think about this movie?";
  const LOVE_QUESTION = "Yay, me too! Now, how about this movie?";
  const HATE_QUESTION = "Right? That movie is terrible. Hopefully you'll like this one more.";
  const MEH_QUESTION = "Well, I hope you have stronger feelings about this one.";
  const PREFS_QUESTION = "It looks like you really like";
  const AGAIN_QUESTION = "Okay, let's try this again. What do you think about this movie?"
  const TOO_MEH_QUESTION = "Hey, so in order for me to recommend a movie, you have to like something!"
  const TOO_HATE_QUESTION = "Um, that is a lot of hate. Are you feeling okay? Do you want to talk about it?"

  it('returns default question', () => {
    expect(ReducerQuestion(FIRST_QUESTION, {})).to.equal(FIRST_QUESTION);
  })

  xit('handles love question', () => {
    expect(ReducerQuestion(FIRST_QUESTION, {type: LOVE_MOVIE })).to.equal(LOVE_QUESTION);
  })

  xit('handles hate question', () => {
    expect(ReducerQuestion(FIRST_QUESTION, {type: HATE_MOVIE })).to.equal(HATE_QUESTION);
  })

  xit('handles meh question', () => {
    expect(ReducerQuestion(FIRST_QUESTION, {type: MEH_MOVIE })).to.equal(MEH_QUESTION);
  })

  xit('handles preferences question', () => {
    expect(ReducerQuestion(FIRST_QUESTION, {type: PREFERENCES })).to.equal(PREFS_QUESTION);
  })

  it('handles try again question', () => {
    expect(ReducerQuestion(FIRST_QUESTION, {type: TRY_AGAIN })).to.equal(AGAIN_QUESTION);
  })

  it('handles too meh question', () => {
    expect(ReducerQuestion(FIRST_QUESTION, {type: TOO_MUCH_MEH })).to.equal(TOO_MEH_QUESTION);
  })
})


