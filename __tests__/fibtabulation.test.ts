// Fibonacci Tabulation
// Dynamic Programming

// Implement Fibonacci, but use DP tabulation, not recursion

export function fibTabulation(n: number): number {
	const dp: number[] = [];
	dp[0] = 0;
	dp[1] = 1;

	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}

	return dp[n];
}

test('calculates correct fibTabulation value for 1', () => {
	expect(fibTabulation(1)).toEqual(1);
});

test('calculates correct fibTabulation value for 2', () => {
	expect(fibTabulation(2)).toEqual(1);
});

test('calculates correct fibTabulation value for 3', () => {
	expect(fibTabulation(3)).toEqual(2);
});

test('calculates correct fibTabulation value for 4', () => {
	expect(fibTabulation(4)).toEqual(3);
});

test('calculates correct fibTabulation value for 39', () => {
	expect(fibTabulation(39)).toEqual(63245986);
});
