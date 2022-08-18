// Number of Islands
// Graphs

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.

// https://leetcode.com/problems/number-of-islands/

const getCoordinateString = (r: string | number, c: string | number): string =>
	`${r},${c}`;

export function numIslands(grid: string[][]): number {
	if (!grid.length) return 0;

	const rows = grid.length;
	const cols = grid[0].length;
	const visited = new Set();
	let islandCount = 0;

	function bfs(startRow: number, startCol: number) {
		const queue: number[][] = [[startRow, startCol]];

		while (queue.length) {
			const coords = queue.shift();
			if (coords !== undefined) {
				let [row, col] = coords;

				let r = row;
				let c = col + 1;
				let coordString = getCoordinateString(r, c);
				const right = grid[r][c];
				if (right && right === '1' && !visited.has(coordString)) {
					queue.push([r, c]);
					visited.add(coordString);
				}

				c = col - 1;
				coordString = getCoordinateString(r, c);
				const left = grid[r][c];
				if (left && left === '1' && !visited.has(coordString)) {
					queue.push([r, c]);
					visited.add(coordString);
				}

				r = row - 1;
				c = col;
				coordString = getCoordinateString(r, c);
				const top = grid[r] ? grid[r][c] : null;
				if (top && top === '1' && !visited.has(coordString)) {
					queue.push([r, c]);
					visited.add(coordString);
				}

				r = row + 1;
				coordString = getCoordinateString(r, c);
				const bottom = grid[r] ? grid[r][c] : null;
				if (bottom && bottom === '1' && !visited.has(coordString)) {
					queue.push([r, c]);
					visited.add(coordString);
				}
			}
		}
	}

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			const num = grid[row][col];
			if (num === '1' && !visited.has(getCoordinateString(row, col))) {
				visited.add(getCoordinateString(row, col));
				islandCount++;
				bfs(row, col);
			}
		}
	}

	return islandCount;
}

test('Number of Islands 1', () => {
	const grid = [
		['1', '1', '1', '1', '0'],
		['1', '1', '0', '1', '0'],
		['1', '1', '0', '0', '0'],
		['0', '0', '0', '0', '0'],
	];
	expect(numIslands(grid)).toBe(1);
});

test('Number of Islands 3', () => {
	const grid = [
		['1', '1', '0', '0', '0'],
		['1', '1', '0', '0', '0'],
		['0', '0', '1', '0', '0'],
		['0', '0', '0', '1', '1'],
	];
	expect(numIslands(grid)).toBe(3);
});

test('Number of Islands 3', () => {
	const grid = [
		[
			'1',
			'0',
			'0',
			'1',
			'1',
			'1',
			'0',
			'1',
			'1',
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
		],
		[
			'1',
			'0',
			'0',
			'1',
			'1',
			'0',
			'0',
			'1',
			'0',
			'0',
			'0',
			'1',
			'0',
			'1',
			'0',
			'1',
			'0',
			'0',
			'1',
			'0',
		],
		[
			'0',
			'0',
			'0',
			'1',
			'1',
			'1',
			'1',
			'0',
			'1',
			'0',
			'1',
			'1',
			'0',
			'0',
			'0',
			'0',
			'1',
			'0',
			'1',
			'0',
		],
		[
			'0',
			'0',
			'0',
			'1',
			'1',
			'0',
			'0',
			'1',
			'0',
			'0',
			'0',
			'1',
			'1',
			'1',
			'0',
			'0',
			'1',
			'0',
			'0',
			'1',
		],
		[
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
			'1',
			'1',
			'1',
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
		],
		[
			'1',
			'0',
			'0',
			'0',
			'0',
			'1',
			'0',
			'1',
			'0',
			'1',
			'1',
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
			'1',
			'0',
			'1',
		],
		[
			'0',
			'0',
			'0',
			'1',
			'0',
			'0',
			'0',
			'1',
			'0',
			'1',
			'0',
			'1',
			'0',
			'1',
			'0',
			'1',
			'0',
			'1',
			'0',
			'1',
		],
		[
			'0',
			'0',
			'0',
			'1',
			'0',
			'1',
			'0',
			'0',
			'1',
			'1',
			'0',
			'1',
			'0',
			'1',
			'1',
			'0',
			'1',
			'1',
			'1',
			'0',
		],
		[
			'0',
			'0',
			'0',
			'0',
			'1',
			'0',
			'0',
			'1',
			'1',
			'0',
			'0',
			'0',
			'0',
			'1',
			'0',
			'0',
			'0',
			'1',
			'0',
			'1',
		],
		[
			'0',
			'0',
			'1',
			'0',
			'0',
			'1',
			'0',
			'0',
			'0',
			'0',
			'0',
			'1',
			'0',
			'0',
			'1',
			'0',
			'0',
			'0',
			'1',
			'0',
		],
		[
			'1',
			'0',
			'0',
			'1',
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
			'1',
			'0',
			'0',
			'1',
			'0',
			'1',
			'0',
			'1',
			'0',
		],
		[
			'0',
			'1',
			'0',
			'0',
			'0',
			'1',
			'0',
			'1',
			'0',
			'1',
			'1',
			'0',
			'1',
			'1',
			'1',
			'0',
			'1',
			'1',
			'0',
			'0',
		],
		[
			'1',
			'1',
			'0',
			'1',
			'0',
			'0',
			'0',
			'0',
			'1',
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
			'1',
			'0',
			'0',
			'0',
			'1',
		],
		[
			'0',
			'1',
			'0',
			'0',
			'1',
			'1',
			'1',
			'0',
			'0',
			'0',
			'1',
			'1',
			'1',
			'1',
			'1',
			'0',
			'1',
			'0',
			'0',
			'0',
		],
		[
			'0',
			'0',
			'1',
			'1',
			'1',
			'0',
			'0',
			'0',
			'1',
			'1',
			'0',
			'0',
			'0',
			'1',
			'0',
			'1',
			'0',
			'0',
			'0',
			'0',
		],
		[
			'1',
			'0',
			'0',
			'1',
			'0',
			'1',
			'0',
			'0',
			'0',
			'0',
			'1',
			'0',
			'0',
			'0',
			'1',
			'0',
			'1',
			'0',
			'1',
			'1',
		],
		[
			'1',
			'0',
			'1',
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
			'1',
			'0',
			'0',
			'0',
			'1',
			'0',
			'1',
			'0',
			'0',
			'0',
			'0',
		],
		[
			'0',
			'1',
			'1',
			'0',
			'0',
			'0',
			'1',
			'1',
			'1',
			'0',
			'1',
			'0',
			'1',
			'0',
			'1',
			'1',
			'1',
			'1',
			'0',
			'0',
		],
		[
			'0',
			'1',
			'0',
			'0',
			'0',
			'0',
			'1',
			'1',
			'0',
			'0',
			'1',
			'0',
			'1',
			'0',
			'0',
			'1',
			'0',
			'0',
			'1',
			'1',
		],
		[
			'0',
			'0',
			'0',
			'0',
			'0',
			'0',
			'1',
			'1',
			'1',
			'1',
			'0',
			'1',
			'0',
			'0',
			'0',
			'1',
			'1',
			'0',
			'0',
			'0',
		],
	];
	expect(numIslands(grid)).toBe(58);
});
