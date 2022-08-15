// Bubble Sort
// Sorting

export function bubbleSort(arr: number[]): number[] {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				let tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}

	return arr;
}

function getArray() {
	return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
	return [-124, -40, 0, 7, 21, 100, 500];
}

test('sorts an array', () => {
	expect(bubbleSort(getArray())).toEqual(getSortedArray());
});
