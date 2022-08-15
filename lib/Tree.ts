export class TreeNode<T> {
	data: T;
	children: TreeNode<T>[] = [];

	constructor(data: T) {
		this.data = data;
	}

	add(data: T): void {
		this.children.push(new TreeNode(data));
	}

	remove(data: T): void {
		this.children = this.children.filter((node) => node.data !== data);
	}
}

export class Tree<T> {
	root: TreeNode<T> | null = null;

	traverseBreadth(fn: (node: TreeNode<T>) => void): void {
		let queue: (TreeNode<T> | null)[] = [this.root];
		while (queue.length) {
			let currentNode = queue.shift();
			if (currentNode) {
				fn(currentNode);
				queue.push(...currentNode.children);
			}
		}
	}

	traverseDepth(fn: (node: TreeNode<T>) => void): void {
		let queue: (TreeNode<T> | null)[] = [this.root];
		while (queue.length) {
			let currentNode = queue.shift();
			if (currentNode) {
				fn(currentNode);
				queue.unshift(...currentNode.children);
			}
		}
	}
}
