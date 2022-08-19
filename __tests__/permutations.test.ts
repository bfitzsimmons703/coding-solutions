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

console.log(permute([1, 2, 3]));
