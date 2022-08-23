// Min Cost Climbing Stairs
// Dynamic Programming

// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
// You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor.

// https://leetcode.com/problems/min-cost-climbing-stairs/

export function minCostClimbingStairs(cost: number[]): number {
	for (let i = 2; i < cost.length; i++) {
		cost[i] += Math.min(cost[i - 1], cost[i - 2]);
	}

	return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
}

test('Min Cost Climbing Stairs', () => {
	expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
	expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
});
