// https://leetcode.com/problems/rotate-image/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const N = matrix.length;

  // reflect about main diagonal
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      // swap
      matSwap(matrix, [i, j], [j, i]);
    }
  }

  // reflect about horizontal
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N / 2; j++) {
      // get new location
      const iPrime = i;
      const jPrime = N - 1 - j;

      // swap
      matSwap(matrix, [i, j], [iPrime, jPrime]);
    }
  }

  return matrix;
};

const matSwap = (matrix, p1, p2) => {
  const i = p1[0];
  const j = p1[1];

  const iP = p2[0];
  const jP = p2[1];

  [matrix[i][j], matrix[iP][jP]] = [matrix[iP][jP], matrix[i][j]];
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

/**
 * I got the right idea on this one but I chose the harder diagonal to rotate
 * about, which made me take probably too long on this problem. But this sort of
 * thing is really up my alley. If I find myself in a similar situarion, maybe
 * ask for help. Note that I feel confident in my thought process but maybe I'm
 * coming at it from the wrong angle.
 *
 * I'm proud about this one.
 */
