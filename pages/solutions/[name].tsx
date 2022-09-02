import { readdirSync, readFileSync } from 'fs';
import { GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';
import path from 'path';
import CodingSolution, { getCodingSolutionFromTestFile } from '../../lib/CodingSolution';

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
		fallback: false,
	};
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const dir = path.join(process.cwd(), '__tests__');
	const name = context.params?.name as string;
	const filename = `${name}.test.ts`;

	return {
		props: {
			solution: getCodingSolutionFromTestFile({ filename, dir, includeCode: true }),
		},
	};
}

interface Props {
	solution: CodingSolution;
}

export default function Solution({ solution }: Props) {
	return (
		<main>
			<h4>
				Solutions / {solution.groupName} / {solution.displayName}
			</h4>
			<Editor code={solution.code} />
		</main>
	);
}
