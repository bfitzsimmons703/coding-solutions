// Subtree of Another Tree
// Trees

import { BSTNode } from '../lib/BinarySearchTree';

// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot
// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants.
// The tree tree could also be considered as a subtree of itself.

function isSameTree(root1: BSTNode<number> | null, root2: BSTNode<number> | null): boolean {
	if (!root1 && !root2) return true;
	if (root1?.data !== root2?.data) return false;
	return isSameTree(root1?.left || null, root2?.left || null) && isSameTree(root1?.right || null, root2?.right || null);
}

export function isSubtree(root: BSTNode<number> | null, subRoot: BSTNode<number> | null): boolean {
	if (!root && !subRoot) return true;

	// BFS
	const queue = [root];
	while (queue.length) {
		const node = queue.shift()!;
		if (isSameTree(node, subRoot)) {
			return true;
		}

		if (node.left) queue.push(node.left);
		if (node.right) queue.push(node.right);
	}

	return false;
}

describe('Subtree of Another', () => {
	test('isSameTree', () => {
		const root1 = new BSTNode(3);
		const left1 = new BSTNode(4);
		const right1 = new BSTNode(5);

		root1.left = left1;
		root1.right = right1;

		const root2 = new BSTNode(3);
		const left2 = new BSTNode(4);
		const right2 = new BSTNode(5);

		root2.left = left2;
		root2.right = right2;

		expect(isSameTree(root1, root2)).toBeTruthy();

		root2.left.left = new BSTNode(8);
		expect(isSameTree(root1, root2)).toBeFalsy();
	});

	test('Is Subtree', () => {
		const root = new BSTNode(3);
		const four = new BSTNode(4);
		const five = new BSTNode(5);
		const one = new BSTNode(1);
		const two = new BSTNode(2);

		root.left = four;
		root.right = five;
		four.left = one;
		four.right = two;
		//      3
		//    /   \
		//   4     5
		//  / \
		// 1   2

		const subRoot = new BSTNode(4);
		subRoot.left = new BSTNode(1);
		subRoot.right = new BSTNode(2);
		expect(isSubtree(root, subRoot)).toBeTruthy();

		subRoot.left = null;
		expect(isSubtree(root, subRoot)).toBeFalsy();
	});
});
