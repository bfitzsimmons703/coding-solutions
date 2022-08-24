// Shortest Path
// Graphs

// Givenan array of edges for an undirected graph and two nodes (nodeA, nodeB), return the length of the shortest path between A and B.
// Consider the length as the number of edges in the path, not the number of nodes.
// If there is no path between A and B, then return -1.

// O(e) # of edges

type Graph = Record<string, string[]>;
type Pair = [string, number]; //[node, distance]

function buildGraph(edges: string[][]): Graph {
	let graph: Graph = {};
	for (const edge of edges) {
		let [nodeA, nodeB] = edge;
		graph[nodeA] = graph[nodeA] || [];
		graph[nodeB] = graph[nodeB] || [];

		graph[nodeA].push(nodeB);
		graph[nodeB].push(nodeA);
	}
	return graph;
}

export function shortestPath(edges: string[][], nodeA: string, nodeB: string): number {
	const graph = buildGraph(edges);
	const visisted = new Set();
	let shortestDistance = -1;

	const bfs = (startPair: Pair) => {
		let queue = [startPair];
		while (queue.length) {
			const [currentNode, distance] = queue.shift()!;

			if (currentNode === nodeB) {
				if (distance < shortestDistance || shortestDistance === -1) {
					shortestDistance = distance;
				}

				break;
			}

			if (visisted.has(currentNode)) continue;
			visisted.add(currentNode);

			const neighbors: Pair[] = graph[currentNode].map((neighbor) => [neighbor, distance + 1]);
			queue.push(...neighbors);
		}
	};

	bfs([nodeA, 0]);

	return shortestDistance;
}

test('Shortest Path 1', () => {
	const edges = [
		['w', 'x'],
		['x', 'y'],
		['z', 'y'],
		['z', 'v'],
		['w', 'v'],
	];

	expect(shortestPath(edges, 'w', 'z')).toEqual(2);
});

test('Shortest Path 2', () => {
	const edges = [
		['w', 'x'],
		['x', 'y'],
		['z', 'y'],
		['z', 'v'],
		['w', 'v'],
	];

	expect(shortestPath(edges, 'y', 'x')).toEqual(1);
});

test('Shortest Path 3', () => {
	const edges = [
		['a', 'c'],
		['a', 'b'],
		['c', 'b'],
		['c', 'd'],
		['b', 'd'],
		['e', 'd'],
		['g', 'f'],
	];

	expect(shortestPath(edges, 'a', 'e')).toEqual(3);
});

test('Shortest Path 4', () => {
	const edges = [
		['a', 'c'],
		['a', 'b'],
		['c', 'b'],
		['c', 'd'],
		['b', 'd'],
		['e', 'd'],
		['g', 'f'],
	];

	expect(shortestPath(edges, 'e', 'c')).toEqual(2);
});

test('Shortest Path 5', () => {
	const edges = [
		['a', 'c'],
		['a', 'b'],
		['c', 'b'],
		['c', 'd'],
		['b', 'd'],
		['e', 'd'],
		['g', 'f'],
	];

	expect(shortestPath(edges, 'b', 'g')).toEqual(-1);
});
