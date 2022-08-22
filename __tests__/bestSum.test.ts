// Best Sum
// Dynamic Programming

// Given a set of non-negative integers, and a value sum, return an array containing with the shortest combination of elements that add up to the target sum
// If there is no combination, return null
// If there are ties, return any of the shortest ones

export function bestSum(
	nums: number[],
	target: number,
	memo: Record<number, number[] | null> = {}
): number[] | null {
	if (target in memo) return memo[target];

	// Base cases
	if (target === 0) return [];

	if (target < 0) return null;

	let result: number[] | null = null;

	for (const num of nums) {
		const remainder = target - num;
		const subresult = bestSum(nums, remainder, memo);
		if (subresult !== null) {
			if (result === null || subresult.length < result.length) {
				result = [...subresult, num];
			}
		}
	}

	memo[target] = result;

	return result;
}

test('Can Sum', () => {
	expect(bestSum([5, 3, 4, 7], 7)?.sort()).toStrictEqual([7]);
	expect(bestSum([5, 3, 2], 8)?.sort()).toStrictEqual([3, 5]);
	expect(bestSum([1, 4, 5], 8)?.sort()).toStrictEqual([4, 4]);
	expect(bestSum([2, 4], 7)).toBeNull();
	expect(bestSum([1, 2, 5, 25], 100)?.sort()).toStrictEqual([25, 25, 25, 25]);
	expect(bestSum([7, 14], 300)).toBeNull();
});
