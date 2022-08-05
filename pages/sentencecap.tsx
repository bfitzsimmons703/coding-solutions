import { SolutionCode, SolutionDescription } from '../components/';

export default function SentenceCapitalization() {
	const description = `Write a function that accepts a string and capitalizes the first letter of each word in the string.`;

	const tests = [
		`capitalize('a short sentence') --> 'A Short Sentence'`,
		`capitalize('a lazy fox') --> 'A Lazy Fox'`,
		`capitalize('look, it is working!') --> 'Look, It Is Working!'`,
	];

	const code = `function capitalizeWord(word: string): string {
        // Yay helper functions
        // Can assume the word will have at least 1 character, so split if off and add back everything from the second char on
        return word[0].toUpperCase() + word.slice(1);
}
    
function capitalize(s: string): string {
        // Split up the sentence first
        const delim = ' ';
        const words = s.split(delim);
        const capitalizedWords = words.map((word) => capitalizeWord(word));
        return capitalizedWords.join(delim);
}`;

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
