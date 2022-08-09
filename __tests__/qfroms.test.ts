// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.

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
