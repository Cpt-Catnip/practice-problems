// https://leetcode.com/problems/kth-smallest-element-in-a-bst/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const items = inOrder(root);
  return items[k - 1];
};

const inOrder = (tree, items = []) => {
  if (tree.left) inOrder(tree.left, items);
  items.push(tree.val);
  if (tree.right) inOrder(tree.right, items);
  return items;
};

/**
 * Got this on my first go! Didn't do it in a google doc but that's okay. Nice
 * little confidence boost :)
 */
