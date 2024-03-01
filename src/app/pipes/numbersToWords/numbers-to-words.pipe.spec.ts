import { NumbersToWordsPipe } from './numbers-to-words.pipe';

describe('NumbersToWordsPipe', () => {
  it('create an instance', () => {
    const pipe = new NumbersToWordsPipe();
    expect(pipe).toBeTruthy();
  });
});
