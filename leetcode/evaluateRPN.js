// https://leetcode.com/problems/evaluate-reverse-polish-notation/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // stack for storing inputs
  const inStack = [];

  // add inputs to stack
  for (let input of tokens) {
    if (input === '+') {
      const b = inStack.pop();
      const a = inStack.pop();
      inStack.push(a + b);
    } else if (input === '-') {
      const b = inStack.pop();
      const a = inStack.pop();
      inStack.push(a - b);
    } else if (input === '*') {
      const b = inStack.pop();
      const a = inStack.pop();
      inStack.push(a * b);
    } else if (input === '/') {
      const denom = inStack.pop();
      const num = inStack.pop();
      if (denom !== 0) {
        let quot = num / denom;
        quot = quot > 0 ? Math.floor(quot) : Math.ceil(quot);
        inStack.push(quot);
      } else {
        throw new Error();
      }
    } else {
      inStack.push(parseInt(input));
    }
    console.log(inStack);
  }

  // return top of stack
  return inStack[0];
};

console.log(
  evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])
);

/*
Pretty good! This one is kind of easy though once you realize you need a stack.
Pay more attention to the problem statement and I might have gotten it on the
first pass.
*/
