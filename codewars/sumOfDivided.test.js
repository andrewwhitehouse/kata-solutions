const {sumOfDivided} = require('./sumOfDivided')

// https://www.codewars.com/kata/54d496788776e49e6b00052f/train/javascript

describe('find sum of prime factors', () => {
  it('[12, 15] has three resultss', () => {
    expect(sumOfDivided([12, 15])).toEqual([ [2, 12], [3, 27], [5, 15] ]);
  });
  it('[15,21,24,30,45] has four results', () => {
    expect(sumOfDivided([15,21,24,30,45])).toEqual([ [2, 54], [3, 135], [5, 90], [7, 21] ]);
  });
  it('[ -29804, -4209, -28265, -72769, -31744 ] has multiple results', () => {
    let expected = [[2, -61548], [3, -4209], [5, -28265], [23, -4209], [31, -31744],
      [53, -72769], [61, -4209], [1373, -72769], [5653, -28265], [7451, -29804]];
    expect(sumOfDivided([ -29804, -4209, -28265, -72769, -31744 ])).toEqual(expected);
  });
  it('Handles positive and negative numbers', () => {
    let expected = [ [ 2, 626 ],
      [ 3, 390 ],
      [ 5, 105 ],
      [ 13, 156 ],
      [ 17, -85 ],
      [ 19, 247 ],
      [ 23, 23 ],
      [ 29, 116 ],
      [ 41, 164 ],
      [ 59, 177 ],
      [ 67, -67 ],
      [ 181, 362 ],
      [ 191, 191 ] ];
    expect(sumOfDivided([ 181, 181, 116, 191, 57, 164, -85, -67, 190, 23, 156, 177 ])).toEqual(expected);
  });
  it('[] has zero results', () => {
    expect(sumOfDivided([])).toEqual([]);
  });
});