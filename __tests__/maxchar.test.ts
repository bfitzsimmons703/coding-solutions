// Max Character
// Strings

// Given a string, return the character that is most commonly used in the string.

export function maxChar(s: string): string {
	let charCounts: Record<string, number> = {};
	let maxCount: number = 0;
	let maxChar: string = s[0];
	for (const char of s) {
		charCounts[char] = charCounts[char] + 1 || 1;
		if (charCounts[char] > maxCount) {
			maxCount = charCounts[char];
			maxChar = char;
		}
	}

	return maxChar;
}

test('maxChar function exists', () => {
	expect(typeof maxChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
	expect(maxChar('a')).toEqual('a');
	expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
	expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
});
