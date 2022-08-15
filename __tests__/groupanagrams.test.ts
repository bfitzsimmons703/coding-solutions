// Group Anagrams
// Arrays

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// https://leetcode.com/problems/group-anagrams/

export function groupAnagrams(strs: string[]): string[][] {
	const result = [];
	const map: Map<string, string[]> = new Map();
	for (let i = 0; i < strs.length; i++) {
		const word = strs[i];

		// Can check for anagram status by just comparing the sorted word
		const sorted = word.split('').sort().join('');

		if (map.has(sorted)) {
			// Found an anagram
			map.get(sorted)!.push(word);
		} else {
			map.set(sorted, [word]);
		}
	}

	for (const value of Array.from(map.values())) {
		result.push(value);
	}

	return result;
}

test('Groups anagrams', () => {
	const group1 = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
	const answer1 = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];

	group1.sort(function (a, b) {
		return a.length - b.length;
	});

	const sorted = [];
	for (const group of group1) {
		sorted.push(group.sort());
	}

	expect(sorted).toStrictEqual(answer1);

	expect(groupAnagrams([''])).toStrictEqual([['']]);
	expect(groupAnagrams(['', ''])).toStrictEqual([['', '']]);
	expect(groupAnagrams(['a'])).toStrictEqual([['a']]);
});
