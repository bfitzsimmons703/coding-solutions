import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const solutionLinks = new Map([
	['fizzbuzz', 'Classic FizzBuzz'],
	['reversestring', 'Reverse String'],
	['reverseint', 'Reverse Integer'],
	['anagrams', 'Anagrams'],
	['palindrome', 'Palindrome'],
	['maxchar', 'Max Character'],
	['chunks', 'Array Chunks'],
	['sentencecap', 'Sentence Capitalization'],
	['steps', 'Printing Steps'],
	['pyramid', 'Printing Pyramid'],
]);

const Home: NextPage = () => {
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
					{Array.from(solutionLinks.entries()).map(
						([link, title]) => (
							<li key={link}>
								<Link href={`/${link}`}>
									<a>{title}</a>
								</Link>
							</li>
						)
					)}
				</ul>
			</main>
		</div>
	);
};

export default Home;
