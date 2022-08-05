interface Props {
	codeSnippet: string;
}

export function SolutionCode({ codeSnippet }: Props) {
	return (
		<div>
			<hr />
			<h4>Solution</h4>
			<pre>{codeSnippet}</pre>
		</div>
	);
}
