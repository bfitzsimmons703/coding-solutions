import { SolutionCode, SolutionDescription } from '../components/';

function getCharString(char: string, count: number): string {
	let str = '';
	for (let i = 0; i < count; i++) {
		str += char;
	}
	return str;
}

function pyramid(n: number): void {
	// Had to draw out the steps on paper to figure this out
	const maxOctos = n * 2 - 1;

	for (let row = 1; row <= n; row++) {
		const underscoreCount = n - row;
		const underscores = getCharString('_', underscoreCount);

		const octoCount = maxOctos - underscoreCount * 2; //* 2 because underscores are on both sides
		const octothorps = getCharString('#', octoCount);

		console.log(underscores + octothorps + underscores);
	}
}

export default function Pyramid() {
	const code = `function getCharString(char: string, count: number): string {
        let str = '';
        for (let i = 0; i < count; i++) {
            str += char;
        }
        return str;
}
    
function pyramid(n: number): void {
	// Had to draw out the steps on paper to figure this out
	const maxOctos = n * 2 - 1;

	for (let row = 1; row <= n; row++) {
		const underscoreCount = n - row;
		const underscores = getCharString('_', underscoreCount);

		const octoCount = maxOctos - underscoreCount * 2; //* 2 because underscores are on both sides
		const octothorps = getCharString('#', octoCount);

		console.log(underscores + octothorps + underscores);
	}
}

// Could also think of it as a matrix, where the middle column is always #, then you go out from the middle

`;

	const description = ` Write a function that accepts a positive number N.
    The function should console log a pyramid shape with N levels using the # character.  
    Make sure the pyramid has underscores on both the left *and* right hand sides.`;

	const tests = [
		`pyramid(1) --> '#' '##'`,
		`pyramid(2) --> '_#_' '###'`,
		`pyramid(3) --> '__#__' '_###_' '#####'`,
	];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
