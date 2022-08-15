// Selection Sort
// Sorting

export function selectionSort(arr: number[]): number[] {
	for (let i = 0; i < arr.length; i++) {
		let indexOfMin = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexOfMin]) {
				indexOfMin = j;
			}
		}

		if (indexOfMin !== i) {
			let tmp = arr[i];
			arr[i] = arr[indexOfMin];
			arr[indexOfMin] = tmp;
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
	expect(selectionSort(getArray())).toEqual(getSortedArray());
});
