// Validate BST

import { BSTNode } from '../lib/BinarySearchTree';

// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than the parent

export function validate(
	node: BSTNode<number> | null,
	min: number | null = null,
	max: number | null = null
): boolean {
	if (!node) {
		// We've reached the bottom of this recursive call, meaning every node before it was valid
		return true;
	}

	if (min !== null && node.data <= min) {
		return false;
	}

	if (max !== null && node.data >= max) {
		return false;
	}

	return (
		validate(node.left, min, node.data) &&
		validate(node.right, node.data, max)
	);
}

test('Validate recognizes a valid BST', () => {
	const n = new BSTNode(10);
	n.insert(5);
	n.insert(15);
	n.insert(0);
	n.insert(20);

	expect(validate(n)).toEqual(true);
});

test('Validate recognizes an invalid BST', () => {
	const n = new BSTNode(10);
	n.insert(5);
	n.insert(15);
	n.insert(0);
	n.insert(20);
	n.left!.left!.right = new BSTNode(999);

	expect(validate(n)).toEqual(false);

	const n2 = new BSTNode(10);
	n2.insert(5);
	n2.right = new BSTNode(10);

	expect(validate(n2)).toEqual(false);
});
