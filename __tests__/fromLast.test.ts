// Nth From Last
// Linked List

// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.

import { LinkedList, Node } from '../lib/LinkedList';

export function fromLast(l: LinkedList<string>, n: number): Node<string> {
	let slow = l.getFirst()!;
	let fast = l.getFirst()!;

	for (let i = 0; i < n; i++) {
		fast = fast.next!;
	}

	while (fast?.next) {
		slow = slow.next!;
		fast = fast.next;
	}

	return slow;
}

test('fromLast is a function', () => {
	expect(typeof fromLast).toEqual('function');
});

test('fromLast returns the node n elements from the end', () => {
	const l = new LinkedList<string>();

	l.insertLast('a');
	l.insertLast('b');
	l.insertLast('c');
	l.insertLast('d');
	l.insertLast('e');

	expect(fromLast(l, 3).data).toEqual('b');
});
