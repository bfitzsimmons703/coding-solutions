// Three Sum
// Arrays

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// https://leetcode.com/problems/3sum/

// O(n^2)

export function threeSum(nums: number[]): number[][] {
	if (nums.length <= 3) {
		if (nums.reduce((curr, prev) => curr + prev) !== 0) {
			return [];
		}
	}

	const sums: number[][] = [];
	nums.sort((a, b) => a - b);
	// [-1,0,1,2,-1,-4]
	// [-4, -1, -1, 0, 1, 2]

	for (let i = 0; i < nums.length; i++) {
		const a = nums[i];

		// Because we sorted it, we know that duplicate values will be adjacent, and we want to skip dupes
		if (i > 0 && a === nums[i - 1]) continue;

		let left = i + 1;
		let right = nums.length - 1;

		while (left < right) {
			const threeSum = a + nums[left] + nums[right];

			if (threeSum === 0) {
				sums.push([a, nums[left], nums[right]]);
				left++; // could also do right--. Just need to change the pointers

				// make sure we still skip dupes
				while (nums[left] === nums[left - 1] && left < right) {
					left++;
				}
			} else if (threeSum > 0) {
				right--;
			} else if (threeSum < 0) {
				left++;
			}
		}
	}

	return sums;
}

test('Three Sum', () => {
	expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
		[-1, -1, 2],
		[-1, 0, 1],
	]);

	expect(threeSum([0, 1, 1])).toStrictEqual([]);
	expect(threeSum([0, 0, 0])).toStrictEqual([[0, 0, 0]]);
});
