// Match Brackets
// Strings

// Given a string of angle brackets, write a function that add brackets at the beginning and end of the string to make all brackets match.
// The angle brackets match if for every < there is a corresponding > and for every > there is a corresponding <

export function bracketsMatcher(brackets: string): string {
	let neededLeft = 0; // '<'
	let neededRight = 0; // '>'

	for (const bracket of brackets) {
		if (bracket === '>') {
			if (neededRight === 0) {
				neededLeft++;
			} else {
				neededRight--;
			}
		} else {
			neededRight++;
		}
	}

	let leftBracketString = '';
	for (let i = 0; i < neededLeft; i++) {
		leftBracketString += '<';
	}

	let rightBracketString = '';
	for (let i = 0; i < neededRight; i++) {
		rightBracketString += '>';
	}

	return leftBracketString + brackets + rightBracketString;
}

test('Brackets Match', () => {
	expect(bracketsMatcher('><<><')).toBe('<><<><>>');
	expect(bracketsMatcher('<><<')).toBe('<><<>>');
	expect(bracketsMatcher('<><<<>')).toBe('<><<<>>>');
	expect(bracketsMatcher('<><<<><')).toBe('<><<<><>>>');
	expect(bracketsMatcher('><<>')).toBe('<><<>>');
	expect(bracketsMatcher('><<<')).toBe('<><<<>>>');
});
