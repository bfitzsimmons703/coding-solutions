// Maximum Depth of Binary Tree
// Trees

import { BSTNode } from '../lib/BinarySearchTree';

// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

export function maxDepth(root: BSTNode<string> | null): number {
	if (!root) return 0;

	let maxDepth = 0;
	const levels = [[root]];
	while (levels.length) {
		const level = levels.shift();
		if (level?.length) {
			maxDepth++;
			const nextLevel = [];
			for (const node of level) {
				if (node?.left) nextLevel.push(node.left);
				if (node?.right) nextLevel.push(node.right);
			}

			if (nextLevel.length) {
				levels.push(nextLevel);
			}
		}
	}
	return maxDepth;
}

test('Get BST Height', () => {
	const nodes = '3,9,20,15,7'.split(',');
	const root = new BSTNode(nodes[0]);
	for (let i = 1; i < nodes.length; i++) {
		// starting at index 1 because 0 is the root node
		root.insert(nodes[i]);
	}

	expect(maxDepth(root)).toBe(3);
});

test('Get BST Height', () => {
	const nodes = '1,2'.split(',');
	const root = new BSTNode(nodes[0]);
	for (let i = 1; i < nodes.length; i++) {
		// starting at index 1 because 0 is the root node
		root.insert(nodes[i]);
	}

	expect(maxDepth(root)).toBe(2);
});
