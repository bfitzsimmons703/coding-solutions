// Implement a QueueFromStack datastructure using two stacks.
// *Do not* create an array inside of the 'QueueFromStack' class.
// QueueFromStack should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the QueueFromStack exercise.

import { Stack } from '../lib/Stack';

class QueueFromStack<T> {
	stackMain = new Stack<T>();
	stackTemp = new Stack<T>();

	add(value: T) {
		this.stackMain.push(value);
	}

	remove(): T | undefined {
		while (this.stackMain.peek()) {
			this.stackTemp.push(this.stackMain.pop()!);
		}

		const el = this.stackTemp.pop();

		while (this.stackTemp.peek()) {
			this.stackMain.push(this.stackTemp.pop()!);
		}

		return el;
	}

	peek(): T | undefined {
		while (this.stackMain.peek()) {
			this.stackTemp.push(this.stackMain.pop()!);
		}

		const el = this.stackTemp.peek();

		while (this.stackTemp.peek()) {
			this.stackMain.push(this.stackTemp.pop()!);
		}

		return el;
	}
}

test('QueueFromStack is a class', () => {
	expect(typeof QueueFromStack.prototype.constructor).toEqual('function');
});

test('can add elements to a queue', () => {
	const q = new QueueFromStack();
	expect(() => {
		q.add(1);
	}).not.toThrow();
});

test('can remove elements from a queue', () => {
	const q = new QueueFromStack();
	expect(() => {
		q.add(1);
		q.remove();
	}).not.toThrow();
});

test('Order of elements is maintained', () => {
	const q = new QueueFromStack();
	q.add(1);
	q.add(2);
	q.add(3);
	expect(q.remove()).toEqual(1);
	expect(q.remove()).toEqual(2);
	expect(q.remove()).toEqual(3);
	expect(q.remove()).toEqual(undefined);
});

test('peek returns, but does not remove, the first value', () => {
	const q = new QueueFromStack();
	q.add(1);
	q.add(2);
	expect(q.peek()).toEqual(1);
	expect(q.peek()).toEqual(1);
	expect(q.remove()).toEqual(1);
	expect(q.remove()).toEqual(2);
});
