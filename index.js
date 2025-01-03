const ss=`Dynamic programming is a powerful tec
hnique that optimizes recursive algorithms by st
oring previously computed results, significantly improv
ing performance. It’s commonly used for optimization pro
blems like the Fibonacci sequence, knapsack problem, lon
gest common subsequence, etc.

Let me know if you'd like more examples or if y
ou want to explore a specific DP problem in detail`
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


