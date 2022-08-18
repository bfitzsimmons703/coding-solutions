// Longest Repeating Character Replacement
// Strings

// You are given a string s and an integer k.
// You can choose any character of the string and change it to any other uppercase English character.
// You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above operations.

export function characterReplacement(s: string, k: number): number {
	let left = 0;
	let right = 0;
	let mostFrequentCount = 0;
	const charCounts: Record<string, number> = {};

	while (right < s.length) {
		const rightChar = s[right];
		charCounts[rightChar] = charCounts[rightChar] + 1 || 1;

		if (charCounts[rightChar] > mostFrequentCount) {
			mostFrequentCount = charCounts[rightChar];
		}

		if (right - left + 1 - mostFrequentCount > k) {
			const leftChar = s[left];
			charCounts[leftChar]--;
			left++;
		}

		right++;
	}

	return right - left;
}

test('Longest Repeating Character Replacement', () => {
	expect(characterReplacement('ABAB', 2)).toBe(4);
	expect(characterReplacement('AABABBA', 1)).toBe(4);
	expect(characterReplacement('AABBCBA', 2)).toBe(5);
	expect(characterReplacement('AAAA', 2)).toBe(4);
	expect(characterReplacement('ABBB', 2)).toBe(4);
});
