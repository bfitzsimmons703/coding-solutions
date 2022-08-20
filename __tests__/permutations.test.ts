// Permutations
// Miscellaneous

export function permute(nums: number[]): number[][] {
	const result = [];

	// Base case
	if (nums.length === 1) {
		return [[...nums]];
	}

	for (let i = 0; i < nums.length; i++) {
		let firstValue = nums[0];
		nums = nums.slice(1);

		let perms = permute(nums);
		for (const perm of perms) {
			perm.push(firstValue);
		}

		nums.push(firstValue);

		result.push(...perms);
	}

	return result;
}

test('Permutations', () => {
	expect(permute([1, 2, 3])).toStrictEqual([
		[3, 2, 1],
		[2, 3, 1],
		[1, 3, 2],
		[3, 1, 2],
		[2, 1, 3],
		[1, 2, 3],
	]);

	expect(permute([0, 1])).toStrictEqual([
		[1, 0],
		[0, 1],
	]);

	expect(permute([1])).toStrictEqual([[1]]);
});
