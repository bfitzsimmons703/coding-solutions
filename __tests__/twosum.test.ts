// Two Sums

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// https://leetcode.com/problems/two-sum/

export function twoSum(nums: number[], target: number): number[] {
	// number -> index
	const numIndices: Record<number, number> = {};

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const diff = target - num;
		if (diff in numIndices) {
			return [numIndices[diff], i];
		}

		numIndices[num] = i;
	}

	return [];
}

test('Finds the right indices', () => {
	expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
	expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
	expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});
