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
