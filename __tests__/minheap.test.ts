// MinHeap
// Heaps

// MinHeap implementation

// left child = (i * 2) + 1
// right child = (i * 2) + 2
// parent = Math.floor((i - 1) / 2)
export class MinHeap {
	private heap: number[] = [];

	private getParentIndex(i: number): number {
		return Math.floor((i - 1) / 2);
	}

	private getLeftChildIndex(i: number): number {
		return 2 * i + 1;
	}

	private getRightChildIndex(i: number): number {
		return 2 * i + 2;
	}

	private hasLeftChild(i: number): boolean {
		return this.getLeftChildIndex(i) < this.heap.length;
	}

	private hasRightChild(i: number): boolean {
		return this.getRightChildIndex(i) < this.heap.length;
	}

	private swapNodes(index1: number, index2: number): void {
		[this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
	}

	getMin(): number {
		return this.heap[0];
	}

	getSize(): number {
		return this.heap.length;
	}

	insert(n: number): void {
		this.heap.push(n);
		if (this.heap.length > 1) {
			let newElementIdx = this.heap.length - 1; //what we just inserted
			let parentIdx = this.getParentIndex(newElementIdx);
			while (this.heap[newElementIdx] < this.heap[parentIdx]) {
				// new element is smaller than its current parent node, so need to swap them
				// because in min-heap, parents < children
				this.swapNodes(newElementIdx, parentIdx);

				newElementIdx = parentIdx;

				parentIdx = this.getParentIndex(newElementIdx);
				if (parentIdx < 0) break;
			}
		}
	}

	removeMin(): number | never {
		if (!this.heap.length) {
			throw new Error('Empty MinHeap');
		}

		const min = this.heap[0];

		// move last element to head
		this.heap[0] = this.heap[this.heap.length - 1];
		// and pop it from the end, now that it's at the head
		this.heap.pop();

		if (this.heap.length <= 2) {
			if (this.heap.length === 2) {
				if (this.heap[0] > this.heap[1]) {
					this.swapNodes(0, 1);
				}
			}

			return min;
		}

		let i = 0;

		// Only need to check left side because heaps must be "complete", meaning they always have a left before a right child
		while (this.hasLeftChild(i)) {
			const leftChildIdx = this.getLeftChildIndex(i);
			const rightChildIdx = this.getRightChildIndex(i);

			const smallerChildIdx = this.hasRightChild(i) && this.heap[rightChildIdx] < this.heap[leftChildIdx] ? rightChildIdx : leftChildIdx;

			if (this.heap[i] < this.heap[smallerChildIdx]) break; //we're done, because parent is smaller

			this.swapNodes(i, smallerChildIdx);
			i = smallerChildIdx;
		}

		return min;
	}

	toArray(): number[] {
		return [...this.heap];
	}
}

test('MinHeap', () => {
	const heap = new MinHeap();
	heap.insert(10);
	expect(heap.toArray()).toStrictEqual([10]);
	heap.insert(20);
	expect(heap.toArray()).toStrictEqual([10, 20]);
	heap.insert(5);
	expect(heap.toArray()).toStrictEqual([5, 20, 10]);
	heap.insert(2);
	expect(heap.toArray()).toStrictEqual([2, 5, 10, 20]);
	heap.insert(25);
	expect(heap.toArray()).toStrictEqual([2, 5, 10, 20, 25]);

	let min = heap.removeMin();
	expect(min).toEqual(2);
	expect(heap.toArray()).toStrictEqual([5, 20, 10, 25]);

	min = heap.removeMin();
	expect(min).toEqual(5);
	expect(heap.toArray()).toStrictEqual([10, 20, 25]);

	const emptyHeap = new MinHeap();
	expect(() => emptyHeap.removeMin()).toThrowError();
});
