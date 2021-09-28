// https://www.algoexpert.io/questions/Merge%20Sort

const merge = (arr1, arr2) => {
  // pointers for each array
  let i = 0;
  let j = 0;

  // empty array to populate
  const merged = [];

  // push values of input array into merged in sorted order
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // push remaining values into merged
  while (i < arr1.length) merged.push(arr1[i++]);
  while (j < arr2.length) merged.push(arr2[j++]);

  return merged;
};

const mergeSort = (arr) => {
  // return single-element or empty array
  if (arr.length <= 1) return arr;

  // split array and merge halves
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

/**
 * Got it perfect on my first go. I think I understand this one.
 */
