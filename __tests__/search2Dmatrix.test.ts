// Search 2D Matrix
// Arrays

// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// Really just a binary search with added arrays

// O(logn)

export function searchMatrix(matrix: number[][], target: number): boolean {
	let rowCount = matrix.length;
	let colCount = matrix[0].length;

	let left = 0;
	let right = rowCount * colCount - 1;
	while (left <= right) {
		const midpoint = Math.ceil((left + right) / 2);

		let row = Math.floor(midpoint / rowCount);
		let col = midpoint % colCount;

		const guess = matrix[row][col];
		if (guess === target) {
			return true;
		}

		if (guess < target) {
			left = midpoint + 1;
		} else {
			right = midpoint - 1;
		}
	}

	return false;
}

test('Search 2D Matrix 1', () => {
	const m = [
		[1, 3, 5, 7],
		[10, 11, 16, 20],
		[23, 30, 34, 60],
	];

	expect(searchMatrix(m, 3)).toBeTruthy();
});

test('Search 2D Matrix 2', () => {
	const m = [
		[1, 3, 5, 7],
		[10, 11, 16, 20],
		[23, 30, 34, 60],
	];

	expect(searchMatrix(m, 13)).toBeFalsy();
});
