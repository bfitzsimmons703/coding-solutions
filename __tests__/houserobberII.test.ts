// House Robber II
// Dynamic Programming

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed.
// All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one.
// Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

function robSliceOfHouses(nums: number[]): number {
	const dp: number[] = Array(nums.length + 1).fill(0);
	dp[1] = nums[0];

	for (let i = 1; i < nums.length; i++) {
		dp[i + 1] = Math.max(dp[i], nums[i] + dp[i - 1]);
	}

	return dp[nums.length];
}

export function rob(nums: number[]): number {
	if (!nums.length) return 0;
	if (nums.length === 1) return nums[0];

	return Math.max(robSliceOfHouses(nums.slice(0, nums.length - 1)), robSliceOfHouses(nums.slice(1)));
}

test('House Robber II', () => {
	expect(rob([2, 3, 2])).toBe(3);
	expect(rob([1, 2, 3, 1])).toBe(4);
	expect(rob([100, 2, 4, 120])).toBe(122);
});
