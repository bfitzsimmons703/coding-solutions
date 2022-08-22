// Can Construct
// Dynamic Programming

// Given an array of strings and a string target, determine if there is a subset of the given array that can combine into the target

export function canConstruct(words: string[], target: string, memo: Record<string, boolean> = {}): boolean {
	if (target in memo) return memo[target];

	// base case
	if (!target) return true;

	for (const word of words) {
		const wordIndex = target.indexOf(word);
		// Only want to test prefixes
		if (wordIndex === 0) {
			const subTarget = target.slice(word.length);
			if (canConstruct(words, subTarget, memo)) {
				memo[target] = true;
				return true;
			}
		}
	}

	memo[target] = false;

	return false;
}

test('Can Construct', () => {
	expect(canConstruct(['ab', 'abc', 'cd', 'def', 'abcd'], 'abcdef')).toBeTruthy();
	expect(canConstruct(['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'], 'skateboard')).toBeFalsy();
	expect(canConstruct(['a', 'p', 'ate', 'ent', 'enter', 'ot', 'o', 't'], 'enterapotentpot')).toBeTruthy();
});
