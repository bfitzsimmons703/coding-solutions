import { SolutionCode, SolutionDescription } from '../components/';

export default function Palindrome() {
	const code = `function palindrome(s: string): boolean {
        let index = s.length - 1;

        for (const char of s) {
            if (char !== s[index]) {
                return false;
            }
    
			//No need to do the other half since we've already checked it
            if (index < s.length / 2) break;
    
            index--;
        }
    
        return true;
}`;

	const description = `Given a string, return true if the string is a palindrome or false if it is not. 
    Palindromes are strings that form the same word if it is reversed. 
    Include spaces and punctuation in determining if the string is a palindrome.`;

	const tests = [
		`palindrome("abba") === true`,
		`palindrome("abcdefg") === false`,
	];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
