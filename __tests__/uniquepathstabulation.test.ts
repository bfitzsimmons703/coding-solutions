// Unique Paths Tabulation
// Dynamic Programming

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// O(n * m) with tabulation

export function uniquePaths(m: number, n: number): number {
	const dp: number[][] = [];
	for (let i = 0; i <= m; i++) {
		if (!dp[i]) dp[i] = [];
		for (let j = 0; j <= n; j++) {
			dp[i][j] = 0;
		}
	}

	dp[1][1] = 1;

	for (let i = 0; i <= m; i++) {
		for (let j = 0; j <= n; j++) {
			const currNum = dp[i][j];

			if (i + 1 <= m) {
				dp[i + 1][j] += currNum;
			}

			if (j + 1 <= n) {
				dp[i][j + 1] += currNum;
			}
		}
	}

	return dp[m][n];
}

test('Unique Paths', () => {
	expect(uniquePaths(3, 7)).toBe(28);
	expect(uniquePaths(3, 2)).toBe(3);
	expect(uniquePaths(1, 1)).toBe(1);
	expect(uniquePaths(1, 5)).toBe(1);
	expect(uniquePaths(1, 0)).toBe(0);
});
