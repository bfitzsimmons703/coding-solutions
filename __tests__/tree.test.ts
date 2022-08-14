// Tree Implementation

// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBreadth' and 'traverseDepth'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class TreeNode<T> {
	data: T;
	children: TreeNode<T>[] = [];

	constructor(data: T) {
		this.data = data;
	}

	add(data: T): void {
		this.children.push(new TreeNode<T>(data));
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

describe('TreeNode', () => {
	test('TreeNode is a constructor', () => {
		expect(typeof TreeNode.prototype.constructor).toEqual('function');
	});

	test('TreeNode has a data and children properties', () => {
		const n = new TreeNode<string>('a');
		expect(n.data).toEqual('a');
		expect(n.children.length).toEqual(0);
	});

	test('TreeNode can add children', () => {
		const n = new TreeNode<string>('a');
		n.add('b');
		expect(n.children.length).toEqual(1);
		expect(n.children[0].children).toEqual([]);
	});

	test('TreeNode can remove children', () => {
		const n = new TreeNode<string>('a');
		n.add('b');
		expect(n.children.length).toEqual(1);
		n.remove('b');
		expect(n.children.length).toEqual(0);
	});
});

describe('Tree', () => {
	test('starts empty', () => {
		const t = new Tree<string>();
		expect(t.root).toEqual(null);
	});

	test('Can traverse bf', () => {
		const letters: string[] = [];
		const t = new Tree<string>();
		t.root = new TreeNode<string>('a');
		t.root.add('b');
		t.root.add('c');
		t.root.children[0].add('d');

		t.traverseBreadth((node) => {
			letters.push(node.data);
		});

		expect(letters).toEqual(['a', 'b', 'c', 'd']);
	});

	test('Can traverse DF', () => {
		const letters: string[] = [];
		const t = new Tree<string>();
		t.root = new TreeNode<string>('a');
		t.root.add('b');
		t.root.add('d');
		t.root.children[0].add('c');

		t.traverseDepth((node) => {
			letters.push(node.data);
		});

		expect(letters).toEqual(['a', 'b', 'c', 'd']);
	});
});
