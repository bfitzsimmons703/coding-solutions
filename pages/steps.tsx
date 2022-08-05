import { SolutionCode, SolutionDescription } from '../components/';

export default function Steps() {
	const code = `function getCharString(char: string, count: number): string {
        let str = '';
        for (let i = 0; i < count; i++) {
            str += char;
        }
        return str;
}
    
function steps(n: number): void {
        for (let row = 1; row <= n; row++) {
            const octothorps = getCharString('#', row);
    
            const underscoreCount = n - row;
            const underscores = getCharString('_', underscoreCount);
    
            console.log(octothorps + underscores);
        }
}

// OR if you're feeling fancy, recursion
function recursiveSteps(stepCount: number, row: number = 1):void {
    // Always get your base case!
    if (row > max) return;

    const octothorps = getCharString('#', row);
    const underscoreCount = stepCount - row;
    const underscores = getCharString('_', underscoreCount);

    console.log(octothorps + underscores);

    recursiveSteps(stepCount, row + 1);
}

// Then call it like recursiveSteps(3)
`;

	const description = `Write a function that accepts a positive number N. 
    The function should console log a step shape with N levels using the # character.  
    Make sure the step has _ on the right hand side.`;

	const tests = [`steps(2) --> '#_' '##'`, `steps(3) --> '#__' '##_' '###'`];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
