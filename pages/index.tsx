import Head from 'next/head';
import path from 'path';
import fs, { readFileSync } from 'fs';
import CodingSolution, {
	getCodingSolutionFromTestFile,
} from '../lib/CodingSolution';
import Link from 'next/link';

export async function getStaticProps() {
	const dir = path.join(process.cwd(), '__tests__');
	const filenames = fs.readdirSync(dir);

	const promises: Promise<CodingSolution>[] = filenames.map(
		async (filename) => getCodingSolutionFromTestFile(filename, dir)
	);

	const solutions: CodingSolution[] = await Promise.all(promises);

	const props: PageProps = {
		solutions: solutions.filter(
			(s) => s.displayName !== '' && s.groupName !== ''
		),
	};

	return {
		props,
	};
}

interface PageProps {
	solutions: CodingSolution[];
}

const Home = (props: PageProps) => {
	return (
		<div>
			<Head>
				<title>TypeScript Coding Solutions</title>
				<meta
					name='description'
					content='TypeScript solutions to various coding challenges'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h3>TypeScript Coding Solutions</h3>
				<ul className='solution-links'>
					{props.solutions
						.filter((s) => !!s)
						.map((solution: CodingSolution) => {
							return (
								<li
									key={solution.link}
									style={{ cursor: 'pointer' }}
								>
									<Link href={`/solutions/${solution.link}`}>
										<a>{solution.displayName}</a>
									</Link>
								</li>
							);
						})}
				</ul>
			</main>
		</div>
	);
};

export default Home;
