import { LinkedList } from '../lib/LinkedList';
import { Node } from '../lib/Node';

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
