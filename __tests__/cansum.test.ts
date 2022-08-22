// Can Sum
// Dynamic Programming

// Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum
// You can reuse any numbers

export function canSum(
	nums: number[],
	target: number,
	memo: Record<number, boolean> = {}
): boolean {
	if (target in memo) return memo[target];

	// base cases
	if (target === 0) return true;

	if (target < 0) return false;

	for (const num of nums) {
		const remainder = target - num;
		memo[target] = canSum(nums, remainder, memo);
		if (memo[target]) {
			return true;
		}
	}

	memo[target] = false;
	return memo[target];
}

test('Can Sum', () => {
	expect(canSum([3, 34, 4, 12, 5, 2], 9)).toBeTruthy();
	expect(canSum([5, 3, 4, 7], 7)).toBeTruthy();
	expect(canSum([3, 34, 4, 12, 5, 2], 30)).toBeTruthy();
	expect(canSum([2, 4], 7)).toBeFalsy();
	expect(canSum([7, 14], 300)).toBeFalsy();
});
