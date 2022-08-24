// Connected Nodes Count
// Graphs

// Given an adjacency list of an undirected graph, return the number of connected nodes within the graph.

// O(# of edges)

type Graph = Record<number, number[]>;

export function connectedNodesCount(graph: Graph): number {
	let count = 0;
	const visited = new Set<number>();

	const bfs = (srcNode: number) => {
		let queue = [srcNode];
		while (queue.length) {
			let currentNode = queue.shift()!;
			if (visited.has(currentNode)) continue;

			visited.add(currentNode);

			if (graph[currentNode].length) {
				queue.push(...graph[currentNode]);
			}
		}
	};

	for (const key of Object.keys(graph)) {
		const node = parseInt(key);
		if (visited.has(node)) continue;

		count++;

		bfs(node);
	}

	return count;
}

test('Connected Nodes Count', () => {
	const graph1 = {
		0: [8, 1, 5],
		1: [0],
		5: [0, 8],
		8: [0, 5],
		2: [3, 4],
		3: [2, 4],
		4: [3, 2],
	};
	expect(connectedNodesCount(graph1)).toEqual(2);

	const graph2 = {
		1: [2],
		2: [1, 8],
		6: [7],
		9: [8],
		7: [6, 8],
		8: [9, 7, 2],
	};
	expect(connectedNodesCount(graph2)).toEqual(1);

	const graph3 = {
		3: [],
		4: [6],
		6: [4, 5, 7, 8],
		8: [6],
		7: [6],
		5: [6],
		1: [2],
		2: [1],
	};

	expect(connectedNodesCount(graph3)).toEqual(3);

	const graph4 = {
		0: [4, 7],
		1: [],
		2: [],
		3: [6],
		4: [0],
		6: [3],
		7: [0],
		8: [],
	};
	expect(connectedNodesCount(graph4)).toEqual(5);

	expect(connectedNodesCount({})).toEqual(0);
});
