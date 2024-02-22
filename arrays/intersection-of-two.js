/*
Given two integer arrays nums1 and nums2, return an array of their intersection.
 Each element in the result must appear as many times as it shows in both arrays
 and you may return the result in any order.



Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.


*/

var intersect = function (nums1, nums2) {
  const countMap = {};
  const intersection = [];

  for (const num of nums1) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  for (const num of nums2) {
    if (countMap[num] > 0) {
      intersection.push(num);
      countMap[num]--;
    }
  }

  return intersection;
};

result1 = "Should be [2,2] - Result:";
console.log(result1, intersect([1, 2, 2, 1], [2, 2]));
result2 = "Should be [4,9] or [9,4] - Result:";
console.log(result2, intersect([4, 9, 5], [9, 4, 9, 8, 4]));
