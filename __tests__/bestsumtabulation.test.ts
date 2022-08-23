// Best Sum Tabulation
// Dynamic Programming

// Given a set of non-negative integers, and a value sum, return an array containing with the shortest combination of elements that add up to the target sum
// If there is no combination, return null
// If there are ties, return any of the shortest ones

export function bestSum(nums: number[], target: number): number[] | null {
	let dp: number[][] = Array(target + 1).fill(null);
	dp[0] = [];

	for (let i = 0; i <= target; i++) {
		if (dp[i] === null) continue;

		for (const num of nums) {
			const subarray = [...dp[i], num];

			if (!dp[i + num] || subarray.length < dp[i + num].length) {
				dp[i + num] = subarray;
			}
		}
	}

	return dp[target];
}

test('Best Sum Tabulation', () => {
	expect(bestSum([5, 3, 4, 7], 7)?.sort()).toStrictEqual([7]);
	expect(bestSum([5, 3, 2], 8)?.sort()).toStrictEqual([3, 5]);
	expect(bestSum([1, 4, 5], 8)?.sort()).toStrictEqual([4, 4]);
	expect(bestSum([2, 4], 7)).toBeNull();
	expect(bestSum([1, 2, 5, 25], 100)?.sort()).toStrictEqual([25, 25, 25, 25]);
	expect(bestSum([7, 14], 300)).toBeNull();
});
