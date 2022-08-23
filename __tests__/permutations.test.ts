// Permutations
// Miscellaneous

// Given an array of elements, return all permutations

// O(n! * n)

export function permute<T>(elements: T[]): T[][] {
	// base case
	if (!elements.length) return [elements];

	const permutations: T[][] = [];

	const firstEl = elements[0];
	const rest = elements.slice(1);
	const subPerms = permute(rest);
	for (const perm of subPerms) {
		for (let i = 0; i <= perm.length; i++) {
			const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
			permutations.push(permWithFirst);
		}
	}

	return permutations;
}

test('Permutations', () => {
	expect(permute([1, 2, 3])).toStrictEqual([
		[1, 2, 3],
		[2, 1, 3],
		[2, 3, 1],
		[1, 3, 2],
		[3, 1, 2],
		[3, 2, 1],
	]);

	expect(permute([0, 1])).toStrictEqual([
		[0, 1],
		[1, 0],
	]);

	expect(permute([1])).toStrictEqual([[1]]);
});
