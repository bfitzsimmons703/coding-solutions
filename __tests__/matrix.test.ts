// Spiral Matrix

// Write a function that accepts an integer N
// and returns a NxN spiral matrix.

export function matrix(n: number): number[][] {
	//set up the matrix body
	let matrix: number[][] = [];
	for (let i = 0; i < n; i++) {
		let row: any[] = [];
		matrix.push(row);
	}

	// These act as the bounds of the matrix we're working with
	let top = 0;
	let right = n - 1;
	let bottom = n - 1;
	let left = 0;

	let currentNumber = 1;
	while (top <= bottom && left <= right) {
		// Top row
		for (let i = left; i <= right; i++) {
			matrix[top][i] = currentNumber;
			currentNumber++;
		}

		// Done with the top row, set the upper bound one row down
		top++;

		// Down the right side
		for (let i = top; i <= bottom; i++) {
			matrix[i][right] = currentNumber;
			currentNumber++;
		}

		// move right side one to the left
		right--;

		// left across the bottom
		for (let i = right; i >= left; i--) {
			matrix[bottom][i] = currentNumber;
			currentNumber++;
		}

		// bring the lower bound one up
		bottom--;

		// up the left hand side
		for (let i = bottom; i >= top; i--) {
			matrix[i][left] = currentNumber;
			currentNumber++;
		}

		// move left bound one to the right
		left++;
	}

	return matrix;
}

test('matrix is a function', () => {
	expect(typeof matrix).toEqual('function');
});

test('matrix produces a 2x2 array', () => {
	const m = matrix(2);
	expect(m.length).toEqual(2);
	expect(m[0]).toEqual([1, 2]);
	expect(m[1]).toEqual([4, 3]);
});

test('matrix produces a 3x3 array', () => {
	const m = matrix(3);
	expect(m.length).toEqual(3);
	expect(m[0]).toEqual([1, 2, 3]);
	expect(m[1]).toEqual([8, 9, 4]);
	expect(m[2]).toEqual([7, 6, 5]);
});

test('matrix produces a 4x4 array', () => {
	const m = matrix(4);
	expect(m.length).toEqual(4);
	expect(m[0]).toEqual([1, 2, 3, 4]);
	expect(m[1]).toEqual([12, 13, 14, 5]);
	expect(m[2]).toEqual([11, 16, 15, 6]);
	expect(m[3]).toEqual([10, 9, 8, 7]);
});
