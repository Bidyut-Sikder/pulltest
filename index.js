function knapsack(weights, values, capacity, n) {
    if (n === 0 || capacity === 0) return 0;

    if (weights[n - 1] <= capacity) {
        return Math.max(
            values[n - 1] + knapsack(weights, values, capacity - weights[n - 1], n - 1),
            knapsack(weights, values, capacity, n - 1)
        );
    } else {
        return knapsack(weights, values, capacity, n - 1);
    }
}





function fibonacci(n) {
    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8



function confilct(){
    console.log('lets see confilct resolved')
}

const text='i dont no what just happned'
hi()


const newthing='i added this from gihub'


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

console.log(factorial(5)); // Output: 120
function factorial(n) {
    // Base case
    if (n <= 1) {
        return 1;
    }

    // Recursive case
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120


