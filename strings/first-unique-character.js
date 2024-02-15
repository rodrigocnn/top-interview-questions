/*

Given a string s, find the first non-repeating character in it and return its i. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1

*/

var firstUniqChar = function (str) {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let unique = true;

    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[j] === char) {
        unique = false;
        break;
      }
    }

    if (unique) {
      return str.indexOf(str[i]);
    }
  }

  return -1;
};

console.log(firstUniqChar("loveleetcode"));
