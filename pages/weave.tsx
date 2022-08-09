import { SolutionCode, SolutionDescription } from '../components/';

export default function Weave() {
	const code = `function weave(q1: Queue<string>, q2: Queue<string>): Queue<string> {
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
}`;

	const description = `Weave receives two queues as arguments and combines the contents of each into a new, third queue. 
    The third queue should contain the *alterating* content of the two queues. 
    The function should handle queues of different lengths without inserting 'undefined' into the new one. 
    *Do not* access the array inside of any queue, only use the 'add', 'remove', and 'peek' functions.`;

	const tests = [
		`const queueOne = new Queue();
        queueOne.add(1);
        queueOne.add(2);
        const queueTwo = new Queue();
        queueTwo.add('Hi');
        queueTwo.add('There');
        const q = weave(queueOne, queueTwo);
        q.remove() // 1
        q.remove() // 'Hi'
        q.remove() // 2
        q.remove() // 'There'`,
	];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
