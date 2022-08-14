import { readdirSync, readFileSync } from 'fs';
import { GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';
import path from 'path';
import CodingSolution from '../../lib/CodingSolution';

const Editor = dynamic(import('../../components/Editor'), {
	ssr: false,
});

export async function getStaticPaths() {
	const postsDirectory = path.join(process.cwd(), '__tests__');
	const filenames = readdirSync(postsDirectory);

	const paths = filenames.map(async (filename) => {
		return { params: { name: filename.split('.')[0] } };
	});

	return {
		paths: await Promise.all(paths),
		fallback: false, // can also be true or 'blocking'
	};
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const dir = path.join(process.cwd(), '__tests__');

	const solutionName = context.params?.name as string;
	const filename = `${solutionName}.test.ts`;
	const filePath = path.join(dir, filename);
	const fileContents = readFileSync(filePath, 'utf8');

	const fileLines = fileContents.split('\n');
	const displayName = fileLines[0].replace('// ', '');

	const code = fileLines
		.slice(2)
		.filter(
			(line) =>
				line.indexOf('import') === -1 && line.indexOf('@ts') === -1
		)
		.join('\n');

	return {
		props: {
			solution: {
				name: solutionName,
				displayName: displayName,
				code: code,
			},
		},
	};
}

export default function Solution({ solution }: { solution: CodingSolution }) {
	return (
		<main>
			<h4>{solution.displayName}</h4>
			<Editor code={solution.code} />
		</main>
	);
}
