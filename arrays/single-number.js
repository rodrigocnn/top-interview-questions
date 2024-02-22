/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

*/

const singleNumber = function (nums) {
  let resultado = 0;
  for (let i = 0; i < nums.length; i++) {
    resultado ^= nums[i];
  }
  return resultado;
};

const test1 = "Given  array of integers nums [2,2,1] should be return 1";
console.log(test1, singleNumber([2, 2, 1]));

const test2 = "Given  array of integers nums  [4,1,2,1,2] should be return 4";
console.log(test2, singleNumber([4, 1, 2, 1, 2]));

const test3 = "Given  array of integers nums  [1] should be return 1";
console.log(test3, singleNumber([1]));
