// Two Sum - Closest to Target
// Arrays

// Given an int array nums and an int target. Find two integers in nums such that the sum is closest to target.

// O(n*log(n))
export function twoSumClosestTarget(nums: number[], target: number): number[] {
	nums.sort((a, b) => a - b);

	let left = 0;
	let right = nums.length - 1;
	let closest: number[] = [nums[left], nums[right]];

	while (left < right) {
		const currentSum = nums[left] + nums[right];
		const closestSum = closest[0] + closest[1];

		if (target - currentSum < target - closestSum) {
			closest = [nums[left], nums[right]];
		}

		if (currentSum < target) {
			left++;
		} else if (currentSum > target) {
			right--;
		} else {
			break;
		}
	}

	return closest;
}

test('Two Sum - Closest to Target', () => {
	expect(
		twoSumClosestTarget([1, 2, 3, 4, 5], 10).sort((a, b) => a - b)
	).toStrictEqual([4, 5]);
	expect(
		twoSumClosestTarget([-1, 2, 1, -4], 4).sort((a, b) => a - b)
	).toStrictEqual([1, 2]);
});
