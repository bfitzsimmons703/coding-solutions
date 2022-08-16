// Binary Search
// Arrays

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

export function search(nums: number[], target: number): number {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		const midpoint = Math.ceil((left + right) / 2);
		const guess = nums[midpoint];

		if (target === guess) {
			return midpoint;
		} else if (target > guess) {
			left = midpoint + 1;
		} else if (target < guess) {
			right = midpoint - 1;
		}
	}

	return -1;
}

test('Binary Search', () => {
	expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
	expect(search([-1, 0, 3, 5, 9, 12], 0)).toBe(1);
	expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});
