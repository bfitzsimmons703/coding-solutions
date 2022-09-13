// String Compression
// Strings

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would be a2b1c5a3.
// If the compressed string would not become smaller than the original, just return the original string.
// The string will only have uppercase and lowercase letters.

// O(n + k^2) where n is s.length and k is the number of subsequences we have (k^2 because string concatenation is O(n^2))
// O(n) if we use a string with the initial capacity set to s.length. Can't do that in TypeScript though.

export function compress(s: string): string {
	if (!s) return s;

	let prevChar = s[0];

	let prevCharCount = 0;

	// Could improve this by setting the capacity of the string to s.length up front
	// so we don't have to keep creating a new string buffer every time we exceed the capacity (which incurs an O(n^2) cost)
	let compressed = '';

	for (const char of s) {
		if (char === prevChar) {
			prevCharCount++;
		} else {
			// add the previous char to the compressed string alonside its count
			compressed += `${prevChar}${prevCharCount}`;

			// If compressed is already bigger than s, just return s here
			// Avoids exceeding any string capacity we set up front. Not applicable to TypeScript of course
			if (compressed.length > s.length) {
				return s;
			}

			prevCharCount = 1;
			prevChar = char;
		}
	}

	// Get the last sequence of strings
	compressed += `${prevChar}${prevCharCount}`;

	return compressed.length < s.length ? compressed : s;
}

test('Compress String', () => {
	expect(compress('aabcccccaaa')).toEqual('a2b1c5a3');
	expect(compress('a')).toEqual('a');
	expect(compress('ab')).toEqual('ab');
	expect(compress('aaaaaaa')).toEqual('a7');
	expect(compress('aaBbcccaabbbbccccc')).toEqual('a2B1b1c3a2b4c5');
	expect(compress('')).toEqual('');
});
