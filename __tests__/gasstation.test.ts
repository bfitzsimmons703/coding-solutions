// Gas Station
// Greedy

// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station.
// You begin the journey with an empty tank at one of the gas stations.
// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.
// If there exists a solution, it is guaranteed to be unique

export function canCompleteCircuit(gas: number[], cost: number[]): number {
	// If sum(gas) < sum(cost) we know there is no solution
	const gasSum = gas.reduce((prev, curr) => prev + curr);
	const costSum = cost.reduce((prev, curr) => prev + curr);

	if (gasSum < costSum) return -1;

	let total = 0;
	let start = 0;
	for (let i = 0; i < gas.length; i++) {
		total += gas[i] - cost[i];
		if (total < 0) {
			total = 0;
			start = i + 1;
		}
	}

	return start;
}

test('Gas Station', () => {
	expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toEqual(3);
	expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toEqual(-1);
});
