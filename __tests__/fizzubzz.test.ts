// FizzBuzz

// @ts-nocheck

// Write a program that console logs the numbers from 1 to n.
// But for multiples of three print "fizz" instead of the number and for the multiples of five print "buzz".
// For numbers which are multiples of both three and five print "fizzbuzz".

export function fizzBuzz(n: number): void {
	//Don't overthink this one. Keep it simple.
	for (let i = 1; i <= n; i++) {
		if (i % 15 === 0) {
			console.log('fizzbuzz');
		} else if (i % 3 === 0) {
			console.log('fizz');
		} else if (i % 5 === 0) {
			console.log('buzz');
		} else {
			console.log(i);
		}
	}
}

beforeEach(() => {
	jest.spyOn(console, 'log');
});

afterEach(() => {
	console.log.mockRestore();
});

test('fizzBuzz function is defined', () => {
	expect(fizzBuzz).toBeDefined();
});

test('Calling fizzbuzz with `5` prints out 5 statements', () => {
	fizzBuzz(5);

	expect(console.log.mock.calls.length).toEqual(5);
});

test('Calling fizzbuzz with 15 prints out the correct values', () => {
	fizzBuzz(15);
	expect(console.log.mock.calls[0][0]).toEqual(1);
	expect(console.log.mock.calls[1][0]).toEqual(2);
	expect(console.log.mock.calls[2][0]).toEqual('fizz');
	expect(console.log.mock.calls[3][0]).toEqual(4);
	expect(console.log.mock.calls[4][0]).toEqual('buzz');
	expect(console.log.mock.calls[5][0]).toEqual('fizz');
	expect(console.log.mock.calls[6][0]).toEqual(7);
	expect(console.log.mock.calls[7][0]).toEqual(8);
	expect(console.log.mock.calls[8][0]).toEqual('fizz');
	expect(console.log.mock.calls[9][0]).toEqual('buzz');
	expect(console.log.mock.calls[10][0]).toEqual(11);
	expect(console.log.mock.calls[11][0]).toEqual('fizz');
	expect(console.log.mock.calls[12][0]).toEqual(13);
	expect(console.log.mock.calls[13][0]).toEqual(14);
	expect(console.log.mock.calls[14][0]).toEqual('fizzbuzz');
});
