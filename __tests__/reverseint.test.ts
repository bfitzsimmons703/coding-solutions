// Reverse an Integer
// Miscellaneous

// Given an integer, return an integer that is the reverse
// ordering of numbers.

export function reverseInt(n: number): number {
	//Get rid of the sign first
	const str = Math.abs(n).toString();

	//Tack the sign back on
	return Math.sign(n) * parseInt(str.split('').reverse().join(''));
}

test('ReverseInt function exists', () => {
	expect(reverseInt).toBeDefined();
});

test('ReverseInt handles 0 as an input', () => {
	expect(reverseInt(0)).toEqual(0);
});

test('ReverseInt flips a positive number', () => {
	expect(reverseInt(5)).toEqual(5);
	expect(reverseInt(15)).toEqual(51);
	expect(reverseInt(90)).toEqual(9);
	expect(reverseInt(2359)).toEqual(9532);
});

test('ReverseInt flips a negative number', () => {
	expect(reverseInt(-5)).toEqual(-5);
	expect(reverseInt(-15)).toEqual(-51);
	expect(reverseInt(-90)).toEqual(-9);
	expect(reverseInt(-2359)).toEqual(-9532);
});
