const { reverseInteger } = require('./reverseInteger');

describe('reverses integer', () => {
  it('reverses 135 to 531', () => {
    expect(reverseInteger(135)).toBe(531);
  });
  it('reverses -321 to -123', () => {
    expect(reverseInteger(-321)).toBe(-123);
  });
});