// Merge Sort
// Sorting

// Takes two pre-sorted arrays and merges them in sorted order in a new array
function merge(left: number[], right: number[]): number[] {
	const results: number[] = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			results.push(left.shift()!);
		} else {
			results.push(right.shift()!);
		}
	}

	// Push any remaining sorted numbers
	results.push(...left);
	results.push(...right);

	return results;
}

export function mergeSort(arr: number[]): number[] {
	if (arr.length <= 1) {
		return arr;
	}

	const center = Math.floor(arr.length / 2);
	const left = arr.slice(0, center);
	const right = arr.slice(center);

	return merge(mergeSort(left), mergeSort(right));
}

function getArray() {
	return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
	return [-124, -40, 0, 7, 21, 100, 500];
}

test('sorts an array', () => {
	expect(mergeSort(getArray())).toEqual(getSortedArray());
});
