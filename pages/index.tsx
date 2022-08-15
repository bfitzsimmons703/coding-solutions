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

	const groups: Record<string, CodingSolution[]> = {};
	for (const solution of solutions) {
		groups[solution.groupName] = groups[solution.groupName] || [];
		groups[solution.groupName].push(solution);
	}

	const props: PageProps = { groups };
	return { props };
}

interface PageProps {
	groups: Record<string, CodingSolution[]>;
}

const Home = ({ groups }: PageProps) => {
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
				<div className='groups'>
					{Object.keys(groups)
						.sort()
						.map((groupName: string) => {
							return (
								<div className='group' key={groupName}>
									<h4>{groupName}</h4>
									<ul className='group-links'>
										{groups[groupName].map(
											(solution: CodingSolution) => {
												return (
													<li
														key={solution.link}
														style={{
															cursor: 'pointer',
														}}
													>
														<Link
															href={`/solutions/${solution.link}`}
														>
															<a>
																{
																	solution.displayName
																}
															</a>
														</Link>
													</li>
												);
											}
										)}
									</ul>
								</div>
							);
						})}
				</div>
			</main>
		</div>
	);
};

export default Home;
