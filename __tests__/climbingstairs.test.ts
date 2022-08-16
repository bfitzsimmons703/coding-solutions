// Climbing Stairs
// Miscellaneous

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function memoize(fn: (n: number) => number): (n: number) => number {
	let cache: Record<number, number> = {};
	return function (n: number): number {
		if (cache[n]) {
			return cache[n];
		}

		const result = fn(n);
		cache[n] = result;
		return result;
	};
}

export const climbStairs = memoize((n: number): number => {
	// two base cases - if we overstep, return 0. If we're on the nth step, return 1
	if (n < 0) return 0;

	if (n === 0) return 1;

	return climbStairs(n - 1) + climbStairs(n - 2);
});

test('Climbing Stairs', () => {
	expect(climbStairs(2)).toBe(2);
	expect(climbStairs(3)).toBe(3);
	expect(climbStairs(5)).toBe(8);
});
