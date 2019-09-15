import {DateNorwegianPipe} from './date-norwegian.pipe';

describe('DateNorwegianPipe', () => {
  it('create an instance', () => {
    const pipe = new DateNorwegianPipe('nb-NO');
    expect(pipe).toBeTruthy();
  });
});
