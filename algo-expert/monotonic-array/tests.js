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

  it('Test Case 3', () => {
    const array = [1];
    expect(isMonotonic(array)).to.equal(true);
  });

  it('Test Case 4', () => {
    const array = [1, 2];
    expect(isMonotonic(array)).to.equal(true);
  });

  it('Test Case 5', () => {
    const array = [2, 1];
    expect(isMonotonic(array)).to.equal(true);
  });

  it('Test Case 6', () => {
    const array = [1, 5, 10, 1100, 1101, 1102, 9001];
    expect(isMonotonic(array)).to.equal(true);
  });

  it('Test Case 7', () => {
    const array = [-1, -5, -10, -1100, -1101, -1102, -9001];
    expect(isMonotonic(array)).to.equal(true);
  });

  it('Test Case 8', () => {
    const array = [-1, -5, -10, -1100, -900, -1101, -1102, -9001];
    expect(isMonotonic(array)).to.equal(false);
  });

  it('Test Case 9', () => {
    const array = [1, 2, 0];
    expect(isMonotonic(array)).to.equal(false);
  });

  it('Test Case 10', () => {
    const array = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11];
    expect(isMonotonic(array)).to.equal(false);
  });

  it('Test Case 11', () => {
    const array = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11];
    expect(isMonotonic(array)).to.equal(true);
  });

  it('Test Case 12', () => {
    const array = [
      -1,
      -1,
      -2,
      -3,
      -4,
      -5,
      -5,
      -5,
      -6,
      -7,
      -8,
      -7,
      -9,
      -10,
      -11,
    ];
    expect(isMonotonic(array)).to.equal(false);
  });

  it('Test Case 13', () => {
    const array = [
      -1,
      -1,
      -2,
      -3,
      -4,
      -5,
      -5,
      -5,
      -6,
      -7,
      -8,
      -8,
      -9,
      -10,
      -11,
    ];
    expect(isMonotonic(array)).to.equal(true);
  });

  it('Test Case 14', () => {
    const array = [-1, -1, -1, -1, -1, -1, -1, -1];
    expect(isMonotonic(array)).to.equal(true);
  });

  it('Test Case 15', () => {
    const array = [1, 2, -1, -2, -5];
    expect(isMonotonic(array)).to.equal(false);
  });

  it('Test Case 16', () => {
    const array = [-1, -5, 10];
    expect(isMonotonic(array)).to.equal(false);
  });

  it('Test Case 17', () => {
    const array = [2, 2, 2, 1, 4, 5];
    expect(isMonotonic(array)).to.equal(false);
  });
});
