// Plus Minus
// Arrays

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with 6 places after the decimal.

export function plusMinus(arr: number[]): string[] {
	let positiveCount = 0;
	let negativeCount = 0;
	let zeroCount = 0;

	for (const num of arr) {
		if (num > 0) {
			positiveCount++;
		} else if (num < 0) {
			negativeCount++;
		} else {
			zeroCount++;
		}
	}

	return [
		(positiveCount / arr.length).toFixed(6),
		(negativeCount / arr.length).toFixed(6),
		(zeroCount / arr.length).toFixed(6),
	];
}

test('Plus Minus', () => {
	expect(plusMinus([-4, 3, -9, 0, 4, 1]).join('|')).toBe(
		['0.500000', '0.333333', '0.166667'].join('|')
	);
});
