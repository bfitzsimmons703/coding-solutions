// Sentence Capitalization

// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.

function capitalizeWord(word: string): string {
	// Yay helper functions
	// Can assume the word will have at least 1 character, so split if off and add back everything from the second char on
	return word[0].toUpperCase() + word.slice(1);
}

export function capitalize(s: string): string {
	// Split up the sentence first
	const delim = ' ';
	const words = s.split(delim);
	const capitalizedWords = words.map((word) => capitalizeWord(word));
	return capitalizedWords.join(delim);
}

test('Capitalize is a function', () => {
	expect(typeof capitalize).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
	expect(capitalize('hi there, how is it going?')).toEqual(
		'Hi There, How Is It Going?'
	);
});

test('capitalizes the first letter', () => {
	expect(capitalize('i love breakfast at bill miller bbq')).toEqual(
		'I Love Breakfast At Bill Miller Bbq'
	);
});
