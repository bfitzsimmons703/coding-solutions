export class Queue<T> {
	data: T[] = [];

	add(value: T) {
		this.data.unshift(value);
	}

	remove(): T | undefined {
		return this.data.pop();
	}

	peek(): T | undefined {
		return this.data.length > 0
			? this.data[this.data.length - 1]
			: undefined;
	}
}
