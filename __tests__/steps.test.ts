// Print Steps
// Miscellaneous

// @ts-nocheck

// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!'

function getCharString(char: string, count: number): string {
	let str = '';
	for (let i = 0; i < count; i++) {
		str += char;
	}
	return str;
}

export function steps(n: number): void {
	for (let row = 1; row <= n; row++) {
		const octothorps = getCharString('#', row);

		const underscoreCount = n - row;
		const underscores = getCharString('_', underscoreCount);

		console.log(octothorps + underscores);
	}
}

// OR if you're feeling fancy, recursion
function recursiveSteps(stepCount: number, row: number = 1): void {
	// Always get your base case!
	if (row > stepCount) return;

	const octothorps = getCharString('#', row);
	const underscoreCount = stepCount - row;
	const underscores = getCharString('_', underscoreCount);

	console.log(octothorps + underscores);

	recursiveSteps(stepCount, row + 1);
}

// Then call it like recursiveSteps(3)

beforeEach(() => {
	jest.spyOn(console, 'log');
});

afterEach(() => {
	console.log.mockRestore();
});

test('steps is a function', () => {
	expect(typeof steps).toEqual('function');
});

test('steps called with n = 1', () => {
	steps(1);
	expect(console.log.mock.calls[0][0]).toEqual('#');
	expect(console.log.mock.calls.length).toEqual(1);
});

test('steps called with n = 2', () => {
	steps(2);
	expect(console.log.mock.calls[0][0]).toEqual('#_');
	expect(console.log.mock.calls[1][0]).toEqual('##');
	expect(console.log.mock.calls.length).toEqual(2);
});

test('steps called with n = 3', () => {
	steps(3);
	expect(console.log.mock.calls[0][0]).toEqual('#__');
	expect(console.log.mock.calls[1][0]).toEqual('##_');
	expect(console.log.mock.calls[2][0]).toEqual('###');
	expect(console.log.mock.calls.length).toEqual(3);
});
