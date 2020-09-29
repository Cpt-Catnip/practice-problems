const spiralTraverse = (array) => {
  const flat = [];

  const nRows = array.length;
  const nCols = array[0].length;

  let l = 0,
    r = nCols - 1;
  let t = 0,
    b = nRows - 1;

  while (l <= r && t <= b) {
    // left to right
    for (let col = l; col < r + 1; col++) {
      flat.push(array[t][col]);
    }
    t++;

    // top to bottom
    for (let row = t; row < b + 1; row++) {
      flat.push(array[row][r]);
    }
    r--;

    // right to left
    for (let col = r; col >= l; col--) {
      flat.push(array[b][col]);
    }
    b--;

    // bottom to top
    for (let row = b; row >= t; row--) {
      flat.push(array[row][l]);
    }
    l++;
  }

  return flat;
};

module.exports = spiralTraverse;
