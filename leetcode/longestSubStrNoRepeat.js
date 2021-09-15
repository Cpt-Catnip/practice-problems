// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let chars = {};
  let maxLen = 0;

  let i = 0;
  let j = 0;
  while (i < s.length) {
    const char = s[i];

    if (!chars[char]) {
      chars[char] = true;
      i++;
    } else {
      const len = i - j;
      maxLen = Math.max(maxLen, len);
      i = j = j + 1;
      chars = {};
    }
  }

  const len = i - j;
  return Math.max(maxLen, len);
};

// better version
var lengthOfLongestSubstring2 = function (s) {
  let chars = {};
  let maxLen = 0;

  let i = (j = 0);
  while (i < s.length) {
    const char = s[i];

    if (char in chars) {
      j = Math.max(j, chars[char] + 1);
    }

    maxLen = Math.max(maxLen, i - j + 1);
    chars[char] = i;
    i++;
  }

  return maxLen;
};
