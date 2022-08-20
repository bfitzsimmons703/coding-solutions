// Same Tree
// Trees

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

import { BSTNode } from '../lib/BinarySearchTree';

export function isSameTree(
	p: BSTNode<number> | null,
	q: BSTNode<number> | null
): boolean {
	if (p?.data !== q?.data) {
		return false;
	}

	if (p === null && q === null) {
		return true;
	}

	return (
		isSameTree(p?.left || null, q?.left || null) &&
		isSameTree(p?.right || null, q?.right || null)
	);
}

test('Is Same Tree 1', () => {
	const nodes = '1, 2, 3'.split(',').map((n) => parseInt(n));
	const root1 = new BSTNode(nodes[0]);
	const root2 = new BSTNode(nodes[0]);
	for (let i = 1; i < nodes.length; i++) {
		// starting at index 1 because 0 is the root node
		root1.insert(nodes[i]);
		root2.insert(nodes[i]);
	}

	expect(isSameTree(root1, root2)).toBeTruthy();
});

test('Is Same Tree 2', () => {
	const root1 = new BSTNode(1);
	root1.left = new BSTNode(2);
	root1.right = new BSTNode(1);

	const root2 = new BSTNode(1);
	root2.left = new BSTNode(1);
	root2.right = new BSTNode(2);

	expect(isSameTree(root1, root2)).toBeFalsy();
});

test('Is Same Tree 3', () => {
	const root1 = new BSTNode(1);
	root1.left = new BSTNode(2);

	const root2 = new BSTNode(1);
	root2.right = new BSTNode(2);

	expect(isSameTree(root1, root2)).toBeFalsy();
});

test('Is Same Tree 1', () => {
	const nodes = '1, 2, 3, 4, 5, 6, 7, 8'.split(',').map((n) => parseInt(n));
	const root1 = new BSTNode(nodes[0]);
	const root2 = new BSTNode(nodes[0]);
	for (let i = 1; i < nodes.length; i++) {
		// starting at index 1 because 0 is the root node
		root1.insert(nodes[i]);
		root2.insert(nodes[i]);
	}

	expect(isSameTree(root1, root2)).toBeTruthy();
});
