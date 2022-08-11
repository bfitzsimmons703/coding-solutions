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
