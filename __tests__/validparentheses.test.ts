// Valid Parentheses
// Stacks

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// O(n)

export function isValid(s: string): boolean {
	const stack: string[] = [];
	const charMap: Record<string, string> = {
		'(': ')',
		'{': '}',
		'[': ']',
	};

	for (const char of s) {
		if (charMap[char]) {
			stack.push(char);
		} else {
			const lastChar = stack.pop()!;
			if (charMap[lastChar] !== char) {
				return false;
			}
		}
	}

	return stack.length === 0;
}

test('Valid Parentheses', () => {
	expect(isValid('()')).toBe(true);
	expect(isValid('()[]{}')).toBe(true);
	expect(isValid('((({}[])))')).toBe(true);
	expect(isValid('{{}}()[()]')).toBe(true);
	expect(isValid('(]')).toBe(false);
	expect(isValid('(])')).toBe(false);
	expect(isValid('{][}')).toBe(false);
});
