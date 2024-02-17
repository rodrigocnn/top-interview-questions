/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/

const longestCommonPrefix = function (strs) {
  let current = strs[0];
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < current.length; j++) {
      if (current[j] !== strs[i][j] || j === strs[i].length) {
        current = current.slice(0, j);
      }
    }
  }
  return current;
};

//["ab", "a"]; expect a
//["dog", "racecar", "car"];

const strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));
