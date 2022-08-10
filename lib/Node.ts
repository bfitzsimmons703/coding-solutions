export class Node<T> {
	data: T;
	next: Node<T> | null;

	constructor(data: T, next: Node<T> | null = null) {
		this.data = data;
		this.next = next;
	}
}
