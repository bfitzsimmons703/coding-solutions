// Word Break
// Dynamic Programming

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

export function wordBreak(s: string, wordDict: string[], memo: Record<string, boolean> = {}): boolean {
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

test('Word Break 1', () => {
	expect(wordBreak('leetcode', ['leet', 'code'])).toBeTruthy();
	expect(wordBreak('applepenapple', ['apple', 'pen'])).toBeTruthy();
	expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBeFalsy();
	expect(wordBreak('ccbb', ['bc', 'cb'])).toBeFalsy();
});
