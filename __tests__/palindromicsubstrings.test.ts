// Palindromic Substrings
// Dynamic Programming

// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

export function countSubstrings(s: string): number {
	let count = 0;

	if (!s.length) return count;

	for (let i = 0; i < s.length; i++) {
		// odd length palindromes
		let left = i;
		let right = i;

		while (left >= 0 && right < s.length && s[left] === s[right]) {
			count++;
			left--;
			right++;
		}

		// even length palindromes
		left = i;
		right = i + 1;

		while (left >= 0 && right < s.length && s[left] === s[right]) {
			count++;
			left--;
			right++;
		}
	}

	return count;
}

test('Palindromic Substrings', () => {
	expect(countSubstrings('abc')).toEqual(3);
	expect(countSubstrings('aaa')).toEqual(6);
	expect(countSubstrings('')).toEqual(0);
});
