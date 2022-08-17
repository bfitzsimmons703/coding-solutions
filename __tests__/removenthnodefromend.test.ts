// Remove Nth Node From End of List
// Linked Lists

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// O(n)

import { Node } from '../lib/LinkedList';

export function removeNthFromEnd(
	head: Node<number> | null,
	n: number
): Node<number> | null {
	if (!head) return null;

	let slow: Node<number> | null = head;
	let fast: Node<number> | null = head;

	for (let i = 0; i < n; i++) {
		fast = fast?.next || null;
	}

	if (!fast) {
		return head.next;
	}

	while (fast?.next) {
		slow = slow.next!;
		fast = fast.next || null;
	}

	slow.next = slow.next?.next || null;

	return head;
}

test('Remove Nth Node From End of List 1', () => {
	const nodes = [1, 2, 3, 4, 5];
	const head = new Node(nodes[0]);
	let currNode = head;
	for (let i = 1; i < nodes.length; i++) {
		currNode.next = new Node(nodes[i]);
		currNode = currNode.next;
	}

	const newHead = removeNthFromEnd(head, 2);
	expect(newHead?.data).toBe(1);
	expect(newHead?.next?.data).toBe(2);
	expect(newHead?.next?.next?.data).toBe(3);
	expect(newHead?.next?.next?.next?.data).toBe(5);
	expect(newHead?.next?.next?.next?.next).toBeFalsy();
});

test('Remove Nth Node From End of List 2', () => {
	const nodes = [1];
	const head = new Node(nodes[0]);
	let currNode = head;
	for (let i = 1; i < nodes.length; i++) {
		currNode.next = new Node(nodes[i]);
		currNode = currNode.next;
	}

	const newHead = removeNthFromEnd(head, 1);
	expect(newHead?.data).toBeFalsy();
});

test('Remove Nth Node From End of List 3', () => {
	const nodes = [1, 2];
	const head = new Node(nodes[0]);
	let currNode = head;
	for (let i = 1; i < nodes.length; i++) {
		currNode.next = new Node(nodes[i]);
		currNode = currNode.next;
	}

	const newHead = removeNthFromEnd(head, 1);
	expect(newHead?.data).toBe(1);
	expect(newHead?.next).toBeFalsy();
});

test('Remove Nth Node From End of List 4', () => {
	const nodes = [1, 2];
	const head = new Node(nodes[0]);
	let currNode = head;
	for (let i = 1; i < nodes.length; i++) {
		currNode.next = new Node(nodes[i]);
		currNode = currNode.next;
	}

	const newHead = removeNthFromEnd(head, 2);
	expect(newHead?.data).toBe(2);
	expect(newHead?.next).toBeFalsy();
});
