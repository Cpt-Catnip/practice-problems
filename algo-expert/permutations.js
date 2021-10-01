// https://www.algoexpert.io/questions/Permutations

/**
Write a function that takes an array of unique integers and returns an array
of all permutations of those integers in no particular order.

If the input array is empty, the function should return an empty array

getPermutations([1, 2, 3]) = [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
];
*/

function getPermutations(array) {
  // edge case
  if (!array.length) return array;

  // solution array
  let perms = [];

  // function to traverse permutations and populate solution
  const permute = (arr, result = []) => {
    // push result
    if (!arr.length) return perms.push(result);

    for (let i = 0; i < arr.length; i++) {
      // pull out value to add to permutation
      const root = arr[i];

      // remove added element
      const left = arr.slice(0, i);
      const right = arr.slice(i + 1);
      const rest = left.concat(right);

      // move to next element
      permute(rest, result.concat(root));
    }
  };

  // build solution
  permute(array);

  // return answer
  return perms;
}

// Do not edit the line below.
exports.getPermutations = getPermutations;

/**
 * Got this one perfectly except for a little bug. I accidentally included the
 * removed element in the 'rest' array. Glad I remembered this so perfectly from
 * last time I did it. Retention!
 */
