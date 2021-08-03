const { findNum } = require('./rangeSearch');

describe('range search', () => {
  it('matches existing range', () => {
    expect(findNum([1, 1, 3, 5, 7], 1)).toEqual([0,1]);
  });
  it('returns -1 for not found', () => {
    expect(findNum([1, 2, 3, 4], 5)).toEqual([-1, -1]);
  });
});