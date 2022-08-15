// Palindrome
// Strings

// Given a string, return true if the string is a palindrome or false if it is not.
// Palindromes are strings that form the same word if it is reversed.
// Include spaces and punctuation in determining if the string is a palindrome.

export function palindrome(s: string): boolean {
	let index = s.length - 1;

	for (const char of s) {
		if (char !== s[index]) {
			return false;
		}

		//No need to do the other half since we've already checked it
		if (index < s.length / 2) break;

		index--;
	}

	return true;
}

test('palindrome function is defined', () => {
	expect(typeof palindrome).toEqual('function');
});

test('"aba" is a palindrome', () => {
	expect(palindrome('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
	expect(palindrome(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
	expect(palindrome('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
	expect(palindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
	expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
	expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
	expect(palindrome('pennep')).toBeTruthy();
});
