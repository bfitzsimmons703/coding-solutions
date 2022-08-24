export class GraphNode<T> {
	data: T;
	neighbors: GraphNode<T>[] = [];

	constructor(data: T) {
		this.data = data;
	}

	addNeighbor(node: GraphNode<T>) {
		this.neighbors.push(node);
	}
}

export class Graph {}
