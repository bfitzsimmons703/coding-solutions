// Invert Binary Tree
// Trees

// Given the root of a binary tree, invert the tree, and return its root.

// https://leetcode.com/problems/invert-binary-tree/

import { BSTNode } from '../lib/BinarySearchTree';

export function invertTree(
	root: BSTNode<number> | null
): BSTNode<number> | null {
	if (!root) return null;

	let tmp = root.left;
	root.left = root.right;
	root.right = tmp;

	invertTree(root.left);
	invertTree(root.right);

	return root;
}

test('Invert BST', () => {
	const nodes = [4, 2, 7, 1, 3, 6, 9];
	const root = new BSTNode(nodes[0]);
	for (let i = 1; i < nodes.length; i++) {
		root.insert(nodes[i]);
	}

	const newRoot = invertTree(root);
	expect(newRoot?.data).toBe(4);
	expect(newRoot?.left?.data).toBe(7);
	expect(newRoot?.left?.left?.data).toBe(9);
	expect(newRoot?.left?.right?.data).toBe(6);

	expect(newRoot?.right?.data).toBe(2);
	expect(newRoot?.right?.left?.data).toBe(3);
	expect(newRoot?.right?.right?.data).toBe(1);
});
