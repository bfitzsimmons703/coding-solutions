import { SolutionCode, SolutionDescription } from '../components/';

export default function FizzBuzz() {
	const code = `function fizzBuzz(n: number): void {
        //Don't overthink this one. Keep it simple.
        for (let i = 1; i <= n; i++) {
            if (i % 15 === 0) {
                console.log('fizzbuzz');
            } else if (i % 3 === 0) {
                console.log('fizz');
            } else if (i % 5 === 0) {
                console.log('buzz');
            } else {
                console.log(i);
            }
        }
}`;

	const description = `Write a program that console logs the numbers from 1 to n. 
    But for multiples of three print "fizz" instead of the number and for the multiples of five print "buzz". 
    For numbers which are multiples of both three and five print "fizzbuzz".`;

	const tests = [
		`fizzBuzz(5) --> 1 2 fizz 4 buzz`,
		`fizzBuzz(15) --> 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz`,
	];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
