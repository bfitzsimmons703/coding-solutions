// MaxHeap
// Heaps

// MaxHeap implementation

// left child = (i * 2) + 1
// right child = (i * 2) + 2
// parent = Math.floor((i - 1) / 2)
export class MaxHeap {
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

	getMax(): number {
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
			while (this.heap[newElementIdx] > this.heap[parentIdx]) {
				// new element is greater than its current parent node, so need to swap them
				// because in max-heap, parents > children
				this.swapNodes(newElementIdx, parentIdx);

				newElementIdx = parentIdx;

				parentIdx = this.getParentIndex(newElementIdx);
				if (parentIdx < 0) break;
			}
		}
	}

	removeMax(): number | never {
		if (!this.heap.length) {
			throw new Error('Empty MaxHeap');
		}

		const max = this.heap[0];

		// move last element to head
		this.heap[0] = this.heap[this.heap.length - 1];
		// and pop it from the end, now that it's at the head
		this.heap.pop();

		if (this.heap.length <= 2) {
			if (this.heap.length === 2) {
				if (this.heap[0] < this.heap[1]) {
					this.swapNodes(0, 1);
				}
			}

			return max;
		}

		let i = 0;

		// Only need to check left side because heaps must be "complete", meaning they always have a left before a right child
		while (this.hasLeftChild(i)) {
			const leftChildIdx = this.getLeftChildIndex(i);
			const rightChildIdx = this.getRightChildIndex(i);

			const biggerChildIdx = this.hasRightChild(i) && this.heap[rightChildIdx] > this.heap[leftChildIdx] ? rightChildIdx : leftChildIdx;

			if (this.heap[i] > this.heap[biggerChildIdx]) break; //we're done, because parent is bigger

			this.swapNodes(i, biggerChildIdx);
			i = biggerChildIdx;
		}

		return max;
	}

	toArray(): number[] {
		return [...this.heap];
	}
}

test('MaxHeap', () => {
	const heap = new MaxHeap();
	heap.insert(10);
	expect(heap.toArray()).toStrictEqual([10]);

	heap.insert(20);
	expect(heap.toArray()).toStrictEqual([20, 10]);

	heap.insert(5);
	expect(heap.toArray()).toStrictEqual([20, 10, 5]);

	heap.insert(52);
	expect(heap.toArray()).toStrictEqual([52, 20, 5, 10]);

	let max = heap.removeMax();
	expect(max).toEqual(52);
	expect(heap.toArray()).toStrictEqual([20, 10, 5]);

	const emptyHeap = new MaxHeap();
	expect(() => emptyHeap.removeMax()).toThrowError();
});
