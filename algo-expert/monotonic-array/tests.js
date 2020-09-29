const { expect } = require('chai');
const isMonotonic = require('./solution');

describe('Monotonic Array', () => {
  it('Test Case 1', () => {
    expect(
      isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])
    ).to.equal(true);
  });

  it('Test Case 2', () => {
    expect(isMonotonic([])).to.equal(true);
  });
});
