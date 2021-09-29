// https://leetcode.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // check rows and columns
  for (let i = 0; i < 9; i++) {
    // create lookup tables for row, column, and square
    const row = {};
    const col = {};
    const sqr = {};

    for (let j = 0; j < 9; j++) {
      // check row
      const rowVal = board[i][j];
      if (rowVal in row) return false;
      row[rowVal] = true;

      // check column
      const colVal = board[j][i];
      if (colVal in col) return false;
      col[colVal] = true;

      // check square
      // ii = (i * 2) %
    }
  }
};

/**
 * Literally I had the exact right idea but just couldn't figure out the box
 * indexing. That's okay this seems like the sort of thing I can ask for help
 * with. I also really need to learn how to use sets in JS because this is a
 * perfect use-case.
 *
 * I also forgot to check if the value was a number or "." which is literally
 * something I took note of at the beginning. Pay more attention!
 */
