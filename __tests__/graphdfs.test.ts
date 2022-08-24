// Graph DFS and BFS
// Graphs

type Graph = Record<string, string[]>;
export function dfs(graph: Graph, startingNode: string): string[] {
	let result: string[] = [];

	let stack = [startingNode];
	while (stack.length) {
		let currentNode = stack.shift()!;
		result.push(currentNode);
		if (graph[currentNode].length) {
			stack.unshift(...graph[currentNode]);
		}
	}

	return result;
}

export function bfs(graph: Graph, startingNode: string): string[] {
	let result: string[] = [];

	let queue = [startingNode];
	while (queue.length) {
		let currentNode = queue.shift()!;
		result.push(currentNode);
		if (graph[currentNode].length) {
			queue.push(...graph[currentNode]);
		}
	}

	return result;
}

test('Graph DFS', () => {
	const graph: Graph = {
		a: ['c', 'b'],
		b: ['d'],
		c: ['e'],
		d: ['f'],
		e: [],
		f: [],
	};

	expect(dfs(graph, 'a')).toStrictEqual(['a', 'c', 'e', 'b', 'd', 'f']);
});

test('Graph BFS', () => {
	const graph: Graph = {
		a: ['c', 'b'],
		b: ['d'],
		c: ['e'],
		d: ['f'],
		e: [],
		f: [],
	};

	expect(bfs(graph, 'a')).toStrictEqual(['a', 'c', 'b', 'e', 'd', 'f']);
});
