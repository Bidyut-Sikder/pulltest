
 
function knapsack(weights, values, capacity, n, memo = {}) {
    if (n === 0 || capacity === 0) return 0;

    const key = `${n}-${capacity}`;
    if (key in memo) return memo[key];

    if (weights[n - 1] <= capacity) {
        memo[key] = Math.max(
            values[n - 1] + knapsack(weights, values, capacity - weights[n - 1], n - 1, memo),
            knapsack(weights, values, capacity, n - 1, memo)
        );
    } else {
        memo[key] = knapsack(weights, values, capacity, n - 1, memo);
    }

    return memo[key];
}

const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;

console.log(knapsack(weights, values, capacity, weights.length)); // Output: 7

const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;

console.log(knapsack(weights, values, capacity, weights.length)); // Output: 7

function fibonacci(n) {
    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8




function gameChanger(){
    console.log('bidyut from game changer')
}


function factorial(n) {
    // Base case
    if (n <= 1) {
        return 1;
    }

    // Recursive case
    return n * factorial(n - 1);
}


