// Longest Consecutive Sequence
// Arrays

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// https://leetcode.com/problems/longest-consecutive-sequence/

export function longestConsecutive(nums: number[]): number {
	let sequences: Record<number, Set<number>> = {};
	let seen: Record<number, number> = {};

	// Build hash so we don't have to keep looping through array
	for (const num of nums) {
		seen[num] = num;
	}

	for (const num of nums) {
		if (!seen[num - 1]) {
			// No number before this one, so this is the start of a sequence
			sequences[num] = new Set();
			sequences[num].add(num); //get self in there
		}
	}

	let maxLength = 0;
	for (const key of Object.keys(sequences)) {
		const start = parseInt(key);
		let n = start + 1;
		while (n in seen) {
			sequences[start].add(n);
			if (sequences[start].size > maxLength) {
				maxLength = sequences[start].size;
			}

			n++;
		}
	}

	return maxLength;
}

test('Longest Consecutive Sequence', () => {
	expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
	expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
});
