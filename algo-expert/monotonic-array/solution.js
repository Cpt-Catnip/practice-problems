function isMonotonic(array) {
  if (array.length < 2) return true;

  let isNonIncreasing = true;
  let isNonDecreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      isNonIncreasing = false;
    } else if (array[i] < array[i - 1]) {
      isNonDecreasing = false;
    }
  }

  return isNonIncreasing || isNonDecreasing;
}

module.exports = isMonotonic;
