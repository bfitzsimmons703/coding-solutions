// Diagonal Difference
// Arrays

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// O(n)

export function diagonalDifference(arr: number[][]): number {
	// Write your code here
	let sum1 = 0;
	for (let i = 0; i < arr.length; i++) {
		const num = arr[i][i];
		sum1 += num;
	}

	let sum2 = 0;
	for (let i = arr.length - 1; i >= 0; i--) {
		const row = arr.length - 1 - i;
		const col = i;
		const num = arr[row][col];
		sum2 += num;
	}

	return Math.abs(sum1 - sum2);
}

test('Diagonal Difference', () => {
	const m1 = [
		[1, 2, 3],
		[4, 5, 6],
		[9, 8, 9],
	];
	expect(diagonalDifference(m1)).toBe(2);

	const m2 = [
		[11, 2, 4],
		[4, 5, 6],
		[10, 8, -12],
	];
	expect(diagonalDifference(m2)).toBe(15);
});
