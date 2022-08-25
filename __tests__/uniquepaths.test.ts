// Unique Paths
// Dynamic Programming

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// O(n) with memoization

export function uniquePaths(m: number, n: number, memo: Record<string, number> = {}): number {
	const stringCoords = `${m},${n}`;
	if (stringCoords in memo) return memo[stringCoords];

	if (m * n === 0) return 0; //empty grid

	if (m === 1 || n === 1) return 1; //single cell

	memo[stringCoords] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
	return memo[stringCoords];
}

test('Unique Paths', () => {
	expect(uniquePaths(3, 7)).toBe(28);
	expect(uniquePaths(3, 2)).toBe(3);
	expect(uniquePaths(1, 1)).toBe(1);
	expect(uniquePaths(1, 5)).toBe(1);
	expect(uniquePaths(1, 0)).toBe(0);
});
