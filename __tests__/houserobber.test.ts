// House Robber
// Dynamic Programming

// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

export function rob(nums: number[]): number {
	const dp: number[] = [];

	dp[0] = 0;
	dp[1] = nums[0];

	for (let i = 1; i < nums.length; i++) {
		dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
	}

	return dp[nums.length];
}

test('House Robber', () => {
	expect(rob([1, 2, 3, 1])).toBe(4);
	expect(rob([2, 7, 9, 3, 1])).toBe(12);
	expect(rob([100, 2, 4, 120])).toBe(220);
});
