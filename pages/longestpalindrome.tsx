import { SolutionCode, SolutionDescription } from '../components/';

export default function LongestPalindrome() {
	const code = `function longestPalindrome(s: string): string {
        let longest = '';
        for (let mid = 0; mid < s.length; mid++) {
            // odd length
            let left = mid,
                right = mid;
    
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                let substr = s.slice(left, right + 1);
                if (substr.length > longest.length) {
                    longest = substr;
                }
    
                left--;
                right++;
            }
    
            // even length
            left = mid;
            right = mid + 1;
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                let substr = s.slice(left, right + 1);
                if (substr.length > longest.length) {
                    longest = substr;
                }
    
                left--;
                right++;
            }
        }
        return longest;
}`;

	const description = `Given a string s, return the longest palindromic substring in s.`;

	const tests = [
		`longestPalindrome('babad') --> 'bab' OR 'aba'`,
		`longestPalindrome('cbbd') --> 'bb'`,
	];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
