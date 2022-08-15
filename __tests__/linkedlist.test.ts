// Linked List Implementation
// Linked List

export class Node<T> {
	data: T;
	next: Node<T> | null;

	constructor(data: T, next: Node<T> | null = null) {
		this.data = data;
		this.next = next;
	}
}

export class LinkedList<T> {
	head: Node<T> | null = null;

	insertFirst(data: T): void {
		this.head = new Node(data, this.head);
	}

	size(): number {
		let size = 0;
		let currNode = this.head;
		while (currNode) {
			size++;
			currNode = currNode.next;
		}
		return size;
	}

	getFirst(): Node<T> | null {
		return this.head;
	}

	getLast(): Node<T> | null {
		if (!this.head) return null;

		let node = this.head;
		while (node.next) {
			node = node.next;
		}

		return node;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		this.head = this.head?.next || null;
	}

	removeLast() {
		if (!this.head) return;
		if (!this.head.next) {
			this.head = null;
			return;
		}

		let node = this.head;
		while (node.next?.next) {
			node = node.next;
		}
		node.next = null;
	}

	insertLast(data: T): void {
		let last = this.getLast();
		if (!last) {
			this.insertFirst(data);
		} else {
			last.next = new Node(data);
		}
	}
}

test('LinkedList is a class', () => {
	expect(typeof LinkedList.prototype.constructor).toEqual('function');
});

test('Node is a class', () => {
	expect(typeof Node.prototype.constructor).toEqual('function');
});

describe('A Node', () => {
	test('has properties "data" and "next"', () => {
		const node = new Node('a', new Node('b'));
		expect(node.data).toEqual('a');
		expect(node.next?.data).toEqual('b');
	});
});

describe('Insert First', () => {
	test('appends a node to the start of the list', () => {
		const l = new LinkedList();
		l.insertFirst(1);
		expect(l.head?.data).toEqual(1);
		l.insertFirst(2);
		expect(l.head?.data).toEqual(2);
	});
});

describe('Size', () => {
	test('returns the number of items in the linked list', () => {
		const l = new LinkedList();
		expect(l.size()).toEqual(0);
		l.insertFirst(1);
		l.insertFirst(1);
		l.insertFirst(1);
		l.insertFirst(1);
		expect(l.size()).toEqual(4);
	});
});

describe('GetFirst', () => {
	test('returns the first element', () => {
		const l = new LinkedList();
		l.insertFirst(1);
		expect(l.getFirst()?.data).toEqual(1);
		l.insertFirst(2);
		expect(l.getFirst()?.data).toEqual(2);
	});
});

describe('GetLast', () => {
	test('returns the last element', () => {
		const l = new LinkedList();
		l.insertFirst(2);
		expect(l.getLast()).toEqual({ data: 2, next: null });
		l.insertFirst(1);
		expect(l.getLast()).toEqual({ data: 2, next: null });
	});
});

describe('Clear', () => {
	test('empties out the list', () => {
		const l = new LinkedList();
		expect(l.size()).toEqual(0);
		l.insertFirst(1);
		l.insertFirst(1);
		l.insertFirst(1);
		l.insertFirst(1);
		expect(l.size()).toEqual(4);
		l.clear();
		expect(l.size()).toEqual(0);
	});
});

describe('RemoveFirst', () => {
	test('removes the first node when the list has a size of one', () => {
		const l = new LinkedList();
		l.insertFirst('a');
		l.removeFirst();
		expect(l.size()).toEqual(0);
		expect(l.getFirst()).toEqual(null);
	});

	test('removes the first node when the list has a size of three', () => {
		const l = new LinkedList();
		l.insertFirst('c');
		l.insertFirst('b');
		l.insertFirst('a');
		l.removeFirst();
		expect(l.size()).toEqual(2);
		expect(l.getFirst()?.data).toEqual('b');
		l.removeFirst();
		expect(l.size()).toEqual(1);
		expect(l.getFirst()?.data).toEqual('c');
	});
});

describe('RemoveLast', () => {
	test('RemoveLast removes the last node when list is empty', () => {
		const l = new LinkedList();
		expect(() => {
			l.removeLast();
		}).not.toThrow();
	});

	test('RemoveLast removes the last node when list is length 1', () => {
		const l = new LinkedList();
		l.insertFirst('a');
		l.removeLast();
		expect(l.head).toEqual(null);
	});

	test('RemoveLast removes the last node when list is length 2', () => {
		const l = new LinkedList();
		l.insertFirst('b');
		l.insertFirst('a');

		l.removeLast();

		expect(l.size()).toEqual(1);
		expect(l.head?.data).toEqual('a');
	});

	test('RemoveLast removes the last node when list is length 3', () => {
		const l = new LinkedList();
		l.insertFirst('c');
		l.insertFirst('b');
		l.insertFirst('a');
		l.removeLast();

		expect(l.size()).toEqual(2);
		expect(l.getLast()?.data).toEqual('b');
	});
});
