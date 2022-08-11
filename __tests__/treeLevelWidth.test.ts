import { TreeNode } from '../lib/TreeNode';

export function treeLevelWidth(root: TreeNode<number>): number[] {
	const widths: number[] = [];

	const levels = [[root]];
	while (levels.length) {
		let level = levels.shift();
		if (level?.length) {
			widths.push(level.length);

			const nextLevel = [];
			for (const node of level) {
				nextLevel.push(...node.children);
			}

			levels.push(level);
		}
	}
	return widths;
}

test('treeLevelWidth is a function', () => {
	expect(typeof treeLevelWidth).toEqual('function');
});

test('treeLevelWidth returns number of nodes at widest point', () => {
	const root = new TreeNode<number>(0);
	root.add(1);
	root.add(2);
	root.add(3);
	root.children[0].add(4);
	root.children[2].add(5);

	expect(treeLevelWidth(root)).toEqual([1, 3, 2]);
});

test('treeLevelWidth returns number of nodes at widest point', () => {
	const root = new TreeNode<number>(0);
	root.add(1);
	root.children[0].add(2);
	root.children[0].add(3);
	root.children[0].children[0].add(4);

	expect(treeLevelWidth(root)).toEqual([1, 1, 2, 1]);
});
