// Has Path
// Graphs

// Given an acylic, unidirectional graph, return a boolean indicating whether you can traverse from src node to dst node

type Graph = Record<string, string[]>;

export function hasPath(src: string, dst: string, graph: Graph): boolean {
	// DFS
	let stack: string[] = [src];
	while (stack.length) {
		let currentNode = stack.shift()!;
		if (currentNode === dst) return true;
		if (graph[currentNode].length) {
			stack.unshift(...graph[currentNode]);
		}
	}

	return false;
}

test('Has Path', () => {
	const graph: Graph = {
		f: ['g', 'i'],
		g: ['h'],
		h: [],
		i: ['g', 'k'],
		j: ['i'],
		k: [],
	};

	expect(hasPath('f', 'k', graph)).toBeTruthy();
	expect(hasPath('g', 'i', graph)).toBeFalsy();
	expect(hasPath('j', 'f', graph)).toBeFalsy();
});
