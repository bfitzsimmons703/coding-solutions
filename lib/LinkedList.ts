import { Node } from './Node';

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
