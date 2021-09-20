/*
https://leetcode.com/problems/container-with-most-water/

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
Notice that you may not slant the container.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // init vars
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  // iterate over array
  while (left < right) {
    // calculate current area
    const area = getArea(height, left, right);

    // store new max area
    maxArea = Math.max(area, maxArea);

    // update pointers
    height[left] < height[right] ? left++ : right--;
  }

  return maxArea;
};

const getArea = (arr, i, j) => {
  const left = Math.min(i, j);
  const right = Math.max(i, j);
  return Math.min(arr[left], arr[right]) * (right - left);
};

/*
Looked up solution.
I should have gotten this one. This is an easy one and canonical problem.
Don't be too hard on yourself. Learning is a journey.
*/
