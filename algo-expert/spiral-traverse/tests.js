const { expect } = require('chai');
const spiralTraverse = require('./solution');

describe('Spiral Traverse', () => {
  it('Test Case 1', () => {
    const array = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ];

    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    expect(spiralTraverse(array)).to.eql(result);
  });

  it('Test Case 8', () => {
    const array = [
      [1, 2, 3, 4],
      [10, 11, 12, 5],
      [9, 8, 7, 6],
    ];

    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    expect(spiralTraverse(array)).to.eql(result);
  });

  it('Test Case 9', () => {
    const array = [
      [1, 2, 3],
      [12, 13, 4],
      [11, 14, 5],
      [10, 15, 6],
      [9, 8, 7],
    ];

    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    expect(spiralTraverse(array)).to.eql(result);
  });
});
