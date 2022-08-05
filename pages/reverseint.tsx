import { SolutionCode, SolutionDescription } from '../components/';

export default function ReverseInt() {
	const code = `function reverseint(n: number): number {
		//Get rid of the sign first
        const str = Math.abs(n).toString();

		//Tack the sign back on
        return Math.sign(n) * parseInt(str.split('').reverse().join(''));
}`;

	const description = `Given an integer, return an integer that is the reverse ordering of numbers. The sign should stay the same though.`;

	const tests = [
		`reverseInt(15) === 51`,
		`reverseInt(981) === 189`,
		`reverseInt(500) === 5`,
		`reverseInt(-15) === -51`,
		`reverseInt(-90) === -9`,
	];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
