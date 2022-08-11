import { SolutionCode, SolutionDescription } from '../components';

export default function FromLast() {
	const code = `export function fromLast(l: LinkedList<string>, n: number): Node<string> {
        let slow = l.getFirst()!;
        let fast = l.getFirst()!;
    
        for (let i = 0; i < n; i++) {
            fast = fast.next!;
        }
    
        while (fast?.next) {
            slow = slow.next!;
            fast = fast.next;
        }
    
        return slow;
}`;

	const description = `Given a linked list and integer n, return the element n spaces from the last node in the list.
    Do not call the 'size' method of the linked list.
    N will always be smaller than size.`;

	const tests = [
		`const list = new List();
        list.insertLast('a');
        list.insertLast('b');
        list.insertLast('c');
        list.insertLast('d');
        fromLast(list, 2).data // 'b'`,
	];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
