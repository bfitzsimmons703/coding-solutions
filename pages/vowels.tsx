import { SolutionCode, SolutionDescription } from '../components/';

export default function Vowels() {
	const code = `function vowels(s: string): number {
        return s.match(/aeiou/gi)?.length || 0;
}`;

	const description = `Write a function that returns the number of vowels used in a string. 
    Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.`;

	const tests = [
		`vowels('Hi There!') --> 3`,
		`vowels('Why do you ask?') --> 4`,
		`vowels('Why?') --> 0`,
	];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
