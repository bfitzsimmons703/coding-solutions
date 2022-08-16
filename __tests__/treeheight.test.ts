// Binary Search Tree Height
// Trees

import { BSTNode } from '../lib/BinarySearchTree';

// Given a root node, return the height of a tree
export function getHeight(root: BSTNode<string>): number {
	let leftHeight = 0;
	let rightHeight = 0;

	if (root.left) {
		leftHeight = 1 + getHeight(root.left);
	}

	if (root.right) {
		rightHeight = 1 + getHeight(root.right);
	}

	return Math.max(leftHeight, rightHeight);
}

test('Get BST Height', () => {
	const nodes = '3 5 2 1 4 6 7'.split(' ');
	const root = new BSTNode(nodes[0]);
	for (let i = 1; i < nodes.length; i++) {
		// starting at index 1 because 0 is the root node
		root.insert(nodes[i]);
	}

	expect(getHeight(root)).toBe(3);
});

test('Get BST Height', () => {
	const nodes = '1 3 2 5 4 6 7 9 8 11 13 12 10 15 14'.split(' ');
	const root = new BSTNode(nodes[0]);
	for (let i = 1; i < nodes.length; i++) {
		// starting at index 1 because 0 is the root node
		root.insert(nodes[i]);
	}

	console.log(root);

	expect(getHeight(root)).toBe(6);
});
