import { TreeNode } from './TreeNode';

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
