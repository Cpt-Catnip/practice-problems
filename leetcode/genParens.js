// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const parens = [];

  const permute = (nLeft, nRight, paren = ``) => {
    // can’t close before opening
    if (nLeft > nRight) return;

    // no more parenthesis; done with this path
    if (nLeft === 0 && nRight === 0) return parens.push(paren);

    // go down open and close path
    nLeft && permute(nLeft - 1, nRight, paren + `(`);
    nRight && permute(nLeft, nRight - 1, paren + `)`);
  };

  // build array
  permute(n, n);

  // return result
  return parens;
};

/**
 * This is yet another problem in which I had the right idea, but didn't quite
 * make it all the way there. I tried to just do it with n, when what I needed
 * was to track left AND right parenthesis. I keep restricting myself assuming
 * that the best solution is the most concise one. Allow yourself to have the
 * tools you need to succeed. Limiting yourself isn't helping.
 *
 * i.e. Don't make things harder because you think it's more noble. Make it work
 * then improve is needed.
 */
