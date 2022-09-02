import { readFileSync } from 'fs';
import path from 'path';

export default interface CodingSolution {
	link: string;
	displayName: string;
	code: string;
	groupName: string;
}

interface CodingSolutionsArgs {
	filename: string;
	dir: string;
	includeCode?: boolean;
}

export function getCodingSolutionFromTestFile(args: CodingSolutionsArgs): CodingSolution {
	const { filename, dir, includeCode = false } = args;

	const filePath = path.join(dir, filename);
	const fileContents = readFileSync(filePath, 'utf8');
	const fileLines = fileContents.split('\n');

	const displayName = fileLines.shift()!.replace('// ', '');
	const groupName = fileLines.shift()!.replace('// ', '');
	const link = filename.split('.')[0];

	let code = '';
	if (includeCode) {
		code = fileLines.filter((line) => line.indexOf('import') === -1 && line.indexOf('@ts') === -1).join('\n');
	}

	return {
		link,
		displayName,
		groupName,
		code,
	};
}
