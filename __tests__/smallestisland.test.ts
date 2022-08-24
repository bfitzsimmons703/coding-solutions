// Smallest Island
// Graphs

// Given a grid containing Ws and Ls (W represents water and L represents land), return the size of the smallest island.
// An island is a vertically or horizontally connected region of land.
// You may assume that the grid contains at least one island.

// O(m * n)

const getCoords = (r: number, c: number): string => `${r},${c}`;

export function smallestIsland(grid: string[][]): number {
	let smallestSize = -1;
	const visited = new Set<string>();

	const bfs = (startRow: number, startCol: number): number => {
		let islandSize = 0;
		let queue: number[][] = [[startRow, startCol]];
		while (queue.length) {
			const [r, c] = queue.shift()!;

			if (r < 0 || r >= grid.length) continue;
			if (c < 0 || c >= grid[0].length) continue;
			if (grid[r][c] === 'W') continue;

			const coords = getCoords(r, c);
			if (visited.has(coords)) continue;

			visited.add(coords);
			islandSize++;
			queue.push(
				...[
					[r + 1, c],
					[r - 1, c],
					[r, c + 1],
					[r, c - 1],
				]
			);
		}
		return islandSize;
	};

	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			const size = bfs(row, col);
			if (size && (smallestSize === -1 || size < smallestSize)) {
				smallestSize = size;
			}
		}
	}

	return smallestSize;
}

test('Smallest Island', () => {
	let grid = [
		['W', 'L', 'W', 'W', 'W'],
		['W', 'L', 'W', 'W', 'W'],
		['W', 'W', 'W', 'L', 'W'],
		['W', 'W', 'L', 'L', 'W'],
		['L', 'W', 'W', 'L', 'L'],
		['L', 'L', 'W', 'W', 'W'],
	];
	expect(smallestIsland(grid)).toBe(2);

	grid = [
		['L', 'W', 'W', 'L', 'W'],
		['L', 'W', 'W', 'L', 'L'],
		['W', 'L', 'W', 'L', 'W'],
		['W', 'W', 'W', 'W', 'W'],
		['W', 'W', 'L', 'L', 'L'],
	];
	expect(smallestIsland(grid)).toBe(1);

	grid = [
		['L', 'L', 'L'],
		['L', 'L', 'L'],
		['L', 'L', 'L'],
	];
	expect(smallestIsland(grid)).toBe(9);

	grid = [
		['W', 'W'],
		['L', 'L'],
		['W', 'W'],
		['W', 'W'],
		['W', 'L'],
	];
	expect(smallestIsland(grid)).toBe(1);
});
