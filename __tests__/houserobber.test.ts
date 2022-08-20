// House Robber
// Dynamic Programming

// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

export function rob(nums: number[]): number {
	if (!nums.length) return 0;

	if (nums.length == 1) {
		return nums[0];
	}

	return Math.max(nums[0] + rob(nums.slice(2)), nums[1] + rob(nums.slice(3)));
}

test('House Robber', () => {
	expect(rob([1, 2, 3, 1])).toBe(4);
	expect(rob([2, 7, 9, 3, 1])).toBe(12);
	expect(rob([100, 2, 4, 120])).toBe(220);
});
