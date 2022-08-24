// Symmetrical Tree
// Trees

import { BSTNode } from '../lib/BinarySearchTree';

// Given two roots of binary trees, check if they are mirror images of each other.

export function symmetric(root1: BSTNode<number> | null, root2: BSTNode<number> | null): boolean {
	if (!root1 && !root2) return true;

	if (root1?.data !== root2?.data) return false;

	return symmetric(root1?.left || null, root2?.right || null) && symmetric(root1?.right || null, root2?.left || null);
}

test('Trees are symmetrical', () => {
	const root1 = new BSTNode(1);
	const root2 = new BSTNode(1);

	root1.left = new BSTNode(2);
	root1.right = new BSTNode(3);

	root2.left = new BSTNode(3);
	root2.right = new BSTNode(2);

	expect(symmetric(root1, root2)).toBeTruthy();

	const root3 = null;
	const root4 = null;
	expect(symmetric(root3, root4)).toBeTruthy();
});

test('Trees are not symmetrical', () => {
	const root1 = new BSTNode(1);
	const root2 = new BSTNode(1);

	root1.left = new BSTNode(2);
	root1.right = new BSTNode(3);

	root2.left = new BSTNode(2);
	root2.right = new BSTNode(3);

	expect(symmetric(root1, root2)).toBeFalsy();

	const root5 = null;
	const root6 = new BSTNode(1);
	expect(symmetric(root5, root6)).toBeFalsy();
});
