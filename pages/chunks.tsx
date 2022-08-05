import { SolutionCode, SolutionDescription } from '../components/';

export default function ArrayChunks() {
	const code = `function chunk(array: number[], size: number): number[][] {
        let chunks: number[][] = [];
    
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
    
        return chunks;
}`;

	const description = `Given an array and chunk size, divide the array into many subarrays where each subarray is of length size.`;

	const tests = [
		`chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]`,
		`chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]`,
		`chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]`,
		`chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]`,
		`chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]`,
	];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
