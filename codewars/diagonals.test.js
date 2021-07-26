const {diagonal, primaryDiagonal, secondaryDiagonal} = require('./diagonals')

describe('diagonal comparison', () => {
  it('primary diagonal win', () => {
    expect(primaryDiagonal([
      [2,2,2],
      [4,2,6],
      [1,8,2]
    ])).toEqual([2, 2, 2]);
  });
  it('secondary diagonal win', () => {
    expect(secondaryDiagonal([
      [2,2,2],
      [4,2,6],
      [1,8,2]
    ])).toEqual([2, 2, 1]);
  });
  it('recognises primary diagonal win', () => {
    expect(diagonal([
      [2,2,2],
      [4,2,6],
      [1,8,2]
    ])).toEqual('Principal Diagonal win!');
  });
  it('recognises secondary diagonal win', () => {
    expect(diagonal([
      [1, 2, 2, 5, 1],
      [4, 1, 6, 1, 1],
      [1, 8, 5, 6 ,2],
      [1, 5, 2, 1, 2],
      [1, 8, 2, 6, 1]
    ])).toEqual('Secondary Diagonal win!');
  });
  it('recognises draw', () => {
    expect(diagonal([
      [1, 2, 2, 5, 1, 1, 2, 2, 5, 1],
      [4, 1, 6, 1, 1, 1, 2, 2, 1, 1],
      [1, 8, 1, 6 ,2, 1, 2, 1, 5, 1],
      [1, 5, 2, 1, 2, 1, 1, 2, 5, 1],
      [1, 8, 2, 6, 1, 1, 2, 2, 5, 1],
      [1, 2, 2, 5, 1, 1, 2, 2, 5, 1],
      [1, 2, 2, 1, 1, 1, 1, 2, 5, 1],
      [1, 2, 1, 5, 1, 1, 2, 1, 5, 1],
      [1, 1, 2, 5, 1, 1, 2, 2, 1, 1],
      [1, 2, 2, 5, 1, 1, 2, 2, 5, 1]
    ])).toEqual('Draw!');
  });
});