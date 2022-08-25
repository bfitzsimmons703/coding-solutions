// Merge Two Sorted Lists
// Linked Lists

import { Node } from '../lib/LinkedList';

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

export function mergeTwoLists(node1: Node<number> | null, node2: Node<number> | null): Node<number> | null {
	if (!node1 && !node2) return null;

	let nullNode: Node<number> | null = new Node(0);
	let prev = nullNode;

	let curr1 = node1;
	let curr2 = node2;

	while (curr1 && curr2) {
		if (curr1.data < curr2.data) {
			prev.next = curr1;
			curr1 = curr1.next;
		} else {
			prev.next = curr2;
			curr2 = curr2.next;
		}

		prev = prev.next;
	}

	prev.next = curr1 || curr2;
	return nullNode.next;
}

test('Merge Two Sorted Lists', () => {
	const node1 = new Node<number>(1);
	node1.next = new Node<number>(2);
	node1.next.next = new Node<number>(3);
	node1.next.next.next = new Node<number>(4);

	const node2 = new Node<number>(1);
	node2.next = new Node<number>(3);
	node2.next.next = new Node<number>(5);

	const newHead = mergeTwoLists(node1, node2);
	expect(newHead?.data).toBe(1);
	expect(newHead?.next?.data).toBe(1);
	expect(newHead?.next?.next?.data).toBe(2);
	expect(newHead?.next?.next?.next?.data).toBe(3);
	expect(newHead?.next?.next?.next?.next?.data).toBe(3);
	expect(newHead?.next?.next?.next?.next?.next?.data).toBe(4);
	expect(newHead?.next?.next?.next?.next?.next?.next?.data).toBe(5);
});
