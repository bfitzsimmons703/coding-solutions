// Array Chunks

// Given an array and chunk size, divide the array into many subarrays where each subarray is of length size.

export function chunk(array: number[], size: number): number[][] {
	let chunks: number[][] = [];

	for (let i = 0; i < array.length; i += size) {
		chunks.push(array.slice(i, i + size));
	}

	return chunks;
}

test('function chunk exists', () => {
	expect(typeof chunk).toEqual('function');
});

test('chunk divides an array of 10 elements with chunk size 2', () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const chunked = chunk(arr, 2);

	expect(chunked).toEqual([
		[1, 2],
		[3, 4],
		[5, 6],
		[7, 8],
		[9, 10],
	]);
});

test('chunk divides an array of 3 elements with chunk size 1', () => {
	const arr = [1, 2, 3];
	const chunked = chunk(arr, 1);

	expect(chunked).toEqual([[1], [2], [3]]);
});

test('chunk divides an array of 5 elements with chunk size 3', () => {
	const arr = [1, 2, 3, 4, 5];
	const chunked = chunk(arr, 3);

	expect(chunked).toEqual([
		[1, 2, 3],
		[4, 5],
	]);
});

test('chunk divides an array of 13 elements with chunk size 5', () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
	const chunked = chunk(arr, 5);

	expect(chunked).toEqual([
		[1, 2, 3, 4, 5],
		[6, 7, 8, 9, 10],
		[11, 12, 13],
	]);
});
