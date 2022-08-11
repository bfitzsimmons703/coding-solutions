import dynamic from 'next/dynamic';
const TextEditor = dynamic(import('./Editor'), {
	ssr: false,
});

interface Props {
	codeSnippet: string;
}

export function SolutionCode({ codeSnippet }: Props) {
	return (
		<div>
			<hr />
			<h4>Solution</h4>
			<TextEditor code={codeSnippet} />
		</div>
	);
}
