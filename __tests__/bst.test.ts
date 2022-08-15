// Binary Search Tree
// Trees

// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

export class BSTNode<T> {
	data: T;
	left: BSTNode<T> | null = null;
	right: BSTNode<T> | null = null;

	constructor(data: T) {
		this.data = data;
	}

	insert(data: T): void {
		const newNode = new BSTNode(data);

		if (data > this.data) {
			// go right
			if (!this.right) {
				this.right = newNode;
			} else {
				this.right.insert(data);
			}

			return;
		}

		if (data < this.data) {
			// go left
			if (!this.left) {
				this.left = newNode;
			} else {
				this.left.insert(data);
			}

			return;
		}
	}

	contains(data: T): BSTNode<T> | null {
		if (this.data === data) {
			return this;
		}

		if (data > this.data) {
			// go right
			if (!this.right) {
				return null;
			}

			return this.right.contains(data);
		}

		if (data < this.data) {
			// go left
			if (!this.left) {
				return null;
			}

			return this.left.contains(data);
		}

		return null;
	}
}

test('BSTNode is a constructor', () => {
	expect(typeof Node.prototype.constructor).toEqual('function');
});

test('BSTNode can insert correctly', () => {
	const node = new BSTNode<number>(10);
	node.insert(5);
	node.insert(15);
	node.insert(17);

	expect(node.left?.data).toEqual(5);
	expect(node.right?.data).toEqual(15);
	expect(node.right?.right?.data).toEqual(17);
});

test('Contains returns bst node with the same data', () => {
	const node = new BSTNode<number>(10);
	node.insert(5);
	node.insert(15);
	node.insert(20);
	node.insert(0);
	node.insert(-5);
	node.insert(3);

	const three = node.left?.left?.right;
	expect(node.contains(3)).toEqual(three);
});

test('Contains returns null if value not found', () => {
	const node = new BSTNode<number>(10);
	node.insert(5);
	node.insert(15);
	node.insert(20);
	node.insert(0);
	node.insert(-5);
	node.insert(3);

	expect(node.contains(9999)).toEqual(null);
});
