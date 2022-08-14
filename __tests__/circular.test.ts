// Circular LinkedList

// Given a linked list, return true if the list
// is circular, false if it is not.

import { LinkedList } from '../lib/LinkedList';
import { Node } from '../lib/Node';

export function circular(list: LinkedList<string>): boolean {
	let slow = list.getFirst();
	let fast = list.getFirst();

	let isCircular = false;

	while (fast?.next && fast?.next.next) {
		slow = slow?.next || null;
		fast = fast.next.next;

		if (fast === slow) {
			isCircular = true;
			break;
		}
	}

	return isCircular;
}

test('circular', () => {
	expect(typeof circular).toEqual('function');
});

test('circular detects circular linked lists', () => {
	const l = new LinkedList<string>();
	const a = new Node('a');
	const b = new Node('b');
	const c = new Node('c');

	l.head = a;
	a.next = b;
	b.next = c;
	c.next = b;

	expect(circular(l)).toEqual(true);
});

test('circular detects circular linked lists linked at the head', () => {
	const l = new LinkedList<string>();
	const a = new Node('a');
	const b = new Node('b');
	const c = new Node('c');

	l.head = a;
	a.next = b;
	b.next = c;
	c.next = a;

	expect(circular(l)).toEqual(true);
});

test('circular detects non-circular linked lists', () => {
	const l = new LinkedList<string>();
	const a = new Node('a');
	const b = new Node('b');
	const c = new Node('c');

	l.head = a;
	a.next = b;
	b.next = c;
	c.next = null;

	expect(circular(l)).toEqual(false);
});
