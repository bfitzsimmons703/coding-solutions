// Print a Pyramid
// Miscellaneous

// @ts-nocheck

// Write a function that accepts a positive number N.
// The function should console log a pyramid shape with N levels using the # character.
// Make sure the pyramid has underscores on both the left *and* right hand sides.

function getCharString(char: string, count: number): string {
	let str = '';
	for (let i = 0; i < count; i++) {
		str += char;
	}
	return str;
}

export function pyramid(n: number): void {
	// Had to draw out the steps on paper to figure this out
	const maxOctos = n * 2 - 1;

	for (let row = 1; row <= n; row++) {
		const underscoreCount = n - row;
		const underscores = getCharString('_', underscoreCount);

		const octoCount = maxOctos - underscoreCount * 2; //* 2 because underscores are on both sides
		const octothorps = getCharString('#', octoCount);

		console.log(underscores + octothorps + underscores);
	}
}

beforeEach(() => {
	jest.spyOn(console, 'log');
});

afterEach(() => {
	console.log.mockRestore();
});

test('pyramid is a function', () => {
	expect(typeof pyramid).toEqual('function');
});

test('prints a pryamid for n = 2', () => {
	pyramid(2);
	expect(console.log.mock.calls[0][0]).toEqual('_#_');
	expect(console.log.mock.calls[1][0]).toEqual('###');
	expect(console.log.mock.calls.length).toEqual(2);
});

test('prints a pryamid for n = 3', () => {
	pyramid(3);
	expect(console.log.mock.calls[0][0]).toEqual('__#__');
	expect(console.log.mock.calls[1][0]).toEqual('_###_');
	expect(console.log.mock.calls[2][0]).toEqual('#####');
	expect(console.log.mock.calls.length).toEqual(3);
});

test('prints a pryamid for n = 4', () => {
	pyramid(4);
	expect(console.log.mock.calls[0][0]).toEqual('___#___');
	expect(console.log.mock.calls[1][0]).toEqual('__###__');
	expect(console.log.mock.calls[2][0]).toEqual('_#####_');
	expect(console.log.mock.calls[3][0]).toEqual('#######');
	expect(console.log.mock.calls.length).toEqual(4);
});
