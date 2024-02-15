/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charCountS = {};
  const charCountT = {};

  for (let char of s) {
    charCountS[char] = (charCountS[char] || 0) + 1;
  }
  for (let char of t) {
    charCountT[char] = (charCountT[char] || 0) + 1;
  }

  for (let char in charCountS) {
    if (charCountS[char] !== charCountT[char]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("iracema", "america"));
