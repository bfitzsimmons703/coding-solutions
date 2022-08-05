interface Props {
	description: string;
	tests: string[];
}

export function SolutionDescription({ description, tests }: Props) {
	return (
		<div>
			<h4>{description}</h4>
			<hr />
			<h4>Tests</h4>
			<ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
				{tests.map((test, i) => (
					<li key={i}>{test}</li>
				))}
			</ul>
		</div>
	);
}
