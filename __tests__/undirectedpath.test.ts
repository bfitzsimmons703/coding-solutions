// Undirected Path
// Graphs

// Given an undirected edges list and two nodes, return a boolean indicating whether you can traverse from src node to dst node

const buildGraph = (edges: string[][]): Record<string, string[]> => {
	let graph: Record<string, string[]> = {};
	for (const edge of edges) {
		let [node1, node2] = edge;
		graph[node1] = graph[node1] || [];
		graph[node1].push(node2);

		graph[node2] = graph[node2] || [];
		graph[node2].push(node1);
	}

	return graph;
};

export function undirectedPath(src: string, dst: string, edges: string[][]): boolean {
	const graph = buildGraph(edges);
	const visited = new Set<string>();

	// DFS
	let stack = [src];
	while (stack.length) {
		let currentNode = stack.shift()!;
		if (currentNode === dst) return true;

		if (visited.has(currentNode)) continue;

		visited.add(currentNode);
		if (graph[currentNode].length) {
			stack.unshift(...graph[currentNode]);
		}
	}

	return false;
}

test('Undirected Path', () => {
	const edges = [
		['i', 'j'],
		['k', 'i'],
		['m', 'k'],
		['k', 'l'],
		['o', 'n'],
	];

	expect(undirectedPath('j', 'm', edges)).toBeTruthy();
});
