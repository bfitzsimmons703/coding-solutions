// Maximum Product Subarray
// Dynamic Programming

// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.
// A subarray is a contiguous subsequence of the array.

export function maxProduct(nums: number[]): number {
	let result = nums[0];
	let prevMax = nums[0];
	let prevMin = nums[0];
	for (let i = 1; i < nums.length; i++) {
		let currMax = Math.max(nums[i], prevMax * nums[i], prevMin * nums[i]);
		let currMin = Math.min(nums[i], prevMax * nums[i], prevMin * nums[i]);

		prevMax = currMax;
		prevMin = currMin;

		result = Math.max(currMax, result);
	}
	return result;
}

test('Maximum Product Subarray', () => {
	expect(maxProduct([2, 3, -2, 4])).toEqual(6);
	expect(maxProduct([-2, 3, -4])).toEqual(24);
	expect(maxProduct([-2, 0, -1])).toEqual(0);
});
