// Two Sum II
// Arrays

// Given a 1-indexed array of integers numbers that is sorted in increasing order, find two numbers such that they add up to a specific target number.
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.

// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// O(n)

export function twoSum(numbers: number[], target: number): number[] {
	let left = 0;
	let right = numbers.length - 1;

	while (left < right) {
		const sum = numbers[left] + numbers[right];
		if (sum === target) {
			return [left + 1, right + 1];
		}

		if (sum > target) {
			// To big, and since the array is sorted, we know that decreasing the right pointer will decrease the sum
			right--;
		}

		if (sum < target) {
			// Likewise, increasing left pointer will increase the sum
			left++;
		}
	}

	return [-1, -1];
}

test('Two Sum II', () => {
	expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2]);
	expect(twoSum([2, 3, 4], 6)).toStrictEqual([1, 3]);
	expect(twoSum([-1, 0], -1)).toStrictEqual([1, 2]);
});
