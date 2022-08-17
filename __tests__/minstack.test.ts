// MinStack Implementation
// Stacks

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// https://leetcode.com/problems/min-stack/

// O(1)

export class MinStack {
	data: any[] = [];
	min: number | undefined;
	minHistory: number[] = [];

	push(val: number): void {
		if (!this.data.length || (this.min !== undefined && val <= this.min)) {
			this.min = val;
			this.minHistory.push(val);
		}

		this.data.push(val);
	}

	pop(): void {
		const top = this.data[this.data.length - 1];
		this.data.pop();

		if (top === this.minHistory[this.minHistory.length - 1]) {
			this.minHistory.pop();
			this.min = this.minHistory[this.minHistory.length - 1];
		}
	}

	top(): number {
		return this.data[this.data.length - 1];
	}

	getMin(): number {
		return this.min!;
	}
}

test('MinStack', () => {
	const minStack = new MinStack();
	minStack.push(-2);
	minStack.push(0);
	minStack.push(-3);
	expect(minStack.getMin()).toBe(-3);
	minStack.pop();
	expect(minStack.top()).toBe(0);
	expect(minStack.getMin()).toBe(-2);
});

test('MinStack 2', () => {
	const minStack = new MinStack();
	minStack.push(-1);
	expect(minStack.top()).toBe(-1);
	expect(minStack.getMin()).toBe(-1);
});

test('MinStack 3', () => {
	const minStack = new MinStack();
	minStack.push(0);
	minStack.push(1);
	minStack.push(0);
	expect(minStack.getMin()).toBe(0);
	minStack.pop();
	expect(minStack.getMin()).toBe(0);
});
