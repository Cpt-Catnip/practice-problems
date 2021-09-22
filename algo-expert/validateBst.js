// https://www.algoexpert.io/questions/Validate%20BST

// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree, minVal = -Infinity, maxVal = Infinity) {
  // Write your code here.
  if (!tree) return true;
  if (tree.value < minVal || tree.value >= maxVal) return false;
  const leftIsValid = validateBst(tree.left, minVal, tree.value);
  const rightIsValid = validateBst(tree.right, tree.value, maxVal);
  return leftIsValid && rightIsValid;
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;

/**
 * I had the right idea with this one at first but assumed it wasn't feasible.
 * Be more confident! Inspite of that, it's okay to not get this. Part of this
 * proccess is learning and this was a learning problem. Keep at it and don't
 * let it get you down.
 */
