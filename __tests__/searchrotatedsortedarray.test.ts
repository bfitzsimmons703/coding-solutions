// Search in Rotated Sorted Array
// Binary Search

// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

export function search(nums: number[], target: number): number {
	let [left, right] = [0, nums.length - 1];
	while (left <= right) {
		const mid = Math.ceil((left + right) / 2);
		const midNum = nums[mid];

		if (midNum === target) return mid;

		if (midNum >= nums[left]) {
			// in left sorted portion
			if (target > midNum || target < nums[left]) {
				// search right
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		} else {
			// in right sorted portion
			if (target < midNum || target > nums[right]) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		}
	}

	return -1;
}

test('Search Rotated Sorted Array', () => {
	expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
	expect(search([7, 0, 1, 2, 3, 4], 7)).toBe(0);
	expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
	expect(search([1], 0)).toBe(-1);
	expect(search([], 0)).toBe(-1);
});
