// Tree Sum
// Trees

import { BSTNode } from '../lib/BinarySearchTree';

// Write a function, treeSum, that takes in the root of a binary tree that contains number values.
// The function should return the total sum of all values in the tree.

export function treeSum(root: BSTNode<number> | null): number {
	if (!root) return 0;

	let sum = root.data;
	sum += treeSum(root.left);
	sum += treeSum(root.right);
	return sum;
}

test('Tree Sum 1', () => {
	const a = new BSTNode(3);
	const b = new BSTNode(11);
	const c = new BSTNode(4);
	const d = new BSTNode(4);
	const e = new BSTNode(-2);
	const f = new BSTNode(1);

	a.left = b;
	a.right = c;
	b.left = d;
	b.right = e;
	c.right = f;

	//       3
	//    /    \
	//   11     4
	//  / \      \
	// 4   -2     1

	expect(treeSum(a)).toEqual(21);
});

test('Tree Sum 2', () => {
	const a = new BSTNode(1);
	const b = new BSTNode(6);
	const c = new BSTNode(0);
	const d = new BSTNode(3);
	const e = new BSTNode(-6);
	const f = new BSTNode(2);
	const g = new BSTNode(2);
	const h = new BSTNode(2);

	a.left = b;
	a.right = c;
	b.left = d;
	b.right = e;
	c.right = f;
	e.left = g;
	f.right = h;

	//      1
	//    /   \
	//   6     0
	//  / \     \
	// 3   -6    2
	//    /       \
	//   2         2

	expect(treeSum(a)).toEqual(10);
});

test('Tree Sum 3', () => {
	expect(treeSum(null)).toEqual(0);
});
