import { SolutionCode, SolutionDescription } from '../components/';

export default function Matrix() {
	const code = `function matrix(n: number): number[][] {
        //set up the matrix body
        let matrix: number[][] = [];
        for (let i = 0; i < n; i++) {
            let row: number[] = [];
            matrix.push(row);
        }
    
        // These act as the bounds of the matrix we're working with
        let top = 0;
        let right = n - 1;
        let bottom = n - 1;
        let left = 0;
    
        let currentNumber = 1;
        while (top <= bottom && left <= right) {
            // Top row
            for (let i = left; i <= right; i++) {
                matrix[top][i] = currentNumber;
                currentNumber++;
            }
    
            // Done with the top row, set the upper bound one row down
            top++;
    
            // Down the right side
            for (let i = top; i <= bottom; i++) {
                matrix[i][right] = currentNumber;
                currentNumber++;
            }
    
            // move right side one to the left
            right--;
    
            // left across the bottom
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = currentNumber;
                currentNumber++;
            }
    
            // bring the lower bound one up
            bottom--;
    
            // up the left hand side
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = currentNumber;
                currentNumber++;
            }
    
            // move left bound one to the right
            left++;
        }
    
        return matrix;
}`;

	const description = `Write a function that accepts an integer N and returns a NxN spiral matrix.`;

	const tests = [
		`matrix(2) --> 
        [[1, 2],
        [4, 3]]`,
		`matrix(3) --> 
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]`,
		`matrix(4) -->
        [[1, 2,  3, 4], 
        [12, 13, 14, 5], 
        [11, 16, 15, 6], 
        [10,  9,  8, 7]]`,
	];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
