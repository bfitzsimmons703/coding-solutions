// Coin Change
// Dynamic Programming

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

export function coinChange(coins: number[], amount: number): number {
	const dp: number[] = Array(amount + 1).fill(Infinity);
	dp[0] = 0; // for amount 0, it akes 0 coins

	for (let dpAmount = 1; dpAmount <= amount; dpAmount++) {
		for (const coin of coins) {
			if (dpAmount - coin >= 0) {
				dp[dpAmount] = Math.min(dp[dpAmount], 1 + dp[dpAmount - coin]);
			}
		}
	}
	return dp[amount] !== Infinity ? dp[amount] : -1;
}

test('Coin Change', () => {
	expect(coinChange([1, 2, 5], 11)).toEqual(3);
	expect(coinChange([2], 3)).toEqual(-1);
	expect(coinChange([1], 0)).toEqual(0);
});
