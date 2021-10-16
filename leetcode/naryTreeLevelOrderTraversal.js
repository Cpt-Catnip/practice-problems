// https://leetcode.com/problems/n-ary-tree-level-order-traversal/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // edge case: empty graph
  if (!root) return [];

  // solution array
  const lvls = [];

  // set up queue
  const queue = [];
  queue.push(nodeLvl(root, 0));

  while (queue.length) {
    // pull out current node
    const { node, lvl } = queue.shift();

    // queue up child nodes
    queue.push(...node.children.map((node) => nodeLvl(node, lvl + 1)));

    // visti node
    if (!lvls[lvl]) {
      lvls[lvl] = [];
    }
    lvls[lvl].push(node.val);
  }

  return lvls;
};

const nodeLvl = (node, lvl) => ({ node, lvl });

/**
 * Okay this went pretty well! I let myself do a simple solution and just made
 * a data structure to help me out. This could have been accomplished recursively
 * but then it wouldn't really have been level order traversal. Maybe there's a
 * more slick way to do this but I'm fine with this.
 */
