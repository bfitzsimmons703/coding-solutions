// Binary Search Tree Left-Hand View
// Trees

import { BSTNode } from '../lib/BinarySearchTree';

export function bstLeftHandView(root: BSTNode<number>): number[] {
	const levels: BSTNode<number>[][] = [[root]];
	const view: number[] = [];

	while (levels.length) {
		let level = levels.shift();
		if (level?.length) {
			view.push(level[0].data); // first node = left side

			let nextLevel = [];

			for (const node of level) {
				if (node.left) {
					nextLevel.push(node.left);
				}

				if (node.right) {
					nextLevel.push(node.right);
				}
			}

			levels.push(nextLevel);
		}
	}

	return view;
}

test('treeLevelWidth returns number of nodes at widest point', () => {
	const root = new BSTNode<number>(10);
	root.left = new BSTNode(2);
	root.right = new BSTNode(3);
	root.left.left = new BSTNode(7);
	root.left.right = new BSTNode(8);
	root.right.right = new BSTNode(15);
	root.right.left = new BSTNode(12);
	root.right.right.left = new BSTNode(14);

	expect(bstLeftHandView(root)).toEqual([10, 2, 7, 14]);
});
