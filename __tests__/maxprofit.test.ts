// Max Profit
// Arrays

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// O(n)

export function maxProfit(prices: number[]): number {
	let left = 0;
	let right = 1;
	let max = 0;

	while (right < prices.length) {
		if (prices[right] <= prices[left]) {
			left = right;
		}

		const diff = prices[right] - prices[left];
		max = Math.max(diff, max);

		right++;
	}

	return max;
}

test('Max Profit', () => {
	expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
	expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
	expect(maxProfit([2, 4, 1])).toBe(2);
});
