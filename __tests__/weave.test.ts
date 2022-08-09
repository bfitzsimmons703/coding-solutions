import { Queue } from '../lib/Queue';

export function weave(q1: Queue<string>, q2: Queue<string>): Queue<string> {
	let queue = new Queue<string>();
	while (q1.peek() || q2.peek()) {
		if (q1.peek()) {
			queue.add(q1.remove()!);
		}

		if (q2.peek()) {
			queue.add(q2.remove()!);
		}
	}

	return queue;
}

test('queues have a peek function', () => {
	const q = new Queue();
	expect(typeof q.peek).toEqual('function');
});

test('peek returns, but does not remove, the first value', () => {
	const q = new Queue<number>();
	q.add(1);
	q.add(2);
	expect(q.peek()).toEqual(1);
	expect(q.peek()).toEqual(1);
	expect(q.remove()).toEqual(1);
	expect(q.remove()).toEqual(2);
});

test('weave is a function', () => {
	expect(typeof weave).toEqual('function');
});

test('weave can combine two queues', () => {
	const one = new Queue<string>();
	one.add('1');
	one.add('2');
	one.add('3');
	one.add('4');
	const two = new Queue<string>();
	two.add('one');
	two.add('two');
	two.add('three');
	two.add('four');

	const result = weave(one, two);
	expect(result.remove()).toEqual('1');
	expect(result.remove()).toEqual('one');
	expect(result.remove()).toEqual('2');
	expect(result.remove()).toEqual('two');
	expect(result.remove()).toEqual('3');
	expect(result.remove()).toEqual('three');
	expect(result.remove()).toEqual('4');
	expect(result.remove()).toEqual('four');
	expect(result.remove()).toBeUndefined();
});
