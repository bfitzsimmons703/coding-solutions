// Time Conversion
// Strings

// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

export function timeConversion(s: string): string {
	const parts = s.split('M')[0].split('');
	const timeParts = parts.slice(0, parts.length - 1);
	let hour: string = `${timeParts[0]}${timeParts[1]}`;

	const isPm = s.indexOf('PM') >= 0;
	if (isPm) {
		const hourNum = Math.max((parseInt(hour) + 12) % 24, 12);
		hour = hourNum.toString();
	} else if (hour === '12') {
		hour = '00';
	}

	return hour + timeParts.slice(2).join('');
}

test('Time Conversion', () => {
	expect(timeConversion('09:05:45PM')).toBe('21:05:45');
	expect(timeConversion('07:05:45PM')).toBe('19:05:45');
	expect(timeConversion('07:05:45AM')).toBe('07:05:45');
	expect(timeConversion('12:00:00AM')).toBe('00:00:00');
	expect(timeConversion('12:00:00PM')).toBe('12:00:00');
});
