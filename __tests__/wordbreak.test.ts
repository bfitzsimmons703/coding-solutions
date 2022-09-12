// Word Break
// Dynamic Programming

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

function wordBreakRecursive(s: string, wordDict: string[], memo: Record<string, boolean> = {}): boolean {
	if (!s) {
		return true;
	}

	if (s in memo) {
		return memo[s];
	}

	for (const word of wordDict) {
		let indexOf = s.indexOf(word);
		if (indexOf !== -1) {
			const left = s.slice(0, indexOf);
			const right = s.slice(indexOf + word.length);

			memo[left] = wordBreak(left, wordDict, memo);
			memo[right] = wordBreak(right, wordDict, memo);

			if (memo[left] && memo[right]) {
				return true;
			}
		}
	}

	return false;
}

// Bottom up approach
// O(n^2 * m)
export function wordBreak(s: string, wordDict: string[]): boolean {
	const dp = Array(s.length + 1).fill(false);
	dp[s.length] = true;
	for (let i = s.length - 1; i >= 0; i--) {
		for (const word of wordDict) {
			if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
				// We have enough characters in the substring starting at `i` to compare it to `word`
				// And the substring === word

				/* 
				Since we're working backwards, dp[i + word.length] has already been calculated
				Ex: `leetcode`, [`leet`, `code`];
				if i = 0, we know that i + `leet`.length = 4. Which means we have `code` left (starting at index 4)
				We already calculated true for i = 4, since `code` is in the wordDict. Which tells us that 0 will be true too
				*/
				dp[i] = dp[i + word.length];

				if (dp[i]) {
					break;
				}
			}
		}
	}

	return dp[0];
}

test('Word Break 1', () => {
	expect(wordBreak('leetcode', ['leet', 'code'])).toBeTruthy();
	expect(wordBreak('applepenapple', ['apple', 'pen'])).toBeTruthy();
	expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBeFalsy();
	expect(wordBreak('ccbb', ['bc', 'cb'])).toBeFalsy();
});
