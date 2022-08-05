import { SolutionCode, SolutionDescription } from '../components/';

export default function ReverseString() {
	const code = `function reverseString(s: string): string {
	return s.split('').reverse().join('');
}`;

	const description = `Given a string, return a new string with the reversed order of characters.`;

	const tests = [
		`reverse('apple') === 'leppa'`,
		`reverse('hello') === 'olleh'`,
		`reverse('Greetings!') === '!sgniteerG'`,
	];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
