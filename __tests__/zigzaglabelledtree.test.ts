// Path In Zigzag Labelled Binary Tree
// Trees

// In an infinite binary tree where every node has two children, the nodes are labelled in row order.
// In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right,
// while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.
// Given the label of a node in this tree, return the labels in the path from the root of the tree to the node with that label.

// O(log(n));

export function pathInZigZagTree(label: number): number[] {
	const startingLevel = Math.floor(Math.log2(label));
	const path: number[] = Array(startingLevel + 1).fill(0); //plus 1 to account for 0-indexed tree levels

	const recurseUpTree = (currentLabel: number, currentLevel: number) => {
		path[currentLevel] = currentLabel;

		if (currentLevel === 0) {
			return;
		}

		const levelStart = Math.floor(2 ** currentLevel);
		const levelEnd = Math.floor(2 ** (currentLevel + 1)) - 1;
		const parentLabel = Math.floor((levelStart + levelEnd - currentLabel) / 2);

		recurseUpTree(parentLabel, currentLevel - 1);
	};

	recurseUpTree(label, startingLevel);

	return path;
}

describe('Zig Zag Labelled Binary Tree', () => {
	test('Test 1', () => {
		const output = pathInZigZagTree(14);
		expect(output).toStrictEqual([1, 3, 4, 14]);
	});

	test('Test 2', () => {
		const output = pathInZigZagTree(26);
		expect(output).toStrictEqual([1, 2, 6, 10, 26]);
	});
});
