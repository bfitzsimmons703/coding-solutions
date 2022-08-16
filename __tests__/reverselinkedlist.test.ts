// Reverse Linked List
// Linked Lists

// Given the head of a singly linked list, reverse the list, and return the reversed list

import { LinkedList, Node } from '../lib/LinkedList';

export function reverseList(head: Node<number> | null): Node<number> | null {
	if (!head) return null;

	let currentNode: Node<number> | null = head;
	let prevNode: Node<number> | null = null;

	while (currentNode) {
		const nextNode: Node<number> | null = currentNode.next;
		currentNode.next = prevNode;

		if (!nextNode) {
			// We've reached the last node in the original list
			break;
		} else {
			prevNode = currentNode;
			currentNode = nextNode;
		}
	}

	return currentNode;
}

test('Reverse Linked List', () => {
	const node = new Node<number>(1);
	node.next = new Node<number>(2);
	node.next.next = new Node<number>(3);
	node.next.next.next = new Node<number>(4);

	const newHead = reverseList(node);
	expect(newHead?.data).toBe(4);
	expect(newHead?.next?.data).toBe(3);
	expect(newHead?.next?.next?.data).toBe(2);
	expect(newHead?.next?.next?.next?.data).toBe(1);

	const newHead2 = reverseList(null);
	expect(newHead2).toBe(null);
});
