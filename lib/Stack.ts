export class Stack<T> {
	data: T[] = [];

	push(value: T) {
		this.data.push(value);
	}

	pop(): T | undefined {
		return this.data.pop();
	}

	peek(): T | undefined {
		return this.data[this.data.length - 1];
	}
}
