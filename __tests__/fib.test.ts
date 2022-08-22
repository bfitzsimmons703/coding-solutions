// Fibonacci
// Dynamic Programming

// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

export function memoize<T extends number | string>(fn: (x: T) => T) {
	let cache: Record<any, T> = {};
	return function func(this: typeof func, arg: T) {
		if (cache[arg]) return cache[arg];

		let result = fn.apply(this, [arg]);
		cache[arg] = result;
		return result;
	};
}

let fib = (n: number): number => {
	if (n < 2) return n;

	return fib(n - 1) + fib(n - 2);
};

fib = memoize(fib);

test('Fib function is defined', () => {
	expect(typeof fib).toEqual('function');
});

test('calculates correct fib value for 1', () => {
	expect(fib(1)).toEqual(1);
});

test('calculates correct fib value for 2', () => {
	expect(fib(2)).toEqual(1);
});

test('calculates correct fib value for 3', () => {
	expect(fib(3)).toEqual(2);
});

test('calculates correct fib value for 4', () => {
	expect(fib(4)).toEqual(3);
});

test('calculates correct fib value for 39', () => {
	expect(fib(39)).toEqual(63245986);
});
