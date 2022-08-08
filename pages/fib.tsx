import { SolutionCode, SolutionDescription } from '../components/';

export default function Fib() {
	const code = `function memoize<T extends number | string>(fn: (x: T) => T) {
        let cache: Record<any, T> = {};
        return function func(this: typeof func, arg: T) {
            if (cache[arg]) return cache[arg];
    
            let result = fn.apply(this, [arg]);
            cache[arg] = result;
            return result;
        };
}

let fib = (n: number): number => {
    if (n < 2) return n;

    return fib(n - 1) + fib(n - 2);
};
    
fib = memoize(fib);`;

	const description = `Print out the n-th entry in the fibonacci series.`;

	const tests = [`fib(4) === 3`, `fib(39) === 63245986`];

	return (
		<main>
			<SolutionDescription description={description} tests={tests} />
			<SolutionCode codeSnippet={code} />
		</main>
	);
}
