import { SolutionCode, SolutionDescription } from '../components/';

export default function Anagrams() {
	const code = `const format = (s: string): string => s.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('');

function anagrams(s1: string, s2: string): boolean {
	//make helper function so strings are formatted in the same way
	return format(s1) === format(s2);
}`;

	const description = `Check to see if two provided strings are anagrams of each other. 
    One string is an anagram of another if it uses the same characters in the same quantity. 
    Only consider characters, not spaces or punctuation. 
    Consider capital letters to be the same as lower case.`;

	const tests = [
		`anagrams('rail safety', 'fairy tales') --> True`,
		`anagrams('RAIL! SAFETY!', 'fairy tales') --> True`,
		`anagrams('Hi there', 'Bye there') --> False`,
	];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
