const {dirReduce} = require('./dirReduce')

// https://www.codewars.com/kata/550f22f4d758534c1100025a

describe('direction reduce', () => {
  it('Has reduction', () => {
    expect(dirReduce(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])).toEqual( ["WEST"]);
  });
  it('No reduction', () => {
    expect(dirReduce(["NORTH", "WEST", "SOUTH", "EAST"])).toEqual( ["NORTH", "WEST", "SOUTH", "EAST"]);
  });
  it('Reduces to empty array', () => {
    expect(dirReduce(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])).toEqual( []);
  });
  it('Nested reductions', () => {
    expect(dirReduce(["NORTH", "EAST", "WEST", "SOUTH", "EAST"])).toEqual( ["EAST"]);
  });
});