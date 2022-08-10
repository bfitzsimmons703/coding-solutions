import { SolutionCode, SolutionDescription } from '../components/';

export default function Midpoint() {
	const code = `export function midpoint(l: LinkedList<string>): Node<string> | null {
        let slow: Node<string> | null = l.getFirst();
        let fast: Node<string> | null = l.getFirst();
    
        while (fast?.next && fast?.next.next) {
            slow = slow?.next || null;
            fast = fast.next?.next || null;
        }
    
        return slow;
}`;

	const description = `Return the 'middle' node of a linked list.
    If the list has an even number of elements, return the node at the end of the first half of the list.
    *Do not* use a counter variable, *do not* retrieve the size of the list, and only iterate through the list one time.`;

	const tests = [
		`const l = new LinkedList();
        l.insertLast('a')
        l.insertLast('b')
        l.insertLast('c')
        midpoint(l); // returns { data: 'b' }`,
	];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
