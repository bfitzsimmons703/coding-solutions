// How Sum
// Dynamic Programming

// Given a set of non-negative integers, and a value sum, return an array containing any combination of elements that add up to the target sum
// If there is no combination, return null
// If there are multiple combinations, return any of them

export function howSum(
	nums: number[],
	target: number,
	memo: Record<number, number[] | null> = {}
): number[] | null {
	if (target in memo) return memo[target];

	//Base cases
	if (target === 0) return [];

	if (target < 0) return null;

	for (const num of nums) {
		const remainder = target - num;
		const subarray = howSum(nums, remainder, memo);
		if (subarray !== null) {
			memo[target] = [...subarray, num];
			return memo[target];
		}
	}

	memo[target] = null;

	return memo[target];
}

test('Can Sum', () => {
	expect(howSum([5, 3, 4, 7], 7)?.sort()).toStrictEqual([3, 4]);
	expect(howSum([5, 3, 2], 8)?.sort()).toStrictEqual([3, 5]);
	expect(howSum([2, 4], 7)).toBeNull();
	expect(howSum([7, 14], 300)).toBeNull();
});
