// Flipping the Matrix
// Matrices

// Sean invented a game involving a 2Nx2N matrix where each cell of the matrix contains an integer.
// He can reverse any of its rows or columns any number of times.
// The goal of the game is to maximize the sum of the elements in the NxN submatrix located in the upper-left quadrant of the matrix.

export function flippingMatrix(matrix: number[][]): number {
	// Write your code here
	let n = matrix.length / 2;
	let max = Number.MIN_VALUE;
	let total = 0;

	for (let row = 0; row < n; row++) {
		for (let col = 0; col < n; col++) {
			max = Number.MIN_VALUE;

			// check upper left
			max = Math.max(max, matrix[row][col]);

			// check upper right
			max = Math.max(max, matrix[row][2 * n - col - 1]);

			// lower left
			max = Math.max(max, matrix[row][2 * n - col - 1]);

			// lower right
			max = Math.max(max, matrix[2 * n - row - 1][2 * n - col - 1]);

			total += max;
		}
	}

	return total;
}

test('Flip Matrix', () => {
	const m1 = [
		[1, 2],
		[3, 4],
	];

	expect(flippingMatrix(m1)).toBe(4);

	const m2 = [
		[112, 42, 83, 119],
		[56, 125, 56, 49],
		[15, 78, 101, 43],
		[62, 98, 114, 108],
	];

	expect(flippingMatrix(m2)).toBe(414);
});
