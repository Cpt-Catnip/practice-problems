// https://www.algoexpert.io/questions/Youngest%20Common%20Ancestor

// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // simple edge case
  if (descendantOne === topAncestor || descendantTwo === topAncestor) {
    return topAncestor;
  }

  // case where nodes are the same
  if (descendantOne === descendantTwo) return descendantOne;

  // find depths of each descendant
  let d1 = getDepth(descendantOne);
  let d2 = getDepth(descendantTwo);

  // set lower and higher nodes
  let lower = d1 > d2 ? descendantOne : descendantTwo;
  let higher = lower === descendantOne ? descendantTwo : descendantOne;

  // bring lower up to the same height as higher
  for (let i = 0; i < Math.abs(d2 - d1); i++) {
    lower = lower.ancestor;
  }

  // raise both nodes until they are equal
  while (lower !== higher) {
    lower = lower.ancestor;
    higher = higher.ancestor;
  }

  // both pointers now pointing to common ancestor
  return lower;
}

const getDepth = (descendant) => {
  let node = descendant;
  let depth = 1;
  while (node.ancestor) {
    node = node.ancestor;
    depth++;
  }
  return depth;
};

// Do not edit the lines below.
exports.AncestralTree = AncestralTree;
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;

/**
 * Submitted this with no errors, it only took me three days to finish because I
 * was being so lazy. I also looked at the solution before giving it a college
 * try, which was stupid because this is actually exactly how I was thinking
 * about doing it anyway but then I got all in my head about it.
 *
 * TAKEAWAY: Trust your gut and just run with it. Evaluate and iterate once you
 * have it working or nearly there.
 */
