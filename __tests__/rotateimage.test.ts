// Rotate Image
// Matrices

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

export function rotate(matrix: number[][]): number[][] {
	let left = 0;
	let right = matrix.length - 1;

	while (left < right) {
		for (let i = 0; i < right - left; i++) {
			let top = left;
			let bottom = right;

			let topLeft = matrix[top][left + i]; //save into temp variable

			// move bottom left into top left
			matrix[top][left + i] = matrix[bottom - i][left];

			// move bottom right into bottom left
			matrix[bottom - i][left] = matrix[bottom][right - i];

			// move top right into bottom right
			matrix[bottom][right - i] = matrix[top + i][right];

			// move top left into top right
			matrix[top + i][right] = topLeft;
		}

		left++;
		right--;
	}

	return matrix;
}

test('Rotate Image', () => {
	expect(
		rotate([
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		])
	).toStrictEqual([
		[7, 4, 1],
		[8, 5, 2],
		[9, 6, 3],
	]);

	expect(
		rotate([
			[5, 1, 9, 11],
			[2, 4, 8, 10],
			[13, 3, 6, 7],
			[15, 14, 12, 16],
		])
	).toStrictEqual([
		[15, 13, 2, 5],
		[14, 3, 4, 1],
		[12, 6, 8, 9],
		[16, 7, 10, 11],
	]);
});
