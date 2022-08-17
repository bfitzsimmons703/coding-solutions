// Lonely Integer
// Arrays

// Given an array of integers, where all elements but one occur twice, find the unique element.

// O(n)

export function lonelyinteger(nums: number[]): number | null {
	const counts: Record<number, number> = {};
	for (const num of nums) {
		counts[num] = counts[num] + 1 || 1;
	}

	for (const numString of Object.keys(counts)) {
		const num = parseInt(numString);
		if (counts[num] == 1) {
			return num;
		}
	}

	return null;
}

test('Lonely Integer', () => {
	expect(lonelyinteger([1, 2, 3, 4, 3, 2, 1])).toBe(4);
	expect(lonelyinteger([1, 2, 3, 2, 3])).toBe(1);
	expect(lonelyinteger([1, 2, 3, 1, 2, 3])).toBe(null);
	expect(lonelyinteger([])).toBe(null);
});
