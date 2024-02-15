/*Write a function that reverses a string.

The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

*/

const reverseString = function (s) {
  initialIndex = 0;
  finalIndex = s.length - 1;

  for (let i = initialIndex; i < finalIndex; i++, finalIndex--) {
    const temp = s[i];
    s[i] = s[finalIndex];
    s[finalIndex] = temp;
  }

  return s;
};

console.log(reverseString(["a", "b", "c", "d", "e"]));

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
