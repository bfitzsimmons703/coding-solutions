// Contains Duplicates

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// https://leetcode.com/problems/contains-duplicate/

export function containsDuplicate(nums: number[]): boolean {
	const seen: Record<number, boolean> = {};
	for (const num of nums) {
		if (seen[num]) {
			return true;
		}

		seen[num] = true;
	}

	return false;
}

// Or using Set
export function containsDuplicateUsingSet(nums: number[]): boolean {
	//Pass the array into a Set() (which removes duplicates) and then compare its size to the original array.
	return new Set(nums).size !== nums.length;
}

test('Finds duplicates or validates uniqueness of array values', () => {
	expect(containsDuplicate([1, 1, 2, 3, 4])).toEqual(true);
	expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
	expect(containsDuplicate([1, 2, 3, 4, 4, 5, 6, 7, 7])).toEqual(true);

	expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
	expect(containsDuplicate([1, 2, 3, 4, 5, 10, 122])).toEqual(false);
});
