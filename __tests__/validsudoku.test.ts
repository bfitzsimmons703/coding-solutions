// Valid Sudoku
// Arrays

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

export function isValidSudoku(board: string[][]): boolean {
	for (let i = 0; i < board.length; i++) {
		const row: string[] = board[i].filter((n) => n !== '.');
		const seen: Record<string, boolean> = {};
		for (const cell of row) {
			if (seen[cell]) {
				return false;
			}

			seen[cell] = true;
		}
	}

	for (let i = 0; i < board.length; i++) {
		const seen: Record<string, boolean> = {};

		for (let j = 0; j < board.length; j++) {
			const cell = board[i][j];
			if (cell !== '.') {
				if (seen[cell]) {
					return false;
				}

				seen[cell] = true;
			}
		}
	}

	const cols: Record<string, Set<string>> = {};
	const rows: Record<string, Set<string>> = {};
	const grids: Record<string, Set<string>> = {};

	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board.length; col++) {
			const cell = board[row][col];

			if (cell === '.') continue;

			if (!cols[col]) {
				cols[col] = new Set();
			}

			if (!rows[row]) {
				rows[row] = new Set();
			}

			const gridCoords = `${Math.floor(row / 3)}${Math.floor(col / 3)}`;
			if (!grids[gridCoords]) {
				grids[gridCoords] = new Set();
			}

			if (
				cols[col].has(cell) ||
				rows[row].has(cell) ||
				grids[gridCoords].has(cell)
			) {
				return false;
			}

			cols[col].add(cell);
			rows[row].add(cell);
			grids[gridCoords].add(cell);
		}
	}

	return true;
}

test('Valid Sudoku', () => {
	expect(
		isValidSudoku([
			['5', '3', '.', '.', '7', '.', '.', '.', '.'],
			['6', '.', '.', '1', '9', '5', '.', '.', '.'],
			['.', '9', '8', '.', '.', '.', '.', '6', '.'],
			['8', '.', '.', '.', '6', '.', '.', '.', '3'],
			['4', '.', '.', '8', '.', '3', '.', '.', '1'],
			['7', '.', '.', '.', '2', '.', '.', '.', '6'],
			['.', '6', '.', '.', '.', '.', '2', '8', '.'],
			['.', '.', '.', '4', '1', '9', '.', '.', '5'],
			['.', '.', '.', '.', '8', '.', '.', '7', '9'],
		])
	).toBeTruthy();

	expect(
		isValidSudoku([
			['8', '3', '.', '.', '7', '.', '.', '.', '.'],
			['6', '.', '.', '1', '9', '5', '.', '.', '.'],
			['.', '9', '8', '.', '.', '.', '.', '6', '.'],
			['8', '.', '.', '.', '6', '.', '.', '.', '3'],
			['4', '.', '.', '8', '.', '3', '.', '.', '1'],
			['7', '.', '.', '.', '2', '.', '.', '.', '6'],
			['.', '6', '.', '.', '.', '.', '2', '8', '.'],
			['.', '.', '.', '4', '1', '9', '.', '.', '5'],
			['.', '.', '.', '.', '8', '.', '.', '7', '9'],
		])
	).toBeFalsy();
});
