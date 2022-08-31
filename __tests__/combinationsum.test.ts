// Combination Sum
// Backtracking

// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.
// You may return the combinations in any order.
// The same number may be chosen from candidates an unlimited number of times.
// Two combinations are unique if the frequency of at least one of the chosen numbers is different.
// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

export function combinationSum(
	candidates: number[],
	target: number,
	index: number = 0,
	currArray: number[] = [],
	combos: number[][] = []
): number[][] {
	if (target < 0) {
		return combos;
	}

	if (target === 0) {
		combos.push(currArray.slice());
		return combos;
	}

	if (index >= candidates.length) {
		return combos;
	}

	const val = candidates[index];
	currArray.push(val);
	combinationSum(candidates, target - val, index, currArray, combos);
	currArray.pop();
	combinationSum(candidates, target, index + 1, currArray, combos);

	return combos;
}

test('Combination Sum', () => {
	expect(combinationSum([2, 3, 6, 7], 7)).toStrictEqual([[2, 2, 3], [7]]);
	expect(combinationSum([2, 3, 5], 8)).toStrictEqual([
		[2, 2, 2, 2],
		[2, 3, 3],
		[3, 5],
	]);
});
