// Top K Most Frequent Elements
// Arrays

// Given an integer array nums and an integer k, return the k most frequent elements.

// https://leetcode.com/problems/top-k-frequent-elements/

export function topKFrequent(nums: number[], k: number): number[] {
	const counts: Record<number, number> = {};
	for (const num of nums) {
		counts[num] = counts[num] + 1 || 1;
	}

	const sorted = [];
	for (const num in counts) {
		const count = counts[num];
		sorted.push({ num, count });
	}

	sorted.sort((a, b) => b.count - a.count);

	return sorted.slice(0, k).map(({ num }) => parseInt(num));
}

test('Top K Most Frequent Elements', () => {
	expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
	expect(topKFrequent([1], 1)).toEqual([1]);
});
