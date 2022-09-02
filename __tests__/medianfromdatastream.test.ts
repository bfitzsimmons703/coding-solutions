// Find Median from Data Stream
// Heaps

import { MaxHeap } from './maxheap.test';
import { MinHeap } from './minheap.test';

// The median is the middle value in an ordered integer list.
// If the size of the list is even, there is no middle value and the median is the mean of the two middle values.
// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.

// Implement the MedianFinder class:
// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

export class MedianFinder {
	private small = new MaxHeap();
	private large = new MinHeap();

	addNum(num: number): void {
		this.small.insert(num);

		// after adding it to small, make sure every number in small is still <= every number in large
		if (this.small.getMax() > this.large.getMin()) {
			// there's a number in small that is bigger than a number in large, need to move it to large
			const val = this.small.removeMax();
			this.large.insert(val);
		}

		// also need to make sure heaps are within 1 length of each other
		if (this.small.getSize() > this.large.getSize() + 1) {
			const val = this.small.removeMax();
			this.large.insert(val);
		} else if (this.large.getSize() > this.small.getSize() + 1) {
			const val = this.large.removeMin();
			this.small.insert(val);
		}
	}

	findMedian(): number {
		if (this.small.getSize() > this.large.getSize()) {
			return this.small.getMax();
		}

		if (this.small.getSize() < this.large.getSize()) {
			return this.large.getMin();
		}

		const smallVal = this.small.getMax();
		const largeVal = this.large.getMin();

		return (smallVal + largeVal) / 2;
	}
}

test('Median from Data Stream', () => {
	const finder = new MedianFinder();
	finder.addNum(1);
	finder.addNum(2);
	expect(finder.findMedian()).toEqual(1.5);
	finder.addNum(3);
	expect(finder.findMedian()).toEqual(2);
});
