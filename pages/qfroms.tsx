import { SolutionCode, SolutionDescription } from '../components/';

export default function QueueFromStacks() {
	const code = `class QueueFromStacks<T> {
        stackMain = new Stack<T>();
        stackTemp = new Stack<T>();
    
        add(value: T) {
            this.stackMain.push(value);
        }
    
        remove(): T | undefined {
            while (this.stackMain.peek()) {
                this.stackTemp.push(this.stackMain.pop()!);
            }
    
            const el = this.stackTemp.pop();
    
            while (this.stackTemp.peek()) {
                this.stackMain.push(this.stackTemp.pop()!);
            }
    
            return el;
        }
    
        peek(): T | undefined {
            while (this.stackMain.peek()) {
                this.stackTemp.push(this.stackMain.pop()!);
            }
    
            const el = this.stackTemp.peek();
    
            while (this.stackTemp.peek()) {
                this.stackMain.push(this.stackTemp.pop()!);
            }
    
            return el;
        }
    }
    `;

	const description = `Implement a Queue datastructure using two stacks. 
    *Do not* create an array inside of the 'Queue' class. 
    Queue should implement the methods 'add', 'remove', and 'peek'.`;

	const tests = [
		`const q = new Queue();
        q.add(1);
        q.add(2);
        q.peek();  // returns 1
        q.remove(); // returns 1
        q.remove(); // returns 2`,
	];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
