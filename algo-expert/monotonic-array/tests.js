const { expect } = require('chai');
const isMonotonic = require('./solution');

it('[-1, -5, -10, -1100, -1100, -1101, -1102, -9001]', () => {
  expect(
    isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])
  ).to.equal(true);
});
