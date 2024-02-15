/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value
to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

*/

const reverse = function (x) {
  const listNumber = x.toString().split("").map(Number);
  let isNegative = false;

  if (isNaN(listNumber[0])) {
    listNumber.shift();
    isNegative = true;
  }

  initialIndex = 0;
  finalIndex = listNumber.length - 1;
  for (let index = initialIndex; index < finalIndex; index++, finalIndex--) {
    const temp = listNumber[index];
    listNumber[index] = listNumber[finalIndex];
    listNumber[finalIndex] = temp;
  }

  const number = parseInt(listNumber.join(""), 10);

  if (number < -Math.pow(2, 31) || number > Math.pow(2, 31) - 1) {
    return 0;
  }

  return isNegative ? number * -1 : number;
};

console.log(reverse(123));
