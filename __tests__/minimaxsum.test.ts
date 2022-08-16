// Mini-Max Sum
// Arrays

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.

export function miniMaxSum(arr: number[]): number[] {
	// Write your code here
	arr.sort((a, b) => a - b);
	const min = arr.slice(0, 4).reduce((prev, curr) => prev + curr);
	const max = arr.slice(1).reduce((prev, curr) => prev + curr);

	return [min, max];
}

test('MiniMax Sum', () => {
	expect(miniMaxSum([1, 2, 3, 4, 5])).toStrictEqual([10, 14]);
	expect(miniMaxSum([1, 3, 5, 7, 9])).toStrictEqual([16, 24]);
});
