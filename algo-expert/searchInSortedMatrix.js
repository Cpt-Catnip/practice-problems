// https://www.algoexpert.io/questions/Search%20In%20Sorted%20Matrix

function searchInSortedMatrix(matrix, target) {
  // row pointer
  let i = 0;
  // column pointer
  let j = matrix[i].length - 1;

  // traverse matrix
  while (i < matrix.length && j >= 0) {
    const el = matrix[i][j];

    if (el === target) return [i, j];
    else if (el > target) j--;
    else i++;
  }

  // target not found
  return [-1, -1];
}

// Do not edit the line below.
exports.searchInSortedMatrix = searchInSortedMatrix;

/**
 * I was so close! I just needed to realize that you had to start in the top
 * right corner, not the top left. Seems like the sort of thing that an
 * interviewer might be able to point out? I think I would have demonstrated
 * the right thought process and it would have turned out well.
 */
