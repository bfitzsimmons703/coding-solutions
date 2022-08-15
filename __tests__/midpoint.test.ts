// LinkedList Midpoint

// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.

import { LinkedList, Node } from '../lib/LinkedList';

export function midpoint(l: LinkedList<string>): Node<string> | null {
	let slow: Node<string> | null = l.getFirst();
	let fast: Node<string> | null = l.getFirst();

	while (fast?.next && fast?.next.next) {
		slow = slow?.next || null;
		fast = fast.next?.next || null;
	}

	return slow;
}

test('Midpoint is a function', () => {
	expect(typeof midpoint).toEqual('function');
});

describe('Midpoint returns the middle node of an odd numbered list', () => {
	test('when the list has 3 elements', () => {
		const l = new LinkedList<string>();
		l.insertLast('a');
		l.insertLast('b');
		l.insertLast('c');
		expect(midpoint(l)?.data).toEqual('b');
	});

	test('when the list has 5 elements', () => {
		const l = new LinkedList<string>();
		l.insertLast('a');
		l.insertLast('b');
		l.insertLast('c');
		l.insertLast('d');
		l.insertLast('e');
		expect(midpoint(l)?.data).toEqual('c');
	});
});

describe('Midpoint returns the middle node of an even numbered list', () => {
	test('when the list has 2 elements', () => {
		const l = new LinkedList<string>();
		l.insertLast('a');
		l.insertLast('b');
		expect(midpoint(l)?.data).toEqual('a');
	});

	test('when the list has 4 elements', () => {
		const l = new LinkedList<string>();
		l.insertLast('a');
		l.insertLast('b');
		l.insertLast('c');
		l.insertLast('d');
		expect(midpoint(l)?.data).toEqual('b');
	});
});
