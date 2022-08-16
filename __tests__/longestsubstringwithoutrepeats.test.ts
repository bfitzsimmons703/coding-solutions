// Longest Substring Without Repeating Characters
// Strings

// Given a string s, find the length of the longest substring without repeating characters

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

export function lengthOfLongestSubstring(s: string): number {
	if (!s.length) return 0;

	let left = 0;
	let right = 0;
	let maxLength = 1;

	let seen: Record<string, any> = {};
	while (right < s.length) {
		if (!seen[s[right]]) {
			seen[s[right]] = true;
			right++;
		} else {
			seen[s[left]] = false;
			left++;
		}

		maxLength = Math.max(maxLength, right - left);
	}

	return maxLength;
}

test('Longest Substring Without Repeating Characters', () => {
	expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
	expect(lengthOfLongestSubstring('bbbb')).toBe(1);
	expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
});
