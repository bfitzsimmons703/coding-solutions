// Container With Most Water
// Arrays

// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.

// O(n)

function calcArea(x1: number, x2: number, heights: number[]): number {
	const x = x2 - x1;
	const y = Math.min(heights[x1], heights[x2]);
	return x * y;
}

export function biggestContainer(heights: number[]): number {
	let maxArea = 0;
	let left = 0;
	let right = heights.length - 1;

	while (left < right) {
		const area = calcArea(left, right, heights);
		if (area > maxArea) {
			maxArea = area;
		}

		if (heights[left] > heights[right]) {
			right--;
		} else {
			left++;
		}
	}

	return maxArea;
}

test('Container with Most Water', () => {
	expect(biggestContainer([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
	expect(biggestContainer([1, 1])).toBe(1);
});
