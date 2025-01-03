
 
function knapsack(weights, values, capacity, n) {
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

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


