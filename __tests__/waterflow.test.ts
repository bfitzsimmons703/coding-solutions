// Pacific Atlantic Water Flow
// Graphs

// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean.
// The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height.
// Water can flow from any cell adjacent to an ocean into the ocean.
// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

// O(n*m)

const getCoordString = (i: number, j: number): string => `${i},${j}`;

export function pacificAtlantic(heights: number[][]): number[][] {
	// Intead of trying to recursively do a DFS from each node O((m*nS)^2) and see if you can reach both oceans from that node,
	// start from the oceans and see what nodes you can reach.
	// And then return the common nodes between them!
	const pacificNodes = new Set<string>();
	const atlanticNodes = new Set<string>();
	const visited = new Set<string>();

	const dfs = (row: number, col: number, oceanSet: Set<string>) => {
		let queue = [[row, col]];
		while (queue.length) {
			const [r, c] = queue.shift()!;
			const coords = getCoordString(r, c);
			oceanSet.add(coords);

			if (visited.has(coords)) continue;

			visited.add(coords);

			const currentHeight = heights[r][c];

			// check up
			if (heights[r - 1] !== undefined && heights[r - 1][c] >= currentHeight) {
				queue.push([r - 1, c]);
			}

			// check right
			if (heights[r][c + 1] !== undefined && heights[r][c + 1] >= currentHeight) {
				queue.push([r, c + 1]);
			}

			// check down
			if (heights[r + 1] !== undefined && heights[r + 1][c] >= currentHeight) {
				queue.push([r + 1, c]);
			}

			// check left
			if (heights[r][c - 1] !== undefined && heights[r][c - 1] >= currentHeight) {
				queue.push([r, c - 1]);
			}
		}
	};

	// iterate over pacific shoreline nodes
	for (let i = 0; i < heights[0].length; i++) {
		dfs(0, i, pacificNodes);
	}

	for (let i = 0; i < heights.length; i++) {
		dfs(i, 0, pacificNodes);
	}

	// Reset visited nodes for atlantic check now
	visited.clear();

	// iterate over atlantic shoreline nodes
	for (let i = 0; i < heights.length; i++) {
		dfs(i, heights[0].length - 1, atlanticNodes);
	}

	for (let i = 0; i < heights[0].length; i++) {
		dfs(heights.length - 1, i, atlanticNodes);
	}

	const result: number[][] = [];

	// Find union
	pacificNodes.forEach((coords) => {
		if (atlanticNodes.has(coords)) {
			result.push(coords.split(',').map((n) => parseInt(n)));
		}
	});

	return result;
}

test('Pacific Atlantic 1', () => {
	let grid = [
		[1, 2, 2, 3, 5],
		[3, 2, 3, 4, 4],
		[2, 4, 5, 3, 1],
		[6, 7, 1, 4, 5],
		[5, 1, 1, 2, 4],
	];

	let answers = [
		[0, 4],
		[1, 3],
		[1, 4],
		[2, 2],
		[3, 0],
		[3, 1],
		[4, 0],
	];

	for (const answer of answers) {
		expect(pacificAtlantic(grid)).toContainEqual(answer);
	}
});

test('Pacific Atlantic 2', () => {
	let grid = [[1]];
	let answers = [[0, 0]];
	for (const answer of answers) {
		expect(pacificAtlantic(grid)).toContainEqual(answer);
	}
});

test('Pacific Atlantic 3', () => {
	let grid = [
		[10, 10, 10],
		[10, 1, 10],
		[10, 10, 10],
	];

	let answers = [
		[0, 0],
		[0, 1],
		[0, 2],
		[1, 0],
		[1, 2],
		[2, 0],
		[2, 1],
		[2, 2],
	];

	for (const answer of answers) {
		expect(pacificAtlantic(grid)).toContainEqual(answer);
	}
});
