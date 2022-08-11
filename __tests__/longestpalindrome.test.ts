// Given a string s, return the longest palindromic substring in s.
export function longestPalindrome(s: string): string {
	let longest = '';
	for (let mid = 0; mid < s.length; mid++) {
		// odd length
		let left = mid,
			right = mid;

		while (left >= 0 && right < s.length && s[left] === s[right]) {
			let substr = s.slice(left, right + 1);
			if (substr.length > longest.length) {
				longest = substr;
			}

			left--;
			right++;
		}

		// even length
		left = mid;
		right = mid + 1;
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			let substr = s.slice(left, right + 1);
			if (substr.length > longest.length) {
				longest = substr;
			}

			left--;
			right++;
		}
	}
	return longest;
}

test('returns the longest substring palindrome', () => {
	expect(longestPalindrome('babdd')).toEqual('bab');
	expect(longestPalindrome('cbbd')).toEqual('bb');
});

const minIntegerNumber = Math.pow(-2, 31); // -2147483648
const maxIntegerNumber = Math.pow(2, 31) - 1; // 2147483647

function reverse(x: number): number {
	const reversed =
		Math.sign(x) *
		parseInt(Math.abs(x).toString().split('').reverse().join(''));

	if (reversed > maxIntegerNumber || reversed < minIntegerNumber) return 0;

	return reversed;
}
