// Reverse String
// Strings

// Given a string, return a new string with the reversed
// order of characters

export function reverseString(s: string): string {
	return s.split('').reverse().join('');
}

test('Reverse function exists', () => {
	expect(reverseString).toBeDefined();
});

test('Reverse reverses a string', () => {
	expect(reverseString('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
	expect(reverseString('  abcd')).toEqual('dcba  ');
});
