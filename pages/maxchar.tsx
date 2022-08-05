import { SolutionCode, SolutionDescription } from '../components/';

export default function MaxChar() {
	const code = `function maxChar(s: string): string {
        let charCounts: Record<string, number> = {};
        let maxCount: number = 0;
        let maxChar: string = s[0];
        for (const char of s) {
            charCounts[char] = charCounts[char] + 1 || 1;
            if (charCounts[char] > maxCount) {
                maxCount = charCounts[char];
                maxChar = char;
            }
        }
    
        return maxChar;
}`;

	const description = `Given a string, return the character that is most commonly used in the string.`;

	const tests = [
		`maxChar("abcccccccd") === "c"`,
		`maxChar("apple 1231111") === "1"`,
	];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
