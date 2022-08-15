// Anagrams
// Arrays

// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case

const format = (s: string): string =>
	s.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('');

export function anagrams(s1: string, s2: string): boolean {
	//make helper function so strings are formatted in the same way
	return format(s1) === format(s2);
}

test('anagrams function exists', () => {
	expect(typeof anagrams).toEqual('function');
});

test('"hello" is an anagram of "llohe"', () => {
	expect(anagrams('hello', 'llohe')).toBeTruthy();
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
	expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
});

test('"One One" is not an anagram of "Two two two"', () => {
	expect(anagrams('One One', 'Two two two')).toBeFalsy();
});

test('"One one" is not an anagram of "One one c"', () => {
	expect(anagrams('One one', 'One one c')).toBeFalsy();
});

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
	expect(
		anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
	).toBeFalsy();
});
