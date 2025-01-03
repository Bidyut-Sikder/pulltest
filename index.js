// MathLib.js
const MathLib = (function () {
    // Private methods (not exposed outside the library)
    function isNumber(value) {
      return typeof value === "number" && !isNaN(value);
import React, { useState } from 'react';

const MessageUpdater = () => {
  // State to hold the message
  const [message, setMessage] = useState("Hello, world!");

  // Function to update the message
  const updateMessage = () => {
    setMessage("You've clicked the button!");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={updateMessage}>Click me</button>
    </div>
  );
};

export default MessageUpdater;

 
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
  
    // Exposed methods
    return {
      add: function (a, b) {
        if (!isNumber(a) || !isNumber(b)) {
          throw new Error("Both arguments must be numbers");
        }
        return a + b;
      },
  
      subtract: function (a, b) {
        if (!isNumber(a) || !isNumber(b)) {
          throw new Error("Both arguments must be numbers");
        }
        return a - b;
      },
  
      multiply: function (a, b) {
        if (!isNumber(a) || !isNumber(b)) {
          throw new Error("Both arguments must be numbers");
        }
        return a * b;
      },
  
      divide: function (a, b) {
        if (!isNumber(a) || !isNumber(b)) {
          throw new Error("Both arguments must be numbers");
        }
        if (b === 0) {
          throw new Error("Division by zero is not allowed");
        }
        return a / b;
      },
    };
  })();
  
  // Usage Example
  console.log(MathLib.add(5, 3)); // Output: 8
  console.log(MathLib.subtract(5, 3)); // Output: 2
  console.log(MathLib.multiply(5, 3)); // Output: 15
  console.log(MathLib.divide(6, 3)); // Output: 2
  
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


