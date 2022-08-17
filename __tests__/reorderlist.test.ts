// Reorder List
// Linked Lists

import { Node } from '../lib/LinkedList';

// You are given the head of a singly linked-list. The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

export function reorderList(head: Node<number> | null): Node<number> | null {
	if (!head) return null;

	// find midpoint
	let slow: Node<number> | null = head;
	let fast: Node<number> | null = head;

	while (fast?.next) {
		slow = slow!.next;
		fast = fast?.next?.next;
	}

	// Slow is now at the midpoint, reverse the list from there
	let prevNode: Node<number> | null = null;
	let currentNode: Node<number> | null = slow;
	while (currentNode) {
		const nextNode = currentNode.next;
		currentNode.next = prevNode;
		prevNode = currentNode;
		currentNode = nextNode;
	}

	// prevNode is now the head of the second list
	let odd: Node<number> | null = head;
	let even: Node<number> | null = prevNode;

	while (even?.next) {
		const nextOdd: Node<number> | null = odd?.next || null;
		if (odd) {
			odd.next = even;
		}
		odd = nextOdd;

		const nextEven: Node<number> | null = even?.next || null;
		if (even) {
			even.next = odd;
		}
		even = nextEven;
	}
}

test('Reorder List', () => {
	const node = new Node<number>(1);
	node.next = new Node<number>(2);
	node.next.next = new Node<number>(3);
	node.next.next.next = new Node<number>(4);

	reorderList(node);
	expect(node?.data).toBe(1);
	expect(node?.next?.data).toBe(4);
	expect(node?.next?.next?.data).toBe(2);
	expect(node?.next?.next?.next?.data).toBe(3);
});
