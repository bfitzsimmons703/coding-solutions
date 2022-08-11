import { SolutionCode, SolutionDescription } from '../components';

export default function TreeLevelWidth() {
	const code = `function treeLevelWidth(root: TreeNode<number>): number[] {
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
}`;

	const description = `Given the root node of a tree, return an array where each element is the width of the tree at each level.`;

	const tests = [
		`const root = new Node(0);
		root.add(1);
		root.add(2);
		root.add(3);
		root.children[0].add(4);
		root.children[2].add(5);
	  
		levelWidth(root) -> [1, 3, 2]`,
	];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
